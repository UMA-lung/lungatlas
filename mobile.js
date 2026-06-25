(function () {
  // ハンバーガー開閉
  var btn   = document.getElementById('nav-hamburger');
  var links = document.querySelector('#lungatlas-nav .nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      btn.classList.toggle('is-open', isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#lungatlas-nav')) {
        links.classList.remove('is-open');
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // テーブル横スクロールラップ
  document.querySelectorAll('table').forEach(function (tbl) {
    if (tbl.closest('.table-scroll')) return;
    var w = document.createElement('div');
    w.className = 'table-scroll';
    tbl.parentNode.insertBefore(w, tbl);
    w.appendChild(tbl);
  });
})();
