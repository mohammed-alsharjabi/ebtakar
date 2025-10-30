 // Press animation for choose buttons
    const press = (el) => {
      el.animate([{ transform: 'scale(1)' }, { transform: 'scale(.97)' }, { transform: 'scale(1)' }], { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }
    document.querySelectorAll('.choose-plan').forEach(b => {
      b.addEventListener('click', () => press(b));
    });

    // Ripple on card click
    document.querySelectorAll('.pkg').forEach(card => {
      card.addEventListener('click', () => {
        card.animate([{ boxShadow: '0 0 0 0 rgba(122,164,255,.0)' }, { boxShadow: '0 0 0 12px rgba(122,164,255,.15)' }, { boxShadow: '0 0 0 0 rgba(122,164,255,.0)' }], { duration: 600 });
      });
    });