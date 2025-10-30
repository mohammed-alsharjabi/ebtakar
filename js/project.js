// ===== Tabs + Lightbox =====
(() => {
  const tabs = document.querySelectorAll('.pd-tab');
  const panels = {
    overview: document.getElementById('pd-overview'),
    features: document.getElementById('pd-features'),
    gallery:  document.getElementById('pd-gallery'),
    links:    document.getElementById('pd-links'),
  };

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      tabs.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      Object.entries(panels).forEach(([k, el]) => {
        if(k === key){ el.classList.add('is-active'); el.hidden = false; }
        else { el.classList.remove('is-active'); el.hidden = true; }
      });
    });
  });

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'pd-lightbox';
  lb.innerHTML = `
    <button class="pd-lightbox-close" aria-label="إغلاق">×</button>
    <img class="pd-lightbox-img" alt="">
  `;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('.pd-lightbox-img');
  const lbClose = lb.querySelector('.pd-lightbox-close');

  const openLb = (src, alt='') => {
    lbImg.src = src; lbImg.alt = alt;
    lb.classList.add('is-open');
  };
  const closeLb = () => lb.classList.remove('is-open');

  document.querySelectorAll('[data-lightbox]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openLb(a.getAttribute('href'), a.querySelector('img')?.getAttribute('alt') || '');
    });
  });
  lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', (e) => { if(e.target === lb) closeLb(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLb(); });
})();
