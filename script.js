// ============================================================
// SCRIPT PRINCIPAL — AizenTech 2026
// ============================================================

const CLOUDINARY_CLOUD = 'dq4wsghrn';
const CLOUDINARY_PRESET = 'aizentech';

let lang = localStorage.getItem('aizentech_lang') || 'fr';
let cartCount = 0;
let activeFilter = 'Tous';
let toastTimeout;
let selectedColors = {};
let selectedMemory = {};
let modalProduct = null;
let modalColorIdx = 0;
let modalMemIdx = 0;
let modalCurrentImgIdx = 0;

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  applyTranslations();
  renderFilterTabs();
  renderProducts();
  startCountdown();
  syncLangButtons();
  syncCart();
});

// ══════════════════════════════════ NAV (toutes les pages)
function initNav() {
  // Highlight current page
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    const rawHref = a.getAttribute('href') || '';
    // Ignorer les liens d'ancre (ex: index.html#products) — pas de highlight nav
    if (rawHref.includes('#')) return;
    if (rawHref === page || (page === '' && rawHref === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Close nav when clicking a link on mobile
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      const nav = document.getElementById('navLinks');
      const btn = document.getElementById('navHamburger');
      if (nav) nav.classList.remove('open');
      if (btn) btn.classList.remove('open');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', e => {
    const nav = document.getElementById('navLinks');
    const btn = document.getElementById('navHamburger');
    if (nav && nav.classList.contains('open')) {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('open');
        btn.classList.remove('open');
      }
    }
  });
}

// Hamburger toggle — accessible depuis toutes les pages
function toggleMobileNav() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('navHamburger');
  if (!nav || !btn) return;
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function syncCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('aizentech_cart')) || [];
    cartCount = saved.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('#cartCount').forEach(el => el.textContent = cartCount);
  } catch(e) {}
}

// ——— LANGUE ———
function setLang(l) {
  lang = l;
  localStorage.setItem('aizentech_lang', l);
  syncLangButtons();
  applyTranslations();
  renderFilterTabs();
  renderProducts();
}

function syncLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.textContent.trim().toLowerCase() === lang)
  );
}

function applyTranslations() {
  if (typeof i18n === 'undefined') return;
  const t = i18n[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (t && t[key]) el.innerHTML = t[key];
  });
}

// ——— FILTER TABS ———
function renderFilterTabs() {
  if (typeof filterCategories === 'undefined') return;
  const tabs = filterCategories[lang];
  const container = document.getElementById('filterTabs');
  if (!container) return;
  container.innerHTML = '';
  tabs.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-tab' + (i === 0 ? ' active' : '');
    btn.textContent = tab;
    btn.onclick = () => {
      activeFilter = tab;
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    };
    container.appendChild(btn);
  });
  activeFilter = tabs[0];
}

