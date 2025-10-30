/* =========================================================
   KPIs + Works (Reveal/Tilt) + Horizontal Drag (Works/Clients)
   إضافة سحب أفقي بالضغط مع خمول، وعجلة الماوس → تمرير أفقي
   ========================================================= */

(function(){
  const $$  = (sel, ctx=document)=> Array.from(ctx.querySelectorAll(sel));
  const onReady = (fn)=> (document.readyState==='loading') ? document.addEventListener('DOMContentLoaded', fn) : fn();
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  const fmt = (v,d=0)=> Number(v).toLocaleString('ar-EG',{minimumFractionDigits:d, maximumFractionDigits:d});

  /* ===== أداة عامة: سحب أفقي لأي مسار ===== */
  function initHorizontalDrag(track, {inertia=true, lockClick=true, wheelToX=true}={}){
    if(!track) return;

    // لا تسمح بسحب الصور الافتراضي
    track.querySelectorAll('img').forEach(img => img.setAttribute('draggable','false'));

    let dragging=false, startX=0, startLeft=0, moved=false;
    let vx=0, lastT=0, lastX=0, rafId=null;

    const stopInertia = ()=>{ if(rafId){ cancelAnimationFrame(rafId); rafId=null; } };

    const getX = (e)=> (e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0);

    const onDown = (e)=>{
      // لا نمنع النقر على الروابط/الأزرار، لكن لا نبدأ السحب من فوقها
      if (e.target.closest('a,button')) return;
      dragging=true; moved=false; vx=0; lastT=performance.now();
      const x = getX(e);
      startX=x; lastX=x; startLeft=track.scrollLeft; stopInertia();
      track.setPointerCapture?.(e.pointerId);
      track.classList.add('dragging'); track.style.cursor='grabbing';
      e.preventDefault?.();
    };

    const onMove = (e)=>{
      if(!dragging) return;
      const x = getX(e);
      const dx = x - startX;
      if(Math.abs(dx)>3) moved=true;

      track.scrollLeft = startLeft - dx;

      const now = performance.now(), dt = now - lastT;
      if(dt>0){ vx = (x - lastX)/dt; lastT = now; lastX = x; }
      e.preventDefault?.();
    };

    const onUp = (e)=>{
      if(!dragging) return;
      dragging=false; track.classList.remove('dragging'); track.style.cursor='grab';
      track.releasePointerCapture?.(e.pointerId);

      // خمول
      if(inertia){
        let scroll = track.scrollLeft;
        const decay = 0.95;
        const step = ()=>{
          vx *= decay;
          if(Math.abs(vx) < 0.01){ rafId=null; return; }
          scroll -= vx * 16; // ~16ms/frame
          track.scrollLeft = scroll;
          rafId = requestAnimationFrame(step);
        };
        if(Math.abs(vx) > 0.02) rafId = requestAnimationFrame(step);
      }
    };

    // قفل فتح الرابط إذا كان في سحب
    if(lockClick){
      track.addEventListener('click', (e)=>{
        if(!moved) return;
        const a = e.target.closest('a');
        if(a) e.preventDefault();
      }, true);
    }

    // أحداث المؤشر
    if('PointerEvent' in window){
      track.addEventListener('pointerdown', onDown, {passive:false});
      track.addEventListener('pointermove', onMove, {passive:false});
      track.addEventListener('pointerup',   onUp,   {passive:true});
      track.addEventListener('pointercancel', onUp, {passive:true});
      track.addEventListener('pointerleave',  onUp, {passive:true});
    }else{
      // Fallback قديم
      track.addEventListener('mousedown', onDown, {passive:false});
      window.addEventListener('mousemove', onMove, {passive:false});
      window.addEventListener('mouseup',   onUp,   {passive:true});
      track.addEventListener('touchstart', onDown, {passive:false});
      track.addEventListener('touchmove',  onMove, {passive:false});
      track.addEventListener('touchend',   onUp,   {passive:true});
      track.addEventListener('touchcancel',onUp,   {passive:true});
    }

    // عجلة الماوس → تمرير أفقي (مثل المتاجر)
    if(wheelToX){
      track.addEventListener('wheel', (e)=>{
        if(Math.abs(e.deltaY) > Math.abs(e.deltaX) || e.shiftKey){
          e.preventDefault();
          track.scrollLeft += (e.deltaX || e.deltaY) * 0.9;
        }
      }, {passive:false});
    }

    // مؤشّر افتراضي مناسب
    track.style.cursor = 'grab';
    track.setAttribute('tabindex','0'); // للوصولية (أسهم/تركيز)
    track.addEventListener('keydown', (e)=>{
      const step = 220;
      if(e.key === 'ArrowRight'){ e.preventDefault(); track.scrollLeft += step; }
      if(e.key === 'ArrowLeft'){  e.preventDefault(); track.scrollLeft -= step; }
    });
  }

  onReady(()=>{

    /* ===== KPIs: عدّاد + شريط تقدّم + لمعان ===== */
    const kpis = $$('#metricsTable .kpi-card');
    if(kpis.length){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(!e.isIntersecting) return;
          const card = e.target;
          const target   = parseFloat(card.dataset.target||'0');
          const decimals = parseInt(card.dataset.decimals||'0',10);
          const max      = parseFloat(card.dataset.max||target||100) || 100;

          const valEl = card.querySelector('.val');
          const fill  = card.querySelector('.kpi-bar .fill');

          const dur = 1100; const start = performance.now();
          const tick = (t)=>{
            const p = Math.min(1,(t-start)/dur);
            const eased = easeOutCubic(p);
            const val = target*eased;
            if(valEl) valEl.textContent = fmt(val, decimals);
            if(fill)  fill.style.width = (Math.max(0, Math.min(1, val / max))*100) + '%';
            if(p<1) requestAnimationFrame(tick); else if(valEl) valEl.textContent = fmt(target, decimals);
          };
          requestAnimationFrame(tick);

          io.unobserve(card);
        });
      },{ threshold:.55 });
      kpis.forEach(k=>io.observe(k));

      // لمعان متفاعل فوق الشريط
      kpis.forEach(card=>{
        const bar = card.querySelector('.kpi-bar'); if(!bar) return;
        const setXY = (ev)=>{
          const r = bar.getBoundingClientRect();
          card.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
          card.style.setProperty('--my', (ev.clientY - r.top) + 'px');
        };
        let active = false;
        bar.addEventListener('pointerdown', (ev)=>{ active=true; card.classList.add('is-active'); bar.setPointerCapture(ev.pointerId); setXY(ev); });
        bar.addEventListener('pointermove', (ev)=>{ if(!active) return; setXY(ev); });
        const stop = (ev)=>{ if(!active) return; active=false; card.classList.remove('is-active'); bar.releasePointerCapture?.(ev.pointerId); };
        bar.addEventListener('pointerup', stop);
        bar.addEventListener('pointercancel', stop);
        bar.addEventListener('pointerleave', ()=> card.classList.remove('is-active'));
      });
    }

    /* ===== Works: Reveal + Tilt لطيف ===== */
    const works = $$('#worksShow .work-card');
    if(works.length){
      const revealIO = new IntersectionObserver((ents)=>{
        ents.forEach(e=>{
          if(!e.isIntersecting) return;
          const el = e.target;
          if(el.animate){
            el.animate(
              [{opacity:0, transform:'translate3d(0,18px,-40px) rotateX(6deg) scale(.97)'},
               {opacity:1, transform:'translate3d(0,0,0) rotateX(0) scale(1)'}],
              { duration:650, easing:'cubic-bezier(.2,.8,.2,1)', fill:'both' }
            );
          }else{ el.style.opacity=1; el.style.transform='none'; }
          revealIO.unobserve(el);
        });
      },{ threshold:.22 });
      works.forEach(c=>revealIO.observe(c));

      // Tilt خفيف
      works.forEach(card=>{
        const media = card.querySelector('.media');
        card.addEventListener('pointermove', (ev)=>{
          const r = card.getBoundingClientRect();
          const x = ev.clientX - r.left, y = ev.clientY - r.top;
          const rx = ((y/r.height)-.5)*-6, ry=((x/r.width)-.5)*6;
          card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
          if(media) media.style.transform = `translateZ(24px)`;
        });
        card.addEventListener('pointerleave', ()=>{ card.style.transform=''; if(media) media.style.transform=''; });
      });
    }

    /* ===== Works lanes: تفعيل السحب على المسارات الأفقية ===== */
    // إذا كان لديك بنية: .lane > .lane-track داخل #worksShow
    $$('#worksShow .lane .lane-track').forEach(track=>{
      initHorizontalDrag(track, {inertia:true, lockClick:true, wheelToX:true});
    });

    /* ===== Clients: سحب أفقي (يدعم صفّين عند .rows-2 على الحاوية) ===== */
    $$('#clientsFlex .clients-track').forEach(track=>{
      initHorizontalDrag(track, {inertia:true, lockClick:true, wheelToX:true});
    });

  });
})();




