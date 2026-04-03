// ============================================================
// SCRIPT PRINCIPAL — AizenTech
// ============================================================

let lang = 'fr';
let cartCount = 0;
let activeFilter = 'Tous';
let toastTimeout;
let selectedColors = {};   // productIndex -> colorHex
let selectedMemory = {};   // productIndex -> memory string
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

// ——— LANGUE ———
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.textContent.toLowerCase() === l)
  );
  applyTranslations();
  renderFilterTabs();
  renderProducts();
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

  filtered.forEach((p, idx) => {
    const globalIdx = products.indexOf(p);
    if (!selectedColors[globalIdx]) selectedColors[globalIdx] = p.colors[0].hex;
    if (!selectedMemory[globalIdx]) selectedMemory[globalIdx] = p.memory[0];

    const stockKey = p.stock === 'in' ? 'in_stock' : p.stock === 'low' ? 'low_stock' : 'out_stock';
    const stockColor = p.stock === 'in' ? 'var(--green)' : p.stock === 'low' ? 'var(--gold)' : 'var(--accent)';
    const badgeLabel = p.badge === 'new' ? (lang === 'fr' ? 'NOUVEAU' : 'NEW') : (lang === 'fr' ? 'PROMO' : 'SALE');

    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openModal(globalIdx);

    card.innerHTML = `
      <div class="card-img">
        ${p.badge ? `<div class="card-badge ${p.badge}">${badgeLabel}</div>` : ''}
        <button class="card-wish" onclick="event.stopPropagation();toggleWish(this)">♡</button>
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/220x200/1A1A24/9090A8?text=${encodeURIComponent(p.name)}'">
        <div class="card-overlay">
          <button class="quick-add" onclick="event.stopPropagation();addToCart(null,'${p.name}',${globalIdx})">${t.btn_add}</button>
        </div>
      </div>

      <div class="card-options">
        <div class="option-label">${t.color_label}</div>
        <div class="color-dots" id="colors-${globalIdx}">
          ${p.colors.map((c,ci) => `
            <div class="color-dot ${ci===0?'selected':''}"
              style="background:${c.hex}"
              title="${c.name}"
              onclick="event.stopPropagation();selectColor(${globalIdx},${ci},'${c.hex}',this)"
            ></div>
          `).join('')}
        </div>
        <div class="option-label" style="margin-top:10px">${t.memory_label}</div>
        <div class="memory-pills" id="memory-${globalIdx}">
          ${p.memory.map((m,mi) => `
            <button class="memory-pill ${mi===0?'selected':''}"
              onclick="event.stopPropagation();selectMemory(${globalIdx},${mi},'${m}',this)"
            >${m}</button>
          `).join('')}
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
            <span class="price">$${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <div>
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>
        </div>
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
}

function selectMemory(globalIdx, mi, mem, el) {
  selectedMemory[globalIdx] = mem;
  document.querySelectorAll(`#memory-${globalIdx} .memory-pill`).forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
}

// ——— WISHLIST ———
function toggleWish(el) {
  el.textContent = el.textContent === '♡' ? '♥' : '♡';
  el.style.color = el.textContent === '♥' ? 'var(--accent)' : '';
}

// ——— MODAL PRODUIT ———
function openModal(idx) {
  const p = products[idx];
  modalProduct = idx;
  modalColorIdx = 0;
  modalMemIdx = 0;

  const t = i18n[lang];
  const modal = document.getElementById('productModal');
  const stockKey = p.stock === 'in' ? 'in_stock' : p.stock === 'low' ? 'low_stock' : 'out_stock';
  const stockColor = p.stock === 'in' ? 'var(--green)' : p.stock === 'low' ? 'var(--gold)' : 'var(--accent)';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img">
      <img id="modalImg" src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x300/22222E/9090A8?text=${encodeURIComponent(p.name)}'">
    </div>
    <div class="modal-body">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price">$${p.price.toLocaleString()} ${p.oldPrice ? `<span style="font-size:18px;color:var(--text2);text-decoration:line-through">$${p.oldPrice.toLocaleString()}</span>` : ''}</div>

      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
        <span style="width:8px;height:8px;background:${stockColor};border-radius:50%;display:inline-block"></span>
        <span style="font-size:13px;color:${stockColor}">${t[stockKey]}</span>
        <span style="font-size:12px;color:var(--text2);margin-left:8px">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} (${p.reviews.toLocaleString()})</span>
      </div>

      <p style="font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:20px">${p.desc}</p>

      <div class="modal-section-title">${t.color_label} — <span id="selectedColorName" style="color:var(--text)">${p.colors[0].name}</span></div>
      <div class="modal-colors" id="modalColors">
        ${p.colors.map((c,i) => `
          <div class="modal-color-dot ${i===0?'selected':''}" style="background:${c.hex}" title="${c.name}"
            onclick="modalSelectColor(${i},'${c.name}',this)"></div>
        `).join('')}
      </div>

      <div class="modal-section-title">${t.memory_label}</div>
      <div class="modal-memory" id="modalMemory">
        ${p.memory.map((m,i) => `
          <button class="modal-mem-btn ${i===0?'selected':''}" onclick="modalSelectMem(${i},this)">${m}</button>
        `).join('')}
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

      <button class="modal-add-btn" onclick="addToCart(null,'${p.name}',${idx})">${t.btn_add}</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function modalSelectColor(i, name, el) {
  modalColorIdx = i;
  document.querySelectorAll('#modalColors .modal-color-dot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('selectedColorName').textContent = name;
}

function modalSelectMem(i, el) {
  modalMemIdx = i;
  document.querySelectorAll('#modalMemory .modal-mem-btn').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
}

// ——— PANIER ———
function addToCart(e, name, idx) {
  if (e) e.stopPropagation();

  const p = products[idx];
  const color = p.colors.find(c => c.hex === selectedColors[idx]) || p.colors[0];
  const mem = selectedMemory[idx] || p.memory[0];

  // Charger panier existant
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('aizentech_cart')) || []; } catch(e) { cart = []; }

  // Vérifier si l'article existe déjà (même produit + couleur + mémoire)
  const existing = cart.find(i => i.idx === idx && i.memory === mem && i.colorHex === color.hex);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      idx,
      brand: p.brand,
      name: p.name,
      img: p.img,
      color: color.name,
      colorHex: color.hex,
      memory: mem,
      price: p.price,
      qty: 1
    });
  }

  localStorage.setItem('aizentech_cart', JSON.stringify(cart));

  // Mettre à jour le compteur
  cartCount = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = cartCount;

  const t = i18n[lang];
  document.getElementById('toastMsg').textContent = `${name} (${mem}) — ${t.add_cart}`;
  showToast();
}

function toggleCart() {
  window.location.href = 'panier.html';
}

function toggleCart() {
  const t = i18n[lang];
  document.getElementById('toastMsg').textContent = cartCount === 0
    ? t.cart_empty
    : cartCount + ' ' + t.cart_items;
  showToast();
}

function showToast() {
  const toast = document.getElementById('toast');
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