// // Year
// document.getElementById('y').textContent = new Date().getFullYear();

// // Mobile drawer
// const toggle = document.querySelector('.menu-toggle');
// const drawer = document.getElementById('drawer');
// toggle?.addEventListener('click', () => drawer.classList.toggle('open'));
// drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));

// // Smooth scroll + active link highlight
// const links = document.querySelectorAll('.nav-links a, .drawer a');
// links.forEach(a=>{
//   a.addEventListener('click', (e)=>{
//     const id=a.getAttribute('href');
//     if(id?.startsWith('#')){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:'smooth'})}
//   });
// });

// const opts={rootMargin:'-38% 0px -52% 0px', threshold:0};
// const io=new IntersectionObserver((entries)=>{
//   entries.forEach(entry=>{
//     if(entry.isIntersecting){
//       document.querySelectorAll('.nav-links a').forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+entry.target.id));
//       entry.target.classList.add('in');
//     }
//   });
// },opts);
// document.querySelectorAll('section[id]').forEach(sec=>io.observe(sec));

// // =================== i18n (AR/EN Toggle with U-ARE phrasing) ===================
// const t = {
//   ar: {
//     nav_home:"الرئيسية",
//     nav_services:"الخدمات",
//     nav_projects:"المشاريع",
//     nav_tech:"التقنيات",
//     nav_team:"الفريق",
//     nav_contact:"تواصل",
//     mega_head:"أهلاً بك",
//     hero_title:" شركة الابتكار تك ",
//     hero_gradient_line:"نقدّم حلولاً رقمية متقدمة",
//     hero_plain_line:"— تصميم، تطوير، وتسليم متقن بمقاسات دقيقة وتجربة مدروسة.",
//     cta_explore:"استكشف الخدمات",
//     cta_projects:"شاهد الأعمال",
//     cta_whatsapp:"تواصل واتساب",
//     cta_quote:"اطلب عرض سعر",
//     sec_about:"نبذة عنا",
//     about_line1:"نحن خبراء في بناء المنتجات الرقمية التي تصنع فرقًا حقيقيًا.",
//     about_line2:"نمزج بين هندسة الواجهات، تكاملات موثوقة، وخطة تسليم واضحة لتقديم نتائج قابلة للقياس.",
//     sec_services:"الخدمات",
//     lead_services:"مواقع وتطبيقات عالية الأداء، لوحات تحكم واضحة، تكاملات دفع/شحن، وتحسين أداء وSEO.",
//     sec_tech:"التقنيات",
//     lead_tech:"Flutter • Laravel • Next.js • Firebase • Supabase • Maps • Payments",
//     sec_team:"الفريق",
//     lead_team:"مطورون ومصممون يعملون بتناغم لتسليم منتج مكتمل.",
//     sec_contact:"تواصل",
//     lead_contact:"ابدأ مشروعك برسالة واحدة—نحدد المتطلبات والميزانية وخطة التنفيذ بدقة.",
//     svc_web_title:"مواقع ويب احترافية",
//     svc_web_desc:"مواقع حديثة سريعة التحميل، محسّنة لمحركات البحث، ومبنية بمعايير أمان وتجربة مستخدم عالية.",
//     svc_web_b1:"تصميم Hero متقدم + هوية مرئية متكاملة",
//     svc_web_b2:"أداء عالٍ (Lighthouse) وتوافق مع SEO",
//     svc_web_b3:"تكاملات دفع وشحن ونماذج تواصل",
//     svc_mobile_title:"تطبيقات موبايل (Flutter)",
//     svc_mobile_desc:"تطبيقات iOS وAndroid بكود موحّد، أداء قوي، وتجربة سلسة مع تكاملات الخريطة والإشعارات.",
//     svc_mobile_b1:"بنية نظيفة + إدارة حالة احترافية",
//     svc_mobile_b2:"تكامل Firebase/Maps/Notifications",
//     svc_mobile_b3:"رفع المتاجر + CI/CD",
//     svc_dash_title:"لوحات تحكم وتكاملات",
//     svc_dash_desc:"لوحات بيانات واضحة تربط متجرك أو نظامك بمصادر مختلفة لقرارات أسرع.",
//     svc_dash_b1:"تقارير فورية ورسوم بيانية تفاعلية",
//     svc_dash_b2:"أذونات وأدوار وإدارة مستخدمين",
//     svc_dash_b3:"تكامل بوابات دفع وشركات شحن",
//     svc_cta:"ابدأ الآن",
//   },
//   en: {
//     nav_home:"Home",
//     nav_services:"Services",
//     nav_projects:"Projects",
//     nav_tech:"Technologies",
//     nav_team:"Team",
//     nav_contact:"Contact",
//     mega_head:"WELCOME",
//     hero_title:"Ebtakar Tech",
//     hero_gradient_line:"We are experts in the digital world.",
//     hero_plain_line:" Our products are built with precision design, strong engineering, and on-time delivery.",
//     cta_explore:"Explore Services",
//     cta_projects:"View Projects",
//     cta_whatsapp:"WhatsApp",
//     cta_quote:"Get a Quote",
//     sec_about:"About Us",
//     about_line1:"We craft digital products that truly move the needle.",
//     about_line2:"We combine refined UI, reliable integrations, and clear delivery to produce measurable outcomes.",
//     sec_services:"Services",
//     lead_services:"High-performance web & mobile, dashboards, payments/shipping integrations, performance & SEO.",
//     sec_tech:"Technologies",
//     lead_tech:"Flutter • Laravel • Next.js • Firebase • Supabase • Maps • Payments",
//     sec_team:"Team",
//     lead_team:"Designers and engineers working as one to ship complete products.",
//     sec_contact:"Contact",
//     lead_contact:"Kick off your project—clear requirements, budget, and plan.",
//     svc_web_title:"High-end Websites",
//     svc_web_desc:"Modern, fast, SEO-ready sites with strong security and polished UX.",
//     svc_web_b1:"Advanced hero + cohesive brand identity",
//     svc_web_b2:"High Lighthouse scores & SEO compliance",
//     svc_web_b3:"Payments, shipping & contact flows",
//     svc_mobile_title:"Mobile Apps (Flutter)",
//     svc_mobile_desc:"iOS & Android from one codebase with great performance and smooth UX.",
//     svc_mobile_b1:"Clean architecture + state management",
//     svc_mobile_b2:"Firebase/Maps/Notifications integrations",
//     svc_mobile_b3:"Store publishing + CI/CD",
//     svc_dash_title:"Dashboards & Integrations",
//     svc_dash_desc:"Clear analytics dashboards connected to your stack for faster decisions.",
//     svc_dash_b1:"Realtime reports & interactive charts",
//     svc_dash_b2:"Roles, permissions & user management",
//     svc_dash_b3:"Payment & shipping integrations",
//     svc_cta:"Start now",
//   }
// };

