// assets/js/article.js
(function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');

  const byId = (id) => document.getElementById(id);
  const qs   = (sel, ctx=document) => ctx.querySelector(sel);

  const setMeta = (name, content) => {
    if (!content) return;
    let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('article:')) el.setAttribute('property', name);
      else el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const setOrCreate = (sel, tagName, attrs={}) => {
    let el = document.querySelector(sel);
    if (!el) { el = document.createElement(tagName); document.head.appendChild(el); }
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
    return el;
  };

  const notFound = () => {
    const main = qs('main.container') || document.body;
    main.innerHTML = `<h1>المقال غير موجود</h1><p>تأكد من الرابط أو عُد إلى <a href="/blog">المدونة</a>.</p>`;
  };

  if (!window.POSTS || !Array.isArray(window.POSTS)) return notFound();
  const post = window.POSTS.find(p => p.slug === slug) || window.POSTS[0];
  if (!post) return notFound();

  // ===== Fill head (title/meta/OG)
  document.title = `${post.seoTitle || post.title} | Technovizen`;
  setMeta('description', post.seoDesc || '');
  setMeta('og:type', 'article');
  setMeta('og:site_name', 'Technovizen');
  setMeta('og:locale', 'ar_SA');
  setMeta('og:title', post.seoTitle || post.title);
  setMeta('og:description', post.seoDesc || '');
  setMeta('og:url', post.canonical || location.href);
  setMeta('og:image', post.ogImage || post.cover);
  setMeta('article:published_time', post.dateISO);
  setMeta('article:modified_time', post.dateISO);
  setMeta('article:author', post.author?.name || '');
  setMeta('article:section', post.category || '');
  (post.tags||[]).slice(0,6).forEach(tag => {
    const m = document.createElement('meta'); m.setAttribute('property','article:tag'); m.setAttribute('content', tag);
    document.head.appendChild(m);
  });
  setOrCreate('link[rel="canonical"]','link',{rel:'canonical', href: post.canonical || location.href});

  // ===== Fill header
  const catEl   = qs('.article-header .article-category');
  const titleEl = qs('.article-header .article-title, #title');
  const authAva = qs('.article-author-avatar');
  const authBox = qs('.article-author-info strong');
  const metaRead= qs('.article-header .read-time-value');
  const metaViews= qs('.article-header'); // we'll just append views inside text already present
  const dateEl  = (() => {
    // نحاول إيجاد سبان التاريخ داخل .article-meta — سنترك النص كما هو لديك
    return null;
  })();

  if (catEl)   catEl.textContent = post.category;
  if (titleEl) titleEl.textContent = post.title;
  if (authAva) { authAva.src = post.author?.avatar || authAva.src; authAva.alt = `صورة الكاتب ${post.author?.name||''}`; }
  if (authBox) authBox.textContent = post.author?.name || '';

  // ===== Cover
  const coverImg = qs('.article-cover img');
  if (coverImg) {
    coverImg.src = post.cover;
    coverImg.alt = post.title;
    coverImg.loading = 'eager';
    coverImg.fetchPriority = 'high';
  }

  // ===== Content
  const contentEl = qs('.article-content');
  if (contentEl) {
    contentEl.innerHTML = post.content;

    // احسب وقت القراءة لو مو محدد
    const plain = contentEl.innerText || '';
    const words = plain.trim().split(/\s+/).filter(Boolean).length;
    const minutes = post.readMin || Math.max(1, Math.round(words / 200));
    const readEl = qs('.read-time-value');
    if (readEl) readEl.textContent = String(minutes);
  }

  // ===== Tags
  const tagsWrap = qs('.tags-list');
  if (tagsWrap && post.tags?.length) {
    tagsWrap.innerHTML = post.tags.map(t => `<a class="tag" href="/blog/tag/${encodeURIComponent(t)}">${t}</a>`).join('');
  }

  // ===== Breadcrumbs (اختياري: تحديث آخر عنصر)
  const bcLast = qs('.breadcrumbs li:last-child');
  if (bcLast) bcLast.textContent = post.title;

  // ===== Build TOC (من h2,h3 داخل .article-content)
  const tocList = qs('.table-of-contents ul');
  if (tocList && contentEl) {
    tocList.innerHTML = '';
    const heads = contentEl.querySelectorAll('h2, h3');
    heads.forEach(h => {
      if (!h.id) h.id = h.textContent.trim().replace(/\s+/g,'-').replace(/[^\w\u0600-\u06FF-]/g,'').toLowerCase();
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      if (h.tagName === 'H3') {
        const sub = document.createElement('ul');
        const subLi = document.createElement('li');
        subLi.appendChild(a);
        sub.appendChild(subLi);
        li.appendChild(sub);
      } else {
        li.appendChild(a);
      }
      tocList.appendChild(li);
    });

    // تمييز العنوان الحالي
    const tocLinks = [...tocList.querySelectorAll('a')];
    const map = new Map([...contentEl.querySelectorAll('h2,h3')].map(h => [h.id, tocLinks.find(a => a.getAttribute('href')==='#'+h.id)]));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = map.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) link.classList.add('active'); else link.classList.remove('active');
      });
    }, { rootMargin:'0px 0px -70% 0px', threshold:0.01 });
    contentEl.querySelectorAll('h2,h3').forEach(h => observer.observe(h));
  }

  // ===== Progress bar
  const bar = document.getElementById('progress');
  document.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    if (bar) bar.style.width = scrolled + '%';
  });

  // ===== Share links
  const url = encodeURIComponent(location.href);
  const title = encodeURIComponent(document.title);
  const shareX  = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
  const shareLI = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  const shareWA = `https://api.whatsapp.com/send?text=${title}%20${url}`;
  const x = byId('share-x'), li = byId('share-li'), wa = byId('share-wa');
  if (x) x.href = shareX; if (li) li.href = shareLI; if (wa) wa.href = shareWA;
  const copyBtn = byId('copy-link');
  if (copyBtn) copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(location.href); alert('تم نسخ الرابط'); } catch(e){ alert('لم يتم النسخ'); }
  });

  // ===== JSON-LD (Article + Breadcrumbs + WebSite + FAQ اختياري)
  const addLd = (obj) => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  };

  addLd({
    "@context":"https://schema.org",
    "@type":"Article",
    "headline": post.title,
    "description": post.seoDesc,
    "image": post.ogImage || post.cover,
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "author": {"@type":"Person","name": post.author?.name || ""},
    "publisher": {"@type":"Organization","name":"Technovizen"},
    "mainEntityOfPage": {"@type":"WebPage","@id": post.canonical || location.href},
    "articleSection": post.category,
    "keywords": (post.tags||[]).join(", ")
  });

  addLd({
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"الرئيسية","item": location.origin + "/"},
      {"@type":"ListItem","position":2,"name":"المدونة","item": location.origin + "/blog"},
      {"@type":"ListItem","position":3,"name": post.category, "item": location.origin + "/blog/category"},
      {"@type":"ListItem","position":4,"name": post.title}
    ]
  });

})();
