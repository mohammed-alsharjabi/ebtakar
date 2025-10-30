/* ===== SERVICES interactions (scoped to #services) ===== */
(() => {
  const root = document.querySelector('#services');
  if (!root) return;

  // pick only service cards
  const cards = Array.from(root.querySelectorAll('.card'));

  // If some global CSS set inline opacity, clear it
  cards.forEach((c) => c.style.removeProperty('opacity'));

  // Reveal on scroll
  const ioOptions = { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0.15 };
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal');
        revealIO.unobserve(e.target);
      }
    });
  }, ioOptions);

  cards.forEach((c, i) => {
    c.style.transitionDelay = `${i * 70}ms`;
    revealIO.observe(c);
  });

  // Tilt + glow follow (pointer)
  const onMove = (card, ev) => {
    const r = card.getBoundingClientRect();
    const x = ev.clientX - r.left;
    const y = ev.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -10;
    const ry = ((x / r.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    card.style.setProperty('--mx', x + 'px');
    card.style.setProperty('--my', y + 'px');
  };

  cards.forEach((card) => {
    card.addEventListener('pointermove', (ev) => onMove(card, ev));
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  // Ripple via event delegation inside #services
  root.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.a-btn');
    if (!btn || !root.contains(btn)) return;
    const r = btn.getBoundingClientRect();
    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.left = (ev.clientX - r.left) + 'px';
    span.style.top  = (ev.clientY - r.top)  + 'px';
    btn.appendChild(span);
    span.addEventListener('animationend', () => span.remove(), { once: true });
  });

  // Safety: if IntersectionObserver unsupported, reveal immediately
  if (typeof window.IntersectionObserver === 'undefined') {
    cards.forEach((c) => c.classList.add('reveal'));
  }
})();
