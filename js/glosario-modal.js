/**
 * MUVIPAT · glosario-modal.js
 * ─────────────────────────────────────────────────────────────────
 * Módulo reutilizable del modal de glosario (#glos-modal).
 * Requiere que el documento incluya:
 *   - data.js (GLOSARIO, PIEZAS, slugify, autoIndexGlosario)
 *   - el bloque HTML del modal (#glos-modal y su contenido)
 *
 * Expone globalmente:
 *   - openGlosModal(entry)
 *   - closeGlosModal()
 *
 * Y registra los listeners de:
 *   - delegación de clic en [data-glos] → abre el modal
 *   - cierre (Escape, overlay, botón ✕)
 */

const GLOS_CAT_COLORS = {
  'ORIENTACIÓN':    { color: '#ff9800', bg: 'rgba(255,152,0,.08)' },
  'ANATOMÍA':       { color: '#00e5ff', bg: 'rgba(0,229,255,.08)' },
  'LESIONES':       { color: '#00e676', bg: 'rgba(0,230,118,.08)' },
  'ENFERMEDADES':   { color: '#c0003c', bg: 'rgba(192,0,60,.08)'  },
  'PALEOPATOLOGÍA': { color: '#2979ff', bg: 'rgba(41,121,255,.08)' },
  'TAFONOMÍA':      { color: '#d4e60a', bg: 'rgba(212,230,10,.08)' },
};

const GLOS_CAT_LABELS = {
  'ORIENTACIÓN':    'Orientación',
  'ANATOMÍA':       'Anatomía',
  'LESIONES':       'Lesiones',
  'ENFERMEDADES':   'Enfermedades',
  'PALEOPATOLOGÍA': 'Paleopatología',
  'TAFONOMÍA':      'Tafonomía',
};

