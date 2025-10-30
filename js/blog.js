
const $  = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const onReady = (fn) => (document.readyState === 'loading')
  ? document.addEventListener('DOMContentLoaded', fn)
  : fn();

onReady(() => {
  const tracks = $$('.blog-section .blog-cards');
  if (!tracks.length) return;

  tracks.forEach(track => {
    // إعدادات أساسية للسحب
    track.style.cursor = 'grab';
    track.style.webkitOverflowScrolling = 'touch';
    track.style.scrollBehavior = 'auto';
    // مهم للموبايل: اسمح بالتمرير العمودي للنظام، ونحن نمسك الأفقي
    track.style.touchAction = 'pan-y';

    let isDown = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;
    let downTarget = null;

    // لا نريد سحب صور/نصوص بشكل وهمي
    track.addEventListener('dragstart', e => e.preventDefault(), { passive:false });
    track.querySelectorAll('img,a').forEach(el => el.setAttribute('draggable', 'false'));

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
    const THRESHOLD = 8; // متى نعتبرها سحب

    const pointerDown = (e) => {
      isDown = true;
      moved = false;
      startX = getX(e);
      startScroll = track.scrollLeft;
      downTarget = e.target;          // لمعرفة هل النقرة كانت على رابط
      track.classList.add('dragging');
      track.style.cursor = 'grabbing';
      // ما نمنع الافتراضي هنا عشان نسمح بالضغط
    };

    const pointerMove = (e) => {
      if (!isDown) return;
      const dx = getX(e) - startX;
      if (Math.abs(dx) > THRESHOLD) moved = true;
      track.scrollLeft = startScroll - dx;
      // أثناء السحب فقط نمنع الافتراضي لتفادي تحديد نص/سحب صورة
      e.preventDefault?.();
    };

    const pointerUp = () => {
      isDown = false;
      // نرجع المؤشر
      track.classList.remove('dragging');
      track.style.cursor = 'grab';
      // نسمح بالضغط التالي طبيعي
      setTimeout(() => { moved = false; downTarget = null; }, 0);
    };

    // دعم Pointer Events إن وجدت
    if ('PointerEvent' in window) {
      track.addEventListener('pointerdown',  pointerDown, { passive:true  });
      track.addEventListener('pointermove',  pointerMove, { passive:false });
      track.addEventListener('pointerup',    pointerUp,   { passive:true  });
      track.addEventListener('pointercancel',pointerUp,   { passive:true  });
      track.addEventListener('pointerleave', pointerUp,   { passive:true  });
    } else {
      // Fallback للماوس/اللمس
      track.addEventListener('mousedown', pointerDown, { passive:true });
      window.addEventListener('mousemove', pointerMove, { passive:false });
      window.addEventListener('mouseup',   pointerUp,   { passive:true  });

      track.addEventListener('touchstart', pointerDown, { passive:true  });
      track.addEventListener('touchmove',  pointerMove, { passive:false });
      track.addEventListener('touchend',   pointerUp,   { passive:true  });
      track.addEventListener('touchcancel',pointerUp,   { passive:true  });
    }

    // أهم نقطة: لا نمنع فتح الرابط إلا إذا كانت الحركة سحب فعلًا
    track.addEventListener('click', (e) => {
      if (!moved) return;                 // نقرة عادية → افتح الرابط
      const a = e.target.closest('a');
      if (a && track.contains(a)) e.preventDefault(); // كانت سحبًا → لا تفتح
    }, false);

    // جعل عجلة الماوس تحرّك أفقيًا (مفيد للكمبيوتر)
    track.addEventListener('wheel', (e) => {
      const absY = Math.abs(e.deltaY), absX = Math.abs(e.deltaX);
      if (absY > absX) {                  // لف عمودي → حوّله لأفقي
        track.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive:false });
  });
});
