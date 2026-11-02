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

  // --- podgląd zdjęć: linki [data-lightbox] (href = duże zdjęcie, data-mid = mniejsze) ---
  var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lightbox]'));
  if (!links.length || typeof HTMLDialogElement !== 'function') return;

  // wybór rozmiaru: telefony/tablety dostają mniejszą wersję
  var wantBig = Math.max(window.innerWidth, window.innerHeight) * (window.devicePixelRatio || 1) > 1400;
  var fullSrc = function (a) {
    return (!wantBig && a.getAttribute('data-mid')) || a.getAttribute('href');
  };
  var thumbSrc = function (a) {
    var t = a.querySelector('img');
    return t ? t.currentSrc || t.src : '';
  };

  // pamięć już wczytanych zdjęć
  var cache = {};
  function preload(n) {
    var a = links[(n + links.length) % links.length];
    var src = fullSrc(a);
    if (cache[src]) return cache[src];
    var im = new Image();
    im.decoding = 'async';
    im.src = src;
    cache[src] = im;
    return im;
  }

  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-label', 'Podgląd zdjęcia');
  var svg = function (d) {
    return '<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
  };
  dlg.innerHTML =
    '<figure class="lightbox__fig"><img class="lightbox__img" alt=""><figcaption class="lightbox__cap"></figcaption></figure>' +
    '<button type="button" class="lightbox__btn lightbox__close" aria-label="Zamknij">' + svg('M12 12l24 24M36 12L12 36') + '</button>' +
    '<button type="button" class="lightbox__btn lightbox__prev" aria-label="Poprzednie zdjęcie">' + svg('M30 10L16 24l14 14') + '</button>' +
    '<button type="button" class="lightbox__btn lightbox__next" aria-label="Następne zdjęcie">' + svg('M18 10l14 14-14 14') + '</button>';
  document.body.appendChild(dlg);

  var img = dlg.querySelector('.lightbox__img');
  var cap = dlg.querySelector('.lightbox__cap');
  var i = 0;

  function show(n) {
    i = (n + links.length) % links.length;
    var a = links[i];
    var alt = a.getAttribute('data-alt') || '';
    var full = preload(i);
    img.alt = alt;
    cap.textContent = (i + 1) + ' / ' + links.length;

    if (full.complete && full.naturalWidth) {
      img.src = full.src;
      img.classList.remove('is-loading');
    } else {
      // od razu miniatura (jest już w pamięci przeglądarki), ostra wersja podmienia się po wczytaniu
      img.src = thumbSrc(a) || full.src;
      img.classList.add('is-loading');
      var want = i;
      full.addEventListener(
        'load',
        function () {
          if (want === i) {
            img.src = full.src;
            img.classList.remove('is-loading');
          }
        },
        { once: true }
      );
    }
    // sąsiednie zdjęcia w tle
    preload(i + 1);
    preload(i - 1);
  }

  links.forEach(function (a, n) {
    // wczytanie z wyprzedzeniem przy najechaniu kursorem
    a.addEventListener('pointerenter', function () { preload(n); }, { passive: true });
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
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.classList.contains('lightbox__fig')) dlg.close();
  });
  dlg.addEventListener('close', function () { links[i].focus(); });
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