// const langBtn = document.getElementById('langSwitch');
// let lang = 'ar';
// function applyLang(){
//   const dict = t[lang];
//   document.documentElement.lang = lang;
//   document.documentElement.dir = lang==='ar' ? 'rtl' : 'ltr';
//   document.querySelectorAll('[data-key]').forEach(el=>{ el.textContent = dict[el.dataset.key] || ''});
//   langBtn.textContent = lang.toUpperCase();
//   const lead = document.querySelector('.lead-title');
//   const mega = document.querySelector('.mega');
//   if(lang==='en'){ lead.style.textTransform='uppercase'; lead.style.letterSpacing='1px'; mega.style.textTransform='uppercase'; }
//   else { lead.style.textTransform='none'; lead.style.letterSpacing='0'; mega.style.textTransform='none'; }
// }
// langBtn.addEventListener('click',()=>{ lang = (lang==='ar'?'en':'ar'); applyLang(); });
// applyLang();

// // ===== Pro Card Interactions (3D Tilt, Parallax, Ripple, Toggle) =====
// const cards = document.querySelectorAll('.pro-card');
// function clamp(n, min, max){ return Math.max(min, Math.min(n, max)); }

// cards.forEach(card=>{
//   const content = card.querySelector('.pro-content');
//   const orb     = card.querySelector('.pro-orb');

//   // 3D tilt + parallax
//   function onMove(e){
//     const r = card.getBoundingClientRect();
//     const x = (e.clientX || (r.left + r.width/2)) - r.left;
//     const y = (e.clientY || (r.top + r.height/2)) - r.top;
//     const px = (x / r.width) * 2 - 1;   // -1 .. 1
//     const py = (y / r.height)* 2 - 1;

//     const rotX = clamp(-py * 6, -8, 8);
//     const rotY = clamp( px * 8, -10,10);

//     card.style.transform   = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
//     content.style.transform= `translateZ(35px) translate3d(${px*6}px, ${py*6}px, 0)`;
//     orb.style.transform    = `translate3d(${px*12}px, ${py*8}px, 0)`;
//   }
//   function onLeave(){
//     card.style.transform = `rotateX(0) rotateY(0)`;
//     content.style.transform = `translateZ(35px)`;
//     orb.style.transform = `translate3d(0,0,0)`;
//   }

//   card.addEventListener('mousemove', onMove);
//   card.addEventListener('mouseleave', onLeave);

//   // Toggle details + ripple
//   card.addEventListener('click', (e)=>{
//     const r = card.getBoundingClientRect();
//     const rx = (e.clientX || (r.left + r.width/2)) - r.left;
//     const ry = (e.clientY || (r.top + r.height/2)) - r.top;
//     card.style.setProperty('--rx', rx+'px');
//     card.style.setProperty('--ry', ry+'px');

