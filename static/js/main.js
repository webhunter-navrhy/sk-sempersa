// Sempersa: menu, cenník (vyhľadávanie, aktívna kategória), formulár v ukážkovom režime.
(function () {
  document.documentElement.classList.add('js');
  var tichy = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // menu na mobile
  var burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var o = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', o); menu.classList.toggle('otvorene', o);
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('otvorene'); } });
  }

  // cenník: vyhľadávanie a aktívna kategória
  var hladat = document.getElementById('hladat');
  if (hladat) {
    var kat = [].slice.call(document.querySelectorAll('.cennik-kat'));
    var prazdne = document.querySelector('.cennik-prazdne');
    var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
    hladat.addEventListener('input', function () {
      var q = norm(hladat.value.trim()), spolu = 0;
      kat.forEach(function (k) {
        var vk = 0;
        k.querySelectorAll('.cennik-skupina').forEach(function (s) {
          var vs = 0, ns = norm(s.querySelector('h3') ? s.querySelector('h3').textContent : '');
          s.querySelectorAll('.polozka').forEach(function (p) {
            var ok = !q || norm(p.textContent).indexOf(q) > -1 || ns.indexOf(q) > -1;
            p.hidden = !ok; if (ok) vs++;
          });
          s.hidden = !vs; vk += vs;
        });
        k.hidden = !vk; spolu += vk;
      });
      if (prazdne) prazdne.hidden = spolu > 0;
    });
    var chips = [].slice.call(document.querySelectorAll('.cennik-nav a'));
    var ioK = new IntersectionObserver(function (zaz) {
      zaz.forEach(function (z) {
        if (z.isIntersecting) chips.forEach(function (c) { c.classList.toggle('aktivny', c.getAttribute('href') === '#' + z.target.id); });
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    kat.forEach(function (k) { ioK.observe(k); });
  }

  // formulár: ukážkový režim nič neodosiela
  document.querySelectorAll('form.formular').forEach(function (f) {
    var stav = f.querySelector('.formular-stav');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (f.querySelector('.past input').value) return;
      var endpoint = f.getAttribute('data-endpoint');
      if (f.getAttribute('data-demo') === '1' || !endpoint) {
        stav.textContent = 'Ukážka formulára: nič sa neodoslalo. Po spustení webu príde správa na info@sempersa.sk.';
        return;
      }
      stav.textContent = 'Odosielam…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); stav.textContent = 'Ďakujeme, správa bola odoslaná.'; })
        .catch(function () { stav.textContent = 'Odoslanie sa nepodarilo. Napíšte nám, prosím, na info@sempersa.sk.'; });
    });
  });
})();
