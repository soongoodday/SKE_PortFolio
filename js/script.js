// 모바일 메뉴
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

// 아카이브 필터
const filterBtns = document.querySelectorAll('.filters button');
const tiles = document.querySelectorAll('.tile');
filterBtns.forEach(b => b.addEventListener('click', () => {
  filterBtns.forEach(x => x.setAttribute('aria-pressed', x === b));
  const f = b.dataset.filter;
  tiles.forEach(t => { t.hidden = f !== 'all' && !t.dataset.cat.split(' ').includes(f); });
}));




// 아카이브 라이트박스
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('.lb-img');
const lbTitle = lb.querySelector('.lb-title');
const lbMeta = lb.querySelector('.lb-meta');
const lbDesc = lb.querySelector('.lb-desc');
const lbPrev = lb.querySelector('.lb-prev');
const lbNext = lb.querySelector('.lb-next');
let lbList = [];
let lbIndex = 0;

// 이미지가 있는 타일만 버튼으로 감싸기
document.querySelectorAll('.tile').forEach(tile => {
  const ph = tile.querySelector('.ph');
  if (!ph || !ph.querySelector('img')) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tile-open';
  btn.setAttribute('aria-label', `${tile.querySelector('b').textContent} 크게 보기`);
  ph.replaceWith(btn);
  btn.appendChild(ph);
  btn.addEventListener('click', () => openLightbox(tile));
});

// 필터로 보이는 타일 중 이미지 있는 것만 넘겨보기
function getVisibleTiles() {
  return [...document.querySelectorAll('.tile')].filter(t => !t.hidden && t.querySelector('.ph img'));
}

function showLightbox(i) {
  const tile = lbList[i];
  const img = tile.querySelector('.ph img');
  lbImg.src = img.dataset.full || img.src;
  lbImg.alt = img.alt || tile.querySelector('b').textContent;
  lbTitle.textContent = tile.querySelector('b').textContent;
  lbMeta.textContent = tile.querySelector('small')?.textContent || '';
  lbDesc.textContent = tile.dataset.desc || '';
  const single = lbList.length < 2;
  lbPrev.hidden = single;
  lbNext.hidden = single;
}

function openLightbox(tile) {
  lbList = getVisibleTiles();
  lbIndex = lbList.indexOf(tile);
  showLightbox(lbIndex);
  lb.showModal();
  document.body.classList.add('lb-lock');
}

function moveLightbox(step) {
  lbIndex = (lbIndex + step + lbList.length) % lbList.length;
  showLightbox(lbIndex);
}

lbPrev.addEventListener('click', () => moveLightbox(-1));
lbNext.addEventListener('click', () => moveLightbox(1));
lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('close', () => document.body.classList.remove('lb-lock'));

// 빈 곳 클릭하면 닫기
lb.addEventListener('click', e => {
  if (e.target === lb || e.target.classList.contains('lb-figure')) lb.close();
});

// 키보드 좌우 화살표 (Esc 닫기는 기본 동작)
lb.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') moveLightbox(-1);
  if (e.key === 'ArrowRight') moveLightbox(1);
});

// 모바일 좌우 스와이프
let touchX = null;
lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) moveLightbox(dx < 0 ? 1 : -1);
  touchX = null;
});