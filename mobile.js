/* LungAtlas mobile.js — ハンバーガーメニュー + テーブル横スクロール自動ラップ */
(function () {
  /* -----------------------------------------------
     ハンバーガーメニューの開閉
     nav.html が innerHTML 挿入された後に呼ばれるため
     DOMContentLoaded ではなく即時実行
     ----------------------------------------------- */
  function initHamburger () {
    var btn   = document.getElementById('nav-hamburger');
    var links = document.querySelector('#lungatlas-nav .nav-links');
    if (!btn || !links) return;

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

  /* -----------------------------------------------
     全テーブルを .table-scroll でラップ
     ----------------------------------------------- */
  function wrapTables () {
    document.querySelectorAll('table').forEach(function (tbl) {
      if (tbl.closest('.table-scroll')) return;
      var wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      tbl.parentNode.insertBefore(wrapper, tbl);
      wrapper.appendChild(tbl);
    });
  }

  initHamburger();
  wrapTables();
})();