/* ── Modal del glosario ── */
function openGlosModal(entry) {
  const overlay = document.getElementById('glos-modal');
  const cc = GLOS_CAT_COLORS[entry.categoria] || { color:'#6b5a43', bg:'rgba(107,90,67,.08)' };

  /* ── Cabecera ── */
  const catEl = document.getElementById('glos-modal-cat');
  catEl.textContent      = GLOS_CAT_LABELS[entry.categoria] || entry.categoria;
  catEl.style.color      = cc.color;
  catEl.style.borderColor = cc.color;
  catEl.style.background  = cc.bg;
  document.getElementById('glos-modal-term').textContent = entry.termino;
  document.getElementById('glos-modal-header').style.borderBottomColor = cc.color;

  const sinEl = document.getElementById('glos-modal-sin');
  sinEl.textContent = entry.sinonimos && entry.sinonimos.length
    ? 'Sin.: ' + entry.sinonimos.join(', ') : '';

  /* ── Definición ── */
  const defEl = document.getElementById('glos-modal-def');
  if (entry.acepciones && entry.acepciones.length > 1) {
    defEl.innerHTML = entry.acepciones.map((a, i) => `<span style="font-weight:700;margin-right:.3em">${i + 1}.</span>${a}`).join('<br><br>');
  } else {
    defEl.textContent = (entry.acepciones && entry.acepciones[0]) || '';
  }
  const obsEl = document.getElementById('glos-modal-obs');
  obsEl.textContent = entry.obs || '';

  /* ── Fuente ── */
  const srcEl = document.getElementById('glos-modal-source');
  if (entry.fuentes && entry.fuentes.length) {
    srcEl.innerHTML = entry.fuentes.map(f =>
      f.url ? `<a href="${f.url}" target="_blank" rel="noopener noreferrer">${f.nombre} ↗</a>` : `<span>${f.nombre}</span>`
    ).join(' · ');
    srcEl.style.display = '';
  } else {
    srcEl.innerHTML = ''; srcEl.style.display = 'none';
  }

  /* ── Contexto ── */
  const ctxWrap = document.getElementById('glos-modal-contexto-wrap');
  const ctxEl   = document.getElementById('glos-modal-contexto');
  if (entry.contextoPaleopatologico) {
    ctxEl.textContent = entry.contextoPaleopatologico;
    ctxWrap.style.display = '';
  } else { ctxWrap.style.display = 'none'; }

  /* ── Piezas relacionadas ── */
  const piezasWrap = document.getElementById('glos-modal-piezas-wrap');
  const piezasEl   = document.getElementById('glos-modal-piezas');
  piezasEl.innerHTML = '';
  const relacionadas = (entry.piezas || [])
    .map(id => PIEZAS.find(p => p.id === id)).filter(Boolean);
  if (relacionadas.length) {
    relacionadas.forEach(pieza => {
      const chip = document.createElement('a');
      chip.className = 'glos-modal-pieza-chip';
      chip.href = pieza.ficha;
      chip.innerHTML = `<span class="glos-modal-pieza-chip__id">${pieza.id}</span>${pieza.nombre}`;
      piezasEl.appendChild(chip);
    });
    piezasWrap.style.display = '';
  } else { piezasWrap.style.display = 'none'; }

  /* ── Columna derecha: widget + imagen ── */
  const hasWidget = !!entry.widget;
  const hasImage  = !!entry.imagen;
  const hasVisual = hasWidget || hasImage;

  const body      = document.getElementById('glos-modal-body');
  const colRight  = document.getElementById('glos-modal-col-right');
  const box       = document.getElementById('glos-modal')?.querySelector('.glos-modal-box');
  const widgetWrap = document.getElementById('glos-modal-widget-wrap');
  const imgWrap    = document.getElementById('glos-modal-img-wrap');

  if (hasVisual) {
    body.classList.add('has-visual');
    box?.classList.add('has-visual');
    colRight.style.display = '';
  } else {
    body.classList.remove('has-visual');
    box?.classList.remove('has-visual');
    colRight.style.display = 'none';
  }

  /* Widget del esqueleto */
  if (hasWidget && entry.widget === 'planos-anatomicos' && typeof getPlanosWidget === 'function') {
    widgetWrap.style.display = '';
    document.getElementById('glos-modal-widget-content').innerHTML = getPlanosWidget();
  } else {
    widgetWrap.style.display = 'none';
  }

  /* Imagen con hotspots */
  if (hasImage) {
    imgWrap.style.display = '';
    const img = document.getElementById('glos-modal-img');
    img.src = entry.imagen;
    img.alt = entry.imagenCaption || entry.termino;

    const figcaption = document.getElementById('glos-modal-figcaption');
    if (figcaption) figcaption.textContent = entry.imagenCaption || '';

    // Limpiar hotspots anteriores
    const inner = document.getElementById('glos-modal-img-inner');
    inner.querySelectorAll('.img-hotspot').forEach(el => el.remove());
    document.getElementById('glos-hs-desc').classList.remove('visible');
    document.getElementById('glos-hs-desc').textContent = '';

    // Añadir hotspots
    if (entry.hotspots && entry.hotspots.length) {
      entry.hotspots.forEach((hs, i) => {
        const dot = document.createElement('div');
        dot.className = 'img-hotspot';
        dot.style.left = hs.x + '%';
        dot.style.top  = hs.y + '%';
        dot.innerHTML = `
          <div class="img-hotspot__dot" style="border-color:${hs.color};color:${hs.color};background:${hs.color}22">${i+1}</div>
          <div class="img-hotspot__tooltip" style="border-color:${hs.color}">${hs.label}</div>
        `;
        dot.addEventListener('click', () => {
          const descBox = document.getElementById('glos-hs-desc');
          descBox.textContent = hs.desc || hs.label;
          descBox.style.borderColor = hs.color;
          descBox.classList.add('visible');
        });
        inner.appendChild(dot);
      });
    }
  } else {
    imgWrap.style.display = 'none';
  }

  /* ── Abrir ── */
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('glos-modal-close').focus();
}

function closeGlosModal() {
  document.getElementById('glos-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Delegación: cualquier .glos-link con data-glos abre el modal ── */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-glos]');
  if (!btn) return;
  const slug = btn.dataset.glos;
  const entry = GLOSARIO.find(en => slugify(en.termino) === slug);
  if (entry) openGlosModal(entry);
});

/* ── Cierre del modal ── */
document.addEventListener('click', e => {
  if (e.target.closest('#glos-modal-close')) closeGlosModal();
  if (e.target.id === 'glos-modal') closeGlosModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeGlosModal();
});