//     card.classList.remove('ripple'); void card.offsetWidth; card.classList.add('ripple');
//     card.classList.toggle('open');
//   });

//   // CTA mirrors the card behavior
//   card.querySelector('.pro-btn')?.addEventListener('click', (e)=>{ e.stopPropagation(); card.click(); });
// });




// ============== Utilities ==============
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const $  = (sel, ctx=document) => ctx.querySelector(sel);

// Year (safe)
(() => {
  const y = document.getElementById('y') || document.getElementById('year') || document.getElementById('yCopy');
  if (y) y.textContent = new Date().getFullYear();
})();

// Mobile drawer (safe)
(() => {
  const toggle = $('.menu-toggle');
  const drawer = $('#drawer');
  toggle?.addEventListener('click', () => drawer?.classList.toggle('open'));
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click',()=> drawer.classList.remove('open')));
})();

// Smooth scroll + active link
(() => {
  const links = $$('.nav-links a, .drawer a');
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id=a.getAttribute('href');
      if(id?.startsWith('#')){
        e.preventDefault();
        const target = $(id);
        target?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
  const opts={rootMargin:'-38% 0px -52% 0px', threshold:0};
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        $$('.nav-links a').forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+entry.target.id));
        entry.target.classList.add('in');
      }
    });
  },opts);
  $$('section[id]').forEach(sec=>io.observe(sec));
})();

// =================== i18n (AR/EN) ===================
(() => {
  const t = {
    ar:{ nav_home:"الرئيسية",nav_services:"الخدمات",nav_projects:"المشاريع",nav_tech:"التقنيات",nav_team:"الفريق",nav_contact:"تواصل",
      mega_head:"أهلاً بك",hero_title:" شركة الابتكار تك ",hero_gradient_line:"نقدّم حلولاً رقمية متقدمة",
      hero_plain_line:"— تصميم، تطوير، وتسليم متقن بمقاسات دقيقة وتجربة مدروسة.",
      cta_explore:"استكشف الخدمات",cta_projects:"شاهد الأعمال",cta_whatsapp:"تواصل واتساب",cta_quote:"اطلب عرض سعر",
      sec_about:"نبذة عنا",about_line1:"نحن خبراء في بناء المنتجات الرقمية التي تصنع فرقًا حقيقيًا.",
      about_line2:"نمزج بين هندسة الواجهات، تكاملات موثوقة، وخطة تسليم واضحة لتقديم نتائج قابلة للقياس.",
      sec_services:"الخدمات",lead_services:"مواقع وتطبيقات عالية الأداء، لوحات تحكم واضحة، تكاملات دفع/شحن، وتحسين أداء وSEO.",
      sec_tech:"التقنيات",lead_tech:"Flutter • Laravel • Next.js • Firebase • Supabase • Maps • Payments",
      sec_team:"الفريق",lead_team:"مطورون ومصممون يعملون بتناغم لتسليم منتج مكتمل.",
      sec_contact:"تواصل",lead_contact:"ابدأ مشروعك برسالة واحدة—نحدد المتطلبات والميزانية وخطة التنفيذ بدقة.",
      svc_web_title:"مواقع ويب احترافية",svc_web_desc:"مواقع حديثة سريعة التحميل، محسّنة لمحركات البحث، ومبنية بمعايير أمان وتجربة مستخدم عالية.",
      svc_web_b1:"تصميم Hero متقدم + هوية مرئية متكاملة",svc_web_b2:"أداء عالٍ (Lighthouse) وتوافق مع SEO",svc_web_b3:"تكاملات دفع وشحن ونماذج تواصل",
      svc_mobile_title:"تطبيقات موبايل (Flutter)",svc_mobile_desc:"تطبيقات iOS وAndroid بكود موحّد، أداء قوي، وتجربة سلسة مع تكاملات الخريطة والإشعارات.",
      svc_mobile_b1:"بنية نظيفة + إدارة حالة احترافية",svc_mobile_b2:"تكامل Firebase/Maps/Notifications",svc_mobile_b3:"رفع المتاجر + CI/CD",
      svc_dash_title:"لوحات تحكم وتكاملات",svc_dash_desc:"لوحات بيانات واضحة تربط متجرك أو نظامك بمصادر مختلفة لقرارات أسرع.",
      svc_dash_b1:"تقارير فورية ورسوم بيانية تفاعلية",svc_dash_b2:"أذونات وأدوار وإدارة مستخدمين",svc_dash_b3:"تكامل بوابات دفع وشركات شحن",
      svc_cta:"ابدأ الآن",
    },
    en:{ nav_home:"Home",nav_services:"Services",nav_projects:"Projects",nav_tech:"Technologies",nav_team:"Team",nav_contact:"Contact",
      mega_head:"WELCOME",hero_title:"Ebtakar Tech",hero_gradient_line:"We are experts in the digital world.",
      hero_plain_line:" Our products are built with precision design, strong engineering, and on-time delivery.",
      cta_explore:"Explore Services",cta_projects:"View Projects",cta_whatsapp:"WhatsApp",cta_quote:"Get a Quote",
      sec_about:"About Us",about_line1:"We craft digital products that truly move the needle.",
      about_line2:"We combine refined UI, reliable integrations, and clear delivery to produce measurable outcomes.",
      sec_services:"Services",lead_services:"High-performance web & mobile, dashboards, payments/shipping integrations, performance & SEO.",
      sec_tech:"Technologies",lead_tech:"Flutter • Laravel • Next.js • Firebase • Supabase • Maps • Payments",
      sec_team:"Team",lead_team:"Designers and engineers working as one to ship complete products.",
      sec_contact:"Contact",lead_contact:"Kick off your project—clear requirements, budget, and plan.",
      svc_web_title:"High-end Websites",svc_web_desc:"Modern, fast, SEO-ready sites with strong security and polished UX.",
      svc_web_b1:"Advanced hero + cohesive brand identity",svc_web_b2:"High Lighthouse scores & SEO compliance",svc_web_b3:"Payments, shipping & contact flows",
      svc_mobile_title:"Mobile Apps (Flutter)",svc_mobile_desc:"iOS & Android from one codebase with great performance and smooth UX.",
      svc_mobile_b1:"Clean architecture + state management",svc_mobile_b2:"Firebase/Maps/Notifications integrations",svc_mobile_b3:"Store publishing + CI/CD",
      svc_dash_title:"Dashboards & Integrations",svc_dash_desc:"Clear analytics dashboards connected to your stack for faster decisions.",
      svc_dash_b1:"Realtime reports & interactive charts",svc_dash_b2:"Roles, permissions & user management",svc_dash_b3:"Payment & shipping integrations",
      svc_cta:"Start now",
    }
  };

  const langBtn = document.getElementById('langSwitch');
  let lang = (document.documentElement.lang === 'en') ? 'en' : 'ar';

  const applyLang = () => {
    const dict = t[lang] || t.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang==='ar' ? 'rtl' : 'ltr';
    $$('[data-key]').forEach(el => { el.textContent = dict[el.dataset.key] || ''; });

    if (langBtn) langBtn.textContent = lang.toUpperCase();

    const lead = $('.lead-title'); const mega = $('.mega');
    if (lead && mega){
      if(lang==='en'){ lead.style.textTransform='uppercase'; lead.style.letterSpacing='1px'; mega.style.textTransform='uppercase'; }
      else { lead.style.textTransform='none'; lead.style.letterSpacing='0'; mega.style.textTransform='none'; }
    }
  };

  langBtn?.addEventListener('click', () => { lang = (lang==='ar' ? 'en' : 'ar'); applyLang(); });
  applyLang();
})();

