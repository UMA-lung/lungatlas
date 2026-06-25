/* LungAtlas mobile.js — CSS注入 + ハンバーガー + テーブルラップ */
(function () {

  /* -----------------------------------------------
     1. モバイルCSSを <head> に直接注入
        （innerHTML経由のstyleタグの制約を回避）
     ----------------------------------------------- */
  if (!document.getElementById('la-mobile-css')) {
    var css = document.createElement('style');
    css.id = 'la-mobile-css';
    css.textContent = [
      '.nav-hamburger{display:none;flex-direction:column;justify-content:center;',
      'gap:5px;width:40px;height:40px;background:none;border:none;cursor:pointer;',
      'padding:6px;margin-left:auto;border-radius:6px;}',
      '.nav-hamburger:hover{background:rgba(255,255,255,0.1);}',
      '.nav-hamburger span{display:block;width:22px;height:2px;background:#fff;',
      'border-radius:2px;transition:transform 0.25s,opacity 0.25s;}',
      '.nav-hamburger.is-open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
      '.nav-hamburger.is-open span:nth-child(2){opacity:0;}',
      '.nav-hamburger.is-open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',
      '.table-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;',
      'margin-bottom:1.25rem;border-radius:4px;}',
      '@media(max-width:768px){',
        '.nav-hamburger{display:flex;}',
        '#lungatlas-nav .nav-links{',
          'display:none !important;position:absolute;top:100%;left:0;right:0;',
          'flex-direction:column;background:#0d5c3a;padding:8px 0 16px;',
          'box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:1000;}',
        '#lungatlas-nav .nav-links.is-open{display:flex !important;}',
        '#lungatlas-nav .nav-links>a,',
        '#lungatlas-nav .nav-links>.nav-item>a{',
          'padding:12px 20px;font-size:15px;',
          'border-bottom:1px solid rgba(255,255,255,0.08);}',
        '#lungatlas-nav .nav-item{position:static;}',
        '#lungatlas-nav .nav-dropdown{position:static;}',
        '#lungatlas-nav .dropdown-menu{',
          'position:static;display:block;background:rgba(0,0,0,0.2);',
          'box-shadow:none;border-radius:0;padding:0;opacity:1;visibility:visible;}',
        '#lungatlas-nav .dropdown-menu a{padding:10px 20px 10px 36px;font-size:14px;}',
        '.comp-table td,.comp-table th,',
        '.surgery-table td,.surgery-table th{font-size:max(12px,0.75rem) !important;}',
        '.step-img img{max-width:100% !important;}',
        '.table-scroll{border:1px solid #e0e0e0;}',
      '}'
    ].join('');
    document.head.appendChild(css);
  }

  /* -----------------------------------------------
     2. ハンバーガーメニューの開閉
     ----------------------------------------------- */
  function initHamburger() {
    var btn   = document.getElementById('nav-hamburger');
    var links = document.querySelector('#lungatlas-nav .nav-links');
    if (!btn || !links) return;
    if (btn._laInit) return;  // 二重登録防止
    btn._laInit = true;

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
     3. 全テーブルを .table-scroll でラップ
     ----------------------------------------------- */
  function wrapTables() {
    document.querySelectorAll('table').forEach(function (tbl) {
      if (tbl.closest('.table-scroll')) return;
      var wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      tbl.parentNode.insertBefore(wrapper, tbl);
      wrapper.appendChild(tbl);
    });
  }

  /* -----------------------------------------------
     4. nav挿入完了を待ってから初期化
        fetchは非同期なのでポーリングで待つ
     ----------------------------------------------- */
  function waitForNav(cb, tries) {
    tries = tries || 0;
    if (tries > 40) return;  // 2秒でタイムアウト
    if (document.getElementById('nav-hamburger')) {
      cb();
    } else {
      setTimeout(function () { waitForNav(cb, tries + 1); }, 50);
    }
  }

  waitForNav(function () {
    initHamburger();
    wrapTables();
  });

})();
