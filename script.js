// ============================================================
// SCRIPT PRINCIPAL — AizenTech 2026
// ============================================================

let lang = localStorage.getItem('aizentech_lang') || 'fr';
let cartCount = 0;
let activeFilter = 'Tous';
let toastTimeout;
let selectedColors = {};
let selectedMemory = {};
let modalProduct = null;
let modalColorIdx = 0;
let modalMemIdx = 0;

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderFilterTabs();
  renderProducts();
  startCountdown();
  highlightCurrentNav();
  syncLangButtons();
  // Synchroniser le compteur panier depuis localStorage
  try {
    const saved = JSON.parse(localStorage.getItem('aizentech_cart')) || [];
    cartCount = saved.reduce((s, i) => s + i.qty, 0);
    const el = document.getElementById('cartCount');
    if (el) el.textContent = cartCount;
  } catch(e) {}
});

// ——— NAVIGATION ———
function highlightCurrentNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

// ——— LANGUE (fonctionne sur TOUS les onglets) ———
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
  const t = i18n[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (!t[key]) return;
    el.innerHTML = t[key];
  });
}

// ——— FILTER TABS ———
function renderFilterTabs() {
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
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/220x200/1A1A24/9090A8?text=${encodeURIComponent(p.name)}'">

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
        <div class="option-label" style="margin-top:10px">${t.memory_label}</div>
        <div class="memory-pills" id="memory-${globalIdx}">
          ${p.memory.map((m,mi) => {
            const mp = getProductPrice(p, m, curColor);
            return `<button class="memory-pill ${mi===0?'selected':''}"
              onclick="event.stopPropagation();selectMemory(${globalIdx},${mi},'${m}',this)"
              data-price="${mp}"
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
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:12px">
          <span style="width:6px;height:6px;background:${stockColor};border-radius:50%;display:inline-block"></span>
          <span style="font-size:11px;color:${stockColor}">${t[stockKey]}</span>
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

// ——— SÉLECTION COULEUR / MÉMOIRE ———
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

// ——— WISHLIST ———
function toggleWish(el) {
  el.textContent = el.textContent === '♡' ? '♥' : '♡';
  el.style.color = el.textContent === '♥' ? 'var(--accent2)' : '';
}

// ——— MODAL PRODUIT ———
function openModal(idx) {
  const p = products[idx];
  modalProduct = idx;
  modalColorIdx = 0;
  modalMemIdx = 0;

  const t = i18n[lang];
  const modal = document.getElementById('productModal');
  if (!modal) return;

  const stockKey = p.stock === 'in' ? 'in_stock' : p.stock === 'low' ? 'low_stock' : 'out_stock';
  const stockColor = p.stock === 'in' ? 'var(--green)' : p.stock === 'low' ? 'var(--gold)' : 'var(--accent2)';
  const basePrice = getProductPrice(p, p.memory[0], p.colors[0].hex);

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img">
      <img id="modalImg" src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x300/22222E/9090A8?text=${encodeURIComponent(p.name)}'">
    </div>
    <div class="modal-body">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price" id="modalPrice">$${basePrice.toLocaleString()}</div>
      ${p.memoryPrices ? `<div class="modal-price-note">💡 ${lang === 'fr' ? 'Le prix varie selon la mémoire et la couleur' : 'Price varies by storage and color'}</div>` : ''}

      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
        <span style="width:8px;height:8px;background:${stockColor};border-radius:50%;display:inline-block"></span>
        <span style="font-size:13px;color:${stockColor}">${t[stockKey]}</span>
        <span style="font-size:12px;color:var(--text2);margin-left:8px">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} (${p.reviews.toLocaleString()})</span>
      </div>

      <p style="font-size:13px;color:var(--text2);line-height:1.65;margin-bottom:20px">${p.desc}</p>

      <div class="modal-section-title">${t.color_label} — <span id="selectedColorName" style="color:var(--text)">${p.colors[0].name}</span></div>
      <div class="modal-colors" id="modalColors">
        ${p.colors.map((c,i) => `
          <div class="modal-color-dot ${i===0?'selected':''}" style="background:${c.hex}" title="${c.name}${c.priceBonus > 0 ? ' (+$'+c.priceBonus+')' : ''}"
            onclick="modalSelectColor(${i},'${c.name}',this)"></div>
        `).join('')}
      </div>

      <div class="modal-section-title">${t.memory_label}</div>
      <div class="modal-memory" id="modalMemory">
        ${p.memory.map((m,i) => {
          const mp = getProductPrice(p, m, p.colors[0].hex);
          return `<button class="modal-mem-btn ${i===0?'selected':''}" onclick="modalSelectMem(${i},this)" data-mem="${m}">
            ${m}<br><span style="font-size:11px;color:var(--text3);font-weight:400">$${mp.toLocaleString()}</span>
          </button>`;
        }).join('')}
      </div>

      <div class="modal-section-title">Caractéristiques</div>
      <div class="modal-specs-list">
        ${Object.entries(p.specs).map(([k,v]) => `
          <div class="modal-spec-item">
            <div class="modal-spec-key">${k}</div>
            <div class="modal-spec-val">${v}</div>
          </div>
        `).join('')}
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
  if (m) { m.classList.remove('open'); }
  document.body.style.overflow = '';
}

function updateModalPrice() {
  const p = products[modalProduct];
  const colorHex = p.colors[modalColorIdx].hex;
  const mem      = p.memory[modalMemIdx];
  const price    = getProductPrice(p, mem, colorHex);
  const el       = document.getElementById('modalPrice');
  if (el) el.textContent = `$${price.toLocaleString()}`;
  // update mem button prices
  document.querySelectorAll('#modalMemory .modal-mem-btn').forEach((btn, i) => {
    const m = p.memory[i];
    const mp = getProductPrice(p, m, colorHex);
    btn.innerHTML = `${m}<br><span style="font-size:11px;color:var(--text3);font-weight:400">$${mp.toLocaleString()}</span>`;
  });
}

function modalSelectColor(i, name, el) {
  modalColorIdx = i;
  document.querySelectorAll('#modalColors .modal-color-dot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('selectedColorName').textContent = name;
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

  const p = products[idx];
  const color = p.colors.find(c => c.hex === selectedColors[idx]) || p.colors[modalColorIdx] || p.colors[0];
  const mem   = selectedMemory[idx] || p.memory[modalMemIdx] || p.memory[0];
  const price = getProductPrice(p, mem, color.hex);

  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('aizentech_cart')) || []; } catch(e) { cart = []; }

  const existing = cart.find(i => i.idx === idx && i.memory === mem && i.colorHex === color.hex);
  if (existing) {
    existing.qty++;
    existing.price = price; // mettre à jour le prix
  } else {
    cart.push({
      idx,
      brand: p.brand,
      name: p.name,
      img: p.img,
      color: color.name,
      colorHex: color.hex,
      memory: mem,
      price,
      qty: 1
    });
  }

  localStorage.setItem('aizentech_cart', JSON.stringify(cart));

  cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById('cartCount');
  if (el) el.textContent = cartCount;

  const t = i18n[lang];
  const toastMsgEl = document.getElementById('toastMsg');
  if (toastMsgEl) toastMsgEl.textContent = `${name} (${mem}) — ${t.add_cart}`;
  showToast();
}

function buyNow(name, idx) {
  addToCart(null, name, idx);
  window.location.href = 'panier.html';
}

function toggleCart() {
  window.location.href = 'panier.html';
}

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
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