// ===== Pro Card Interactions (safe) =====
(() => {
  const cards = $$('.pro-card');
  const clamp=(n,min,max)=>Math.max(min,Math.min(n,max));
  cards.forEach(card=>{
    const content = card.querySelector('.pro-content');
    const orb     = card.querySelector('.pro-orb');

    function onMove(e){
      const r = card.getBoundingClientRect();
      const x = (e.clientX ?? (r.left + r.width/2)) - r.left;
      const y = (e.clientY ?? (r.top + r.height/2))  - r.top;
      const px = (x / r.width) * 2 - 1;
      const py = (y / r.height)* 2 - 1;
      const rotX = clamp(-py * 6, -8, 8);
      const rotY = clamp( px * 8, -10,10);
      card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      content && (content.style.transform=`translateZ(35px) translate3d(${px*6}px, ${py*6}px, 0)`);
      orb && (orb.style.transform=`translate3d(${px*12}px, ${py*8}px, 0)`);
    }
    function onLeave(){
      card.style.transform = `rotateX(0) rotateY(0)`;
      content && (content.style.transform = `translateZ(35px)`);
      orb && (orb.style.transform = `translate3d(0,0,0)`);
    }
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);

    card.addEventListener('click',(e)=>{
      const r = card.getBoundingClientRect();
      const rx = (e.clientX ?? (r.left+r.width/2)) - r.left;
      const ry = (e.clientY ?? (r.top+r.height/2))  - r.top;
      card.style.setProperty('--rx', rx+'px');
      card.style.setProperty('--ry', ry+'px');
      card.classList.remove('ripple'); void card.offsetWidth; card.classList.add('ripple');
      card.classList.toggle('open');
    });
    card.querySelector('.pro-btn')?.addEventListener('click',(e)=>{ e.stopPropagation(); card.click(); });
  });
})();
