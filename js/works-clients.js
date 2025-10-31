// ===== بيانات المواقع =====
const wsWebData = [
  {
    title: "منصة بلاتين",
    url:   "platin.sa",
    img:   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "كود كار للسيارات",
    url:   "codecar.sa",
    img:   "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "جمعية أبناء لرعاية الأيتام",
    url:   "abeenaa.org",
    img:   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "لوحة تحكم وتقارير",
    url:   "dashboard.example",
    img:   "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
  }
];

// ===== بيانات التطبيقات =====
const wsAppsData = [
  {
    title: "ال ساري للسيارات",
    img:   "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "حجوزات صالون",
    img:   "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "متجر إلكتروني",
    img:   "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "تطبيق توصيل",
    img:   "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80"
  }
];

// ===== عناصر =====
const wsTrack = document.getElementById('wsTrack');
const wsTabs  = Array.from(document.querySelectorAll('.ws-tab'));
const wsTitle = document.getElementById('wsTitle');
const wsPrev  = document.querySelector('.ws-prev');
const wsNext  = document.querySelector('.ws-next');

let wsMode = 'web';
let wsIndex = 0;
let wsCards = [];
let wsPointerDown = false, wsStartX = 0, wsMoved = false;

// ===== بناء =====
function wsBuild(modeNow='web'){
  wsMode = modeNow;
  wsTrack.setAttribute('data-mode', wsMode);
  wsTrack.innerHTML = '';
  wsCards = [];
  wsIndex = 0;

  wsTitle.textContent = (wsMode === 'web') ? 'أهم أعمال المواقع' : 'أهم تطبيقاتنا';
  const data = (wsMode === 'web') ? wsWebData : wsAppsData;

  data.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'ws-card';
    card.dataset.idx = i;

    if(wsMode === 'web'){
      card.innerHTML = `
        <div class="chrome">
          <span class="ws-dot red"></span>
          <span class="ws-dot yellow"></span>
          <span class="ws-dot green"></span>
          <span class="ws-url">${p.url}</span>
        </div>
        <div class="ws-media web">
          <img src="${p.img}" alt="${p.title}">
        </div>`;
    } else {
      card.innerHTML = `
        <div class="ws-phone">
          <div class="ws-island">
            <span class="speaker"></span>
            <span class="cam"></span>
          </div>
          <div class="ws-screen">
            <img src="${p.img}" alt="${p.title}">
          </div>
        </div>`;
    }

    const imgEl = card.querySelector('img');
    imgEl.onerror = () => imgEl.style.opacity = .2;

    wsTrack.appendChild(card);
    wsCards.push(card);
  });

  wsLayout();
}

// ===== توزيع =====
function wsLayout(){
  const n = wsCards.length;
  for(let i=0;i<n;i++){
    const rel = wsNormalize(i - wsIndex, n);
    wsCards[i].dataset.pos = rel;
  }
}
function wsNormalize(delta, n){
  if(delta >  n/2) delta -= n;
  if(delta < -n/2) delta += n;
  if(delta >  2) return  2;
  if(delta < -2) return -2;
  return delta;
}

// ===== تنقّل =====
function wsGo(dir){
  const n = wsCards.length;
  wsIndex = (wsIndex + dir + n) % n;
  wsLayout();
}
wsPrev.addEventListener('click', ()=>wsGo(-1));
wsNext.addEventListener('click', ()=>wsGo(1));

// ===== سحب =====
function wsDown(e){
  wsPointerDown = true; wsMoved = false;
  wsStartX = (e.touches ? e.touches[0].clientX : e.clientX);
  wsTrack.classList.add('dragging');
}
function wsMove(e){
  if(!wsPointerDown) return;
  const x = (e.touches ? e.touches[0].clientX : e.clientX);
  const dx = x - wsStartX;
  if(Math.abs(dx) > 14) wsMoved = true;
}
function wsUp(e){
  if(!wsPointerDown) return;
  wsPointerDown = false;
  wsTrack.classList.remove('dragging');
  if(!wsMoved) return;
  const endX = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX);
  const dx = endX - wsStartX;
  if(Math.abs(dx) < 40) return;
  wsGo(dx>0 ? -1 : 1);
}
wsTrack.addEventListener('mousedown', wsDown, {passive:true});
window.addEventListener('mousemove', wsMove, {passive:true});
window.addEventListener('mouseup',   wsUp,   {passive:true});
wsTrack.addEventListener('touchstart', wsDown, {passive:true});
wsTrack.addEventListener('touchmove',  wsMove, {passive:true});
wsTrack.addEventListener('touchend',   wsUp,   {passive:true});

// ===== تبويب =====
wsTabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    wsTabs.forEach(t=>t.classList.remove('is-active'));
    btn.classList.add('is-active');
    wsBuild(btn.dataset.mode);
  });
});

// افتراضي
document.querySelector('.ws-tab[data-mode="web"]').classList.add('is-active');
wsBuild('web');
