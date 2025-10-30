// سنة ديناميكية
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// زر الرجوع للأعلى
(function(){
  const btn = document.getElementById('backTop');
  if(!btn) return;
  const onScroll = () => {
    if (window.scrollY > 600) { btn.style.opacity = 1; btn.style.pointerEvents = 'auto'; }
    else { btn.style.opacity = .0; btn.style.pointerEvents = 'none'; }
  };
  btn.style.transition = 'opacity .2s ease';
  window.addEventListener('scroll', onScroll, {passive:true});
  btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  onScroll();
})();

// اشتراك النشرة (عميل وهمي — أرسل على بريدك أو API لاحقًا)
(function(){
  const form = document.getElementById('newsletter');
  if(!form) return;
  const msg = form.querySelector('.msg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = form.email.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      msg.textContent = 'رجاءً أدخل بريدًا صالحًا.'; msg.style.color = '#ffb3b3'; return;
    }
    msg.textContent = 'تم الاشتراك بنجاح. شكرًا لك!'; msg.style.color = '#9fe6a0';
    form.reset();
    // TODO: اربط بـ API (Mailchimp/Elastic Email) هنا
  });
})();

//  (function(){
//     const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
//     const t=document.getElementById('backTop')||document.querySelector('.sf-top');
//     if(t){
//       const on=()=>{const show=window.scrollY>600; t.style.opacity=show?1:0; t.style.pointerEvents=show?'auto':'none';};
//       t.style.transition='opacity .2s ease'; window.addEventListener('scroll',on,{passive:true}); t.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); on();
//     }
//     const f=document.getElementById('newsletter'); if(f){const m=f.querySelector('.sf-msg'); f.addEventListener('submit',e=>{
//       e.preventDefault(); const em=f.email.value.trim();
//       if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){m.textContent='رجاء بريد صالح.'; m.style.color='#ffb3b3'; return;}
//       m.textContent='تم الاشتراك — شكراً لك!'; m.style.color='#9fe6a0'; f.reset();
//     });}
//   })();

