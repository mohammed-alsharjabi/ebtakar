// contact.js — تحسينات خفيفة لحقل الهاتف والسهولة
(function () {
  const $ = (s, c = document) => c.querySelector(s);

  // يغيّر placeholder حسب الدولة المختارة
  const dial = $('#dial');
  const phone = $('#phone');
  if (dial && phone) {
    const examples = {
      '+966': '5x xxx xxxx',
      '+971': '5x xxx xxxx',
      '+965': '5xxxxxxx',
      '+974': '3x xx xx xx',
      '+973': '3xxxxxxx',
      '+968': '9xx xxxx',
      '+20':  '1xx xxx xxxx',
    };
    const setPH = () => {
      const ex = examples[dial.value] || 'رقم الجوال بدون مفتاح';
      phone.placeholder = ex;
    };
    dial.addEventListener('change', setPH);
    setPH();
  }

  // منع إرسال فعلي للتجربة (اشطب هذا عند الربط مع السيرفر)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const fullPhone = `${data.get('dial')} ${data.get('phone')}`;
      console.log('Form submitted:', {
        name: data.get('name'),
        email: data.get('email'),
        service: data.get('service'),
        phone: fullPhone,
        message: data.get('message'),
      });
      form.reset();
      // إعادة placeholder بعد reset
      if (dial) dial.value = '+966';
      if (phone) phone.placeholder = '5x xxx xxxx';
      alert('تم استلام رسالتك، سنتواصل معك قريبًا 👌');
    });
  }
})();