// ——— PRODUITS ———
function renderProducts() {
  if (typeof products === 'undefined') return;
  const t = i18n[lang];
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let filtered = products;
  const isPromo = ['Promo', 'Sale'].includes(activeFilter);
  const isAll = ['Tous', 'All'].includes(activeFilter);

  if (!isAll) {
    if (isPromo) filtered = products.filter(p => p.badge === 'sale');
    else filtered = products.filter(p => p.cat === activeFilter);
  }

  filtered.forEach((p) => {
    const globalIdx = products.indexOf(p);
    if (!selectedColors[globalIdx]) selectedColors[globalIdx] = p.colors[0].hex;
    if (!selectedMemory[globalIdx]) selectedMemory[globalIdx] = p.memory[0];

    const curColor = selectedColors[globalIdx];
    const curMem   = selectedMemory[globalIdx];
    const curPrice = getProductPrice(p, curMem, curColor);

    const stockKey = p.stock === 'in' ? 'in_stock' : p.stock === 'low' ? 'low_stock' : 'out_stock';
    const stockColor = p.stock === 'in' ? 'var(--green)' : p.stock === 'low' ? 'var(--gold)' : 'var(--accent2)';
    const badgeLabel = p.badge === 'new' ? (lang === 'fr' ? 'NOUVEAU' : 'NEW') : (lang === 'fr' ? 'PROMO' : 'SALE');

    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openModal(globalIdx);

    card.innerHTML = `
      <div class="card-img">
        ${p.badge ? `<div class="card-badge ${p.badge}">${badgeLabel}</div>` : ''}
        <button class="card-wish" onclick="event.stopPropagation();toggleWish(this)">♡</button>
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/220x180/EEF2FF/2563EB?text=${encodeURIComponent(p.brand)}'">
      </div>
      <div class="card-options">
        <div class="option-label">${t.color_label}</div>
        <div class="color-dots" id="colors-${globalIdx}">
          ${p.colors.map((c,ci) => `
            <div class="color-dot ${ci===0?'selected':''}"
              style="background:${c.hex}"
              title="${c.name}${c.priceBonus > 0 ? ' (+$'+c.priceBonus+')' : ''}"
              onclick="event.stopPropagation();selectColor(${globalIdx},${ci},'${c.hex}',this)"
            ></div>
          `).join('')}
        </div>
        <div class="option-label" style="margin-top:9px">${t.memory_label}</div>
        <div class="memory-pills" id="memory-${globalIdx}">
          ${p.memory.map((m,mi) => {
            const mp = getProductPrice(p, m, curColor);
            return `<button class="memory-pill ${mi===0?'selected':''}"
              onclick="event.stopPropagation();selectMemory(${globalIdx},${mi},'${m}',this)"
            >${m}</button>`;
          }).join('')}
        </div>
      </div>
      <div class="card-info">
        <div class="card-brand">${p.brand}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-specs">
          ${Object.entries(p.specs).slice(0,3).map(([k,v]) => `<span class="spec-pill">${v}</span>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:8px">
          <span style="width:6px;height:6px;background:${stockColor};border-radius:50%;display:inline-block;flex-shrink:0"></span>
          <span style="font-size:10px;color:${stockColor};font-weight:600">${t[stockKey]}</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="price" id="cardPrice-${globalIdx}">$${curPrice.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <div>
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="card-action-add" onclick="event.stopPropagation();addToCart(null,'${p.name}',${globalIdx})">${t.btn_add}</button>
        <button class="card-action-buy" onclick="event.stopPropagation();buyNow('${p.name}',${globalIdx})">${t.btn_buy}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function selectColor(globalIdx, ci, hex, el) {
  selectedColors[globalIdx] = hex;
  document.querySelectorAll(`#colors-${globalIdx} .color-dot`).forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  updateCardPrice(globalIdx);
}

function selectMemory(globalIdx, mi, mem, el) {
  selectedMemory[globalIdx] = mem;
  document.querySelectorAll(`#memory-${globalIdx} .memory-pill`).forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  updateCardPrice(globalIdx);
}

function updateCardPrice(globalIdx) {
  const p = products[globalIdx];
  const price = getProductPrice(p, selectedMemory[globalIdx], selectedColors[globalIdx]);
  const el = document.getElementById(`cardPrice-${globalIdx}`);
  if (el) el.textContent = `$${price.toLocaleString()}`;
}

function toggleWish(el) {
  el.textContent = el.textContent === '♡' ? '♥' : '♡';
  el.style.color = el.textContent === '♥' ? '#DC2626' : '';
}

// ——— MODAL ———
function switchModalImg(idx) {
  if (!products[modalProduct]) return;
  const p = products[modalProduct];
  const allImgs = p.images ? p.images : [p.img];
  modalCurrentImgIdx = idx;
  const mainImg = document.getElementById('modalImg');
  if (mainImg) { mainImg.style.opacity='0'; setTimeout(()=>{ mainImg.src=allImgs[idx]; mainImg.style.opacity='1'; },150); }
  document.querySelectorAll('.modal-thumb').forEach((t,i) => t.classList.toggle('active', i === idx));
}

function openModal(idx) {
  if (typeof products === 'undefined') return;
  const p = products[idx];
  modalProduct = idx;
  modalColorIdx = 0;
  modalMemIdx = 0;
  modalCurrentImgIdx = 0;

  const t = i18n[lang];
  const modal = document.getElementById('productModal');
  if (!modal) return;

  const allImgs = p.images ? p.images : [p.img];
  const stockKey = p.stock === 'in' ? 'in_stock' : p.stock === 'low' ? 'low_stock' : 'out_stock';
  const stockColor = p.stock === 'in' ? 'var(--green)' : p.stock === 'low' ? 'var(--gold)' : 'var(--accent2)';
  const basePrice = getProductPrice(p, p.memory[0], p.colors[0].hex);

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img">
      <img id="modalImg" src="${allImgs[0]}" alt="${p.name}" style="transition:opacity .2s" onerror="this.src='https://via.placeholder.com/200x260/EEF2FF/2563EB?text=${encodeURIComponent(p.brand)}'">
      ${allImgs.length > 1 ? `<div class="modal-thumbs">${allImgs.map((img,i) => `<img class="modal-thumb ${i===0?'active':''}" src="${img}" alt="Vue ${i+1}" onclick="switchModalImg(${i})" onerror="this.style.display='none'">`).join('')}</div>` : ''}
    </div>
    <div class="modal-body">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price" id="modalPrice">$${basePrice.toLocaleString()}</div>
      ${p.memoryPrices ? `<div class="modal-price-note">💡 ${lang==='fr'?'Prix variable selon stockage et couleur':'Price varies by storage and color'}</div>` : ''}
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
        <span style="width:7px;height:7px;background:${stockColor};border-radius:50%;display:inline-block"></span>
        <span style="font-size:12px;color:${stockColor};font-weight:600">${t[stockKey]}</span>
        <span style="font-size:11px;color:var(--text3);margin-left:6px">${'★'.repeat(Math.floor(p.rating))} (${p.reviews.toLocaleString()})</span>
      </div>
      <p style="font-size:13px;color:var(--text2);line-height:1.65;margin-bottom:16px">${p.desc}</p>
      <div class="modal-section-title">${t.color_label} — <span id="selectedColorName" style="color:var(--text);font-weight:600">${p.colors[0].name}</span></div>
      <div class="modal-colors" id="modalColors">
        ${p.colors.map((c,i) => `<div class="modal-color-dot ${i===0?'selected':''}" style="background:${c.hex}" title="${c.name}${c.priceBonus>0?' (+$'+c.priceBonus+')':''}" onclick="modalSelectColor(${i},'${c.name.replace(/'/g,"\\'")}',this)"></div>`).join('')}
      </div>
      <div class="modal-section-title">${t.memory_label}</div>
      <div class="modal-memory" id="modalMemory">
        ${p.memory.map((m,i) => { const mp=getProductPrice(p,m,p.colors[0].hex); return `<button class="modal-mem-btn ${i===0?'selected':''}" onclick="modalSelectMem(${i},this)" data-mem="${m}">${m}<br><span style="font-size:10px;color:var(--text3);font-weight:400">$${mp.toLocaleString()}</span></button>`; }).join('')}
      </div>
      <div class="modal-section-title">${lang==='fr'?'Caractéristiques':'Specs'}</div>
      <div class="modal-specs-list">
        ${Object.entries(p.specs).map(([k,v]) => `<div class="modal-spec-item"><div class="modal-spec-key">${k}</div><div class="modal-spec-val">${v}</div></div>`).join('')}
      </div>
      <div class="modal-buttons">
        <button class="modal-add-btn-split" onclick="addToCart(null,'${p.name}',${idx})">${t.btn_add}</button>
        <button class="modal-buy-btn" onclick="buyNow('${p.name}',${idx})">${t.btn_buy}</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const m = document.getElementById('productModal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}

function updateModalPrice() {
  if (!products[modalProduct]) return;
  const p = products[modalProduct];
  const colorHex = p.colors[modalColorIdx].hex;
  const mem = p.memory[modalMemIdx];
  const price = getProductPrice(p, mem, colorHex);
  const el = document.getElementById('modalPrice');
  if (el) el.textContent = `$${price.toLocaleString()}`;
  document.querySelectorAll('#modalMemory .modal-mem-btn').forEach((btn, i) => {
    const m = p.memory[i];
    const mp = getProductPrice(p, m, colorHex);
    btn.innerHTML = `${m}<br><span style="font-size:10px;color:var(--text3);font-weight:400">$${mp.toLocaleString()}</span>`;
  });
}

function modalSelectColor(i, name, el) {
  modalColorIdx = i;
  document.querySelectorAll('#modalColors .modal-color-dot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  const nameEl = document.getElementById('selectedColorName');
  if (nameEl) nameEl.textContent = name;
  updateModalPrice();
}

function modalSelectMem(i, el) {
  modalMemIdx = i;
  document.querySelectorAll('#modalMemory .modal-mem-btn').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  updateModalPrice();
}

// ——— PANIER ———
function addToCart(e, name, idx) {
  if (e) e.stopPropagation();
  if (typeof products === 'undefined') return;

  const p = products[idx];
  const color = p.colors.find(c => c.hex === selectedColors[idx]) || p.colors[modalColorIdx] || p.colors[0];
  const mem = selectedMemory[idx] || p.memory[modalMemIdx] || p.memory[0];
  const price = getProductPrice(p, mem, color.hex);

  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('aizentech_cart')) || []; } catch(e) { cart = []; }

  const existing = cart.find(i => i.idx === idx && i.memory === mem && i.colorHex === color.hex);
  if (existing) { existing.qty++; existing.price = price; }
  else cart.push({ idx, brand:p.brand, name:p.name, img:p.img, color:color.name, colorHex:color.hex, memory:mem, price, qty:1 });

  localStorage.setItem('aizentech_cart', JSON.stringify(cart));
  cartCount = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = cartCount);

  const toastMsgEl = document.getElementById('toastMsg');
  if (toastMsgEl) toastMsgEl.textContent = `${name} (${mem}) — ${i18n[lang].add_cart}`;
  showToast();
}

function buyNow(name, idx) {
  addToCart(null, name, idx);
  window.location.href = 'panier.html';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  if (msg) { const el = document.getElementById('toastMsg'); if (el) el.textContent = msg; }
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ——— COUNTDOWN ———
function startCountdown() {
  let secs = 8 * 3600 + 34 * 60 + 12;
  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');
  if (!hEl) return;
  setInterval(() => {
    if (secs <= 0) return;
    secs--;
    hEl.textContent = String(Math.floor(secs / 3600)).padStart(2, '0');
    mEl.textContent = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    sEl.textContent = String(secs % 60).padStart(2, '0');
  }, 1000);
}
