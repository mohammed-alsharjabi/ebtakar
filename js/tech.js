// ../js/tech.js
(function () {
  function ready(fn){ 
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(() => {
    // 1) ألغِ أي reveal على سكشن التقنيات (لو جاي من styles.css)
    const techSection = document.getElementById('tech');
    if (techSection && techSection.classList.contains('reveal')) {
      techSection.classList.remove('reveal');
    }

    // 2) خذ الكروت بشكل صريح داخل #technologies
    const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
    const techCards = $$('#technologies .tech-card');

    // تشخيص سريع بالكونسول
    console.log('[tech.js] techCards found:', techCards.length);

    if (!techCards.length) {
      // لو صفر: غالبًا مشكلة مسار سكربت أو الـ HTML ما يحتوي #technologies وقت التنفيذ
      // خلّينا نحاول مرة ثانية بعد رِفّة (للصفحات اللي تضيف HTML ديناميكيًّا)
      setTimeout(() => {
        const retry = $$('#technologies .tech-card');
        console.log('[tech.js] retry techCards:', retry.length);
        if (!retry.length) {
          console.warn('[tech.js] لا توجد عناصر .tech-card داخل #technologies. تأكد من الـ HTML والمسار.');
        }
      }, 0);
      return;
    }

    // 3) ترتيب التأخير المتدرّج
    techCards.forEach((c, i) => c.style.setProperty('--i', i));

    // 4) كشف عند التمرير + WAAPI
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add('revealed'); // fallback عبر CSS
        if (el.animate) {
          const idx = Number(getComputedStyle(el).getPropertyValue('--i')) || 0;
          el.animate(
            [
              { opacity: 0, transform: 'translate3d(0,24px,-60px) rotateX(8deg) scale(.94)' },
              { opacity: 1, transform: 'translate3d(0,0,0) rotateX(0) scale(1)' }
            ],
            { duration: 650, delay: idx * 70, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
          );
        }
        io.unobserve(el);
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });

    techCards.forEach(card => io.observe(card));

    // 5) ميل ثلاثي الأبعاد + توهّج يتبع المؤشر (مع حارس على .tech-inner)
    techCards.forEach(card => {
      const inner = card.querySelector('.tech-inner');
      card.addEventListener('pointermove', (ev) => {
        const r = card.getBoundingClientRect();
        const x = ev.clientX - r.left, y = ev.clientY - r.top;
        const rx = ((y / r.height) - 0.5) * -10;
        const ry = ((x / r.width) - 0.5) * 10;
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
        if (inner) inner.style.transform = 'translateZ(30px)';
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });

    // 6) رِبل + بامب + بارتيكلز
    function makeRipple(card, x, y){
      const r = document.createElement('span');
      r.className = 'ripple';
      r.style.left = x + 'px';
      r.style.top  = y + 'px';
      card.appendChild(r);
      r.addEventListener('animationend', () => r.remove());
    }
    function burst(card, x, y){
      const colors = ['#58a6ff','#a78bfa','#7dd3fc','#c084fc'];
      const count = 12;
      for(let i=0;i<count;i++){
        const p = document.createElement('span');
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top  = y + 'px';
        const color = colors[i % colors.length];
        p.style.background = `radial-gradient(circle, ${color}, rgba(12,17,23,0) 70%)`;
        card.appendChild(p);
        const angle = (Math.PI*2)*(i/count) + (Math.random()*0.6 - 0.3);
        const dist  = 24 + Math.random()*34;
        const tx = Math.cos(angle)*dist;
        const ty = Math.sin(angle)*dist;
        p.animate(
          [{ transform: 'translate(-50%,-50%)', opacity: 1 },
           { transform: `translate(${tx-50}%, ${ty-50}%)`, opacity: 0 }],
          { duration: 520 + Math.random()*220, easing: 'cubic-bezier(.2,.8,.2,1)' }
        ).onfinish = () => p.remove();
      }
    }
    techCards.forEach(card => {
      card.addEventListener('click', (ev) => {
        const r = card.getBoundingClientRect();
        const x = ev.clientX - r.left, y = ev.clientY - r.top;
        card.classList.remove('bump'); void card.offsetWidth; card.classList.add('bump');
        makeRipple(card, x, y);
        burst(card, x, y);
      });
      card.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          const r = card.getBoundingClientRect();
          const x = r.width/2, y = r.height/2;
          card.classList.remove('bump'); void card.offsetWidth; card.classList.add('bump');
          makeRipple(card, x, y);
          burst(card, x, y);
        }
      });
    });

    // 7) فلوّبّاك طوارئ: لو ولا كرت صار revealed بعد 800ms، اجبر الإظهار
    setTimeout(() => {
      const noneRevealed = !techCards.some(c => c.classList.contains('revealed'));
      if (noneRevealed) {
        techCards.forEach(c => c.classList.add('revealed'));
        console.warn('[tech.js] Forced reveal fallback applied (IO لم يعمل أو أب مخفي).');
      }
    }, 800);

    // 8) FAQ (كما هو)
    $$('.faq-item .faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.toggle('active');
        btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
    });

  });
})();
