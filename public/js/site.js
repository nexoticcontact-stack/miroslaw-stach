// Minimalny JS: menu mobilne + podgląd zdjęć. Bez zależności, zgodny z CSP script-src 'self'.
(function () {
  'use strict';

  // --- menu mobilne ---
  var btn = document.querySelector('[data-menu]');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  // --- lightbox: linki [data-lightbox] wskazujące na duże zdjęcie ---
  var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lightbox]'));
  if (!links.length || typeof HTMLDialogElement !== 'function') return;

  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-label', 'Podgląd zdjęcia');
  var svg = function (d) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="' + d + '"/></svg>';
  };
  dlg.innerHTML =
    '<figure class="lightbox__fig"><img class="lightbox__img" alt=""><figcaption class="lightbox__cap"></figcaption></figure>' +
    '<button type="button" class="lightbox__btn lightbox__close" aria-label="Zamknij">' + svg('M5 5l14 14M19 5L5 19') + '</button>' +
    '<button type="button" class="lightbox__btn lightbox__prev" aria-label="Poprzednie zdjęcie">' + svg('M15 5l-7 7 7 7') + '</button>' +
    '<button type="button" class="lightbox__btn lightbox__next" aria-label="Następne zdjęcie">' + svg('M9 5l7 7-7 7') + '</button>';
  document.body.appendChild(dlg);

  var img = dlg.querySelector('.lightbox__img');
  var cap = dlg.querySelector('.lightbox__cap');
  var i = 0;

  function show(n) {
    i = (n + links.length) % links.length;
    var a = links[i];
    var alt = a.getAttribute('data-alt') || '';
    img.src = a.getAttribute('href');
    img.alt = alt;
    cap.textContent = alt + '  ·  ' + (i + 1) + ' / ' + links.length;
  }

  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      show(n);
      dlg.showModal();
    });
  });

  dlg.querySelector('.lightbox__close').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.lightbox__prev').addEventListener('click', function () { show(i - 1); });
  dlg.querySelector('.lightbox__next').addEventListener('click', function () { show(i + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('lightbox__fig')) dlg.close(); });
  dlg.addEventListener('close', function () { img.removeAttribute('src'); links[i].focus(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });

  // gesty na telefonie
  var x0 = null;
  dlg.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(dx > 0 ? i - 1 : i + 1);
    x0 = null;
  });
})();
