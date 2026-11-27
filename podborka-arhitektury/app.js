/* Подборка современной архитектуры — движок презентации. Без библиотек. */
(function () {
  'use strict';

  var S = window.SLIDES || [];
  var LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="148 70 424 50"><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 471.550781 116.578125 L 468.902344 116.578125 L 468.902344 96.882812 L 453.246094 72.390625 L 456.464844 72.390625 L 471.171875 95.367188 L 481.902344 78.636719 C 483.292969 76.429688 484.746094 74.15625 485.375 72.390625 L 487.773438 72.390625 C 485.753906 74.597656 484.304688 76.746094 482.851562 79.015625 L 471.550781 96.691406 Z M 471.550781 116.578125 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 430.519531 116.578125 L 427.808594 116.578125 L 411.207031 72.390625 L 414.046875 72.390625 L 430.015625 115.25 L 441.820312 84.636719 C 444.472656 77.691406 445.292969 75.167969 445.292969 72.390625 L 447.878906 72.390625 C 446.429688 75.101562 445.480469 77.816406 442.765625 84.824219 Z M 430.519531 116.578125 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 184.21875 116.714844 L 180.90625 116.714844 L 175.414062 102.320312 L 156.960938 102.320312 C 154.363281 109.328125 156.960938 102.320312 151.257812 116.714844 L 150 116.714844 C 152.476562 110.765625 154.949219 104.175781 157.378906 97.886719 L 167.066406 72.722656 L 167.320312 72.722656 L 184.261719 116.675781 Z M 175.246094 101.8125 L 166.1875 78.253906 L 158.511719 98.222656 L 157.128906 101.8125 Z M 175.246094 101.8125 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 192.214844 116.8125 L 191.269531 116.8125 L 191.269531 72.625 L 193.921875 72.625 L 222.074219 112.269531 L 222.074219 72.625 L 223.019531 72.625 L 223.019531 116.8125 L 222.074219 116.8125 L 192.214844 74.835938 Z M 192.214844 116.8125 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 249.710938 116.964844 L 247.058594 116.964844 L 247.058594 73.726562 L 231.464844 73.726562 L 231.464844 72.777344 L 265.425781 72.777344 L 265.425781 73.726562 L 249.710938 73.726562 Z M 249.710938 116.964844 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 277.441406 109.859375 C 269.101562 101.519531 269.101562 87.960938 277.441406 79.582031 C 285.78125 71.242188 299.339844 71.242188 307.71875 79.582031 C 316.097656 87.921875 316.058594 101.476562 307.71875 109.859375 C 299.378906 118.199219 285.820312 118.199219 277.441406 109.859375 M 305.292969 107.351562 C 313.511719 99.136719 314.578125 87.015625 307.429688 79.867188 C 300.28125 72.71875 288.164062 73.828125 279.949219 82.003906 C 271.730469 90.21875 270.621094 102.421875 277.730469 109.53125 C 284.878906 116.679688 297.078125 115.527344 305.292969 107.3125 Z M 305.292969 107.351562 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 323.867188 116.8125 L 322.921875 116.8125 L 322.921875 72.625 L 325.574219 72.625 L 353.726562 112.269531 L 353.726562 72.625 L 354.671875 72.625 L 354.671875 116.8125 L 353.726562 116.8125 L 323.867188 74.835938 Z M 323.867188 116.8125 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 369.863281 109.859375 C 361.523438 101.519531 361.523438 87.960938 369.863281 79.582031 C 378.203125 71.242188 391.761719 71.242188 400.140625 79.582031 C 408.519531 87.921875 408.480469 101.476562 400.140625 109.859375 C 391.800781 118.199219 378.242188 118.199219 369.863281 109.859375 M 397.714844 107.351562 C 405.933594 99.136719 407 87.015625 399.851562 79.867188 C 392.703125 72.71875 380.585938 73.828125 372.371094 82.003906 C 364.152344 90.21875 363.042969 102.421875 370.152344 109.53125 C 377.300781 116.679688 389.5 115.527344 397.714844 107.3125 Z M 397.714844 107.351562 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 513.628906 117.4375 C 500.496094 117.4375 490.460938 107.214844 490.460938 94.652344 C 490.460938 86.066406 495.382812 78.617188 502.582031 74.765625 C 510.914062 70.285156 522.464844 71.484375 530.039062 76.660156 L 528.210938 79.4375 C 521.582031 73 510.722656 71.675781 502.898438 75.589844 C 496.519531 78.808594 493.238281 85.496094 493.300781 92.566406 C 493.363281 107.085938 502.832031 116.050781 515.269531 116.050781 C 521.582031 116.050781 527.769531 113.335938 531.238281 109.234375 L 531.933594 109.738281 C 527.578125 114.851562 521.011719 117.4375 513.628906 117.4375 "/><path fill-rule="nonzero" fill="currentColor" fill-opacity="1" d="M 541.59375 116.8125 L 538.945312 116.8125 L 538.945312 72.625 L 541.59375 72.625 L 541.59375 93.078125 L 567.347656 93.078125 L 567.347656 72.625 L 570 72.625 L 570 116.8125 L 567.347656 116.8125 L 567.347656 94.023438 L 541.59375 94.023438 Z M 541.59375 116.8125 "/></svg>';
  var stage = document.getElementById('stage');
  var grid = document.getElementById('grid');
  var bar = document.getElementById('bar');
  var chrome = document.getElementById('chrome');
  var counter = document.getElementById('counter');
  var hint = document.getElementById('hint');
  var cur = 0, busy = false, hideTimer = null, hintTimer = null, soundOn = false;

  function logo() { return LOGO.replace('<svg ', '<svg class="logo-mark" aria-label="Antonovych Design" '); }
  function label(el, s) {
    if (!s.label) return;
    var lb = document.createElement('div');
    lb.className = 'photo-label';
    lb.textContent = s.label;
    el.appendChild(lb);
  }

  /* ── сборка слайдов ─────────────────────────────────────────────── */
  S.forEach(function (s, i) {
    var el = document.createElement('section');
    el.className = 'slide' + (s.type === 'text' ? ' text-slide' : '');
    el.setAttribute('aria-hidden', 'true');

    if (s.type === 'cover') {
      el.classList.add('cover');
      el.innerHTML = logo() + '<div class="cover-title">' + s.title + '</div>';

    } else if (s.type === 'text') {
      var html = '<div class="text-inner">';
      if (s.logo) html += logo();
      if (s.kicker) html += '<div class="kicker">' + s.kicker + '</div>';
      if (s.title) html += '<h2 class="title">' + s.title + '</h2><div class="rule"></div>';
      if (s.sub) html += '<div class="sub">' + s.sub + '</div>';
      el.innerHTML = html + '</div>';

    } else if (s.type === 'photo' || s.type === 'pair') {
      var f = document.createElement('div');
      f.className = 'frame photo' + (s.type === 'pair' ? ' pair' : '') + (s.small ? ' small' : '') + (s.medium ? ' medium' : '');
      (s.type === 'pair' ? s.src : [s.src]).forEach(function (src) {
        var img = document.createElement('img');
        img.src = src; img.alt = ''; img.decoding = 'async';
        if (i > 2) img.loading = 'lazy';
        f.appendChild(img);
      });
      el.appendChild(f);
      label(el, s);

    } else if (s.type === 'video') {
      var fv = document.createElement('div');
      fv.className = 'frame vid';
      var v = document.createElement('video');
      v.src = s.src; v.poster = s.poster || ''; v.preload = 'none';
      v.muted = true; v.loop = true; v.playsInline = true; v.controls = true;
      if (s.rate) { v.defaultPlaybackRate = s.rate; v.playbackRate = s.rate; }
      v.setAttribute('playsinline', '');
      fv.appendChild(v);
      el.appendChild(fv);
      label(el, s);

    } else if (s.type === 'yt') {
      var fy = document.createElement('div');
      fy.className = 'frame vid yt';
      el.appendChild(fy);
      label(el, s);
    }

    stage.appendChild(el);
  });

  var slides = Array.prototype.slice.call(stage.querySelectorAll('.slide'));

  /* ── обзорная сетка ─────────────────────────────────────────────── */
  S.forEach(function (s, i) {
    var fig = document.createElement('figure');
    if (s.type === 'text' || s.type === 'cover') {
      fig.innerHTML = '<div class="g-text">' + (s.logo ? logo() : (s.title || '')) + '</div>';
    } else if (s.type === 'yt') {
      fig.innerHTML = '<img src="https://i.ytimg.com/vi/' + s.id + '/hqdefault.jpg" alt="" loading="lazy">';
    } else {
      var src = s.type === 'pair' ? s.src[0] : (s.type === 'video' ? s.poster : s.src);
      fig.innerHTML = '<img src="' + src + '" alt="" loading="lazy">';
    }
    fig.innerHTML += '<figcaption>' + String(i + 1).padStart(2, '0') + '</figcaption>';
    fig.addEventListener('click', function () { closeGrid(); go(i); });
    grid.appendChild(fig);
  });

  /* ── полоса превью следующих кадров ─────────────────────────────── */
  var RAIL_N = 5;
  var rail = document.createElement('aside');
  rail.id = 'rail';
  rail.setAttribute('aria-label', 'Следующие кадры');
  document.body.appendChild(rail);
  function thumbHTML(s) {
    if (s.type === 'text' || s.type === 'cover') {
      return '<div class="r-text">' + (s.logo ? logo() : (s.title || '')) + '</div>';
    }
    if (s.type === 'yt') return '<img src="https://i.ytimg.com/vi/' + s.id + '/hqdefault.jpg" alt="">';
    if (s.type === 'pair') return '<img src="' + s.src[0] + '" alt=""><img src="' + s.src[1] + '" alt="">';
    return '<img src="' + (s.type === 'video' ? s.poster : s.src) + '" alt="">';
  }
  function renderRail() {
    rail.innerHTML = '';
    for (var k = 1; k <= RAIL_N; k++) {
      var j = cur + k;
      var th = document.createElement('div');
      th.className = 'th';
      if (j < S.length) {
        th.innerHTML = thumbHTML(S[j]);
        if (S[j].type === 'pair') th.classList.add('is-pair');
        (function (n) { th.addEventListener('click', function (e) { e.stopPropagation(); busy = false; go(n); }); })(j);
      } else { th.classList.add('empty'); }
      rail.appendChild(th);
    }
  }

  /* ── видео и звук ───────────────────────────────────────────────── */
  var sndBtn = document.createElement('button');
  sndBtn.id = 'sound-toggle';
  sndBtn.type = 'button';
  sndBtn.textContent = '♪ Звук';
  document.body.appendChild(sndBtn);
  sndBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    soundOn = !soundOn;
    sndBtn.textContent = soundOn ? '♪ Без звука' : '♪ Звук';
    var s = S[cur];
    if (s.type === 'video') {
      var v = slides[cur].querySelector('video');
      v.muted = !soundOn; v.play().catch(function () {});
    } else if (s.type === 'yt') {
      media(cur, 'pause'); media(cur, 'play');
    }
  });

  function media(i, action) {
    var s = S[i], el = slides[i];
    if (!s || !el) return;
    if (s.type === 'video') {
      var v = el.querySelector('video');
      if (action === 'play') {
        if (v.preload === 'none') v.preload = 'auto';
        v.currentTime = 0; v.muted = !soundOn; if (s.rate) v.playbackRate = s.rate;
        v.play().catch(function () { v.muted = true; v.play().catch(function () {}); });
      } else { v.pause(); v.muted = true; }
    } else if (s.type === 'yt') {
      var box = el.querySelector('.frame');
      if (action === 'play') {
        box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + s.id +
          '?autoplay=1&mute=' + (soundOn ? 0 : 1) + '&loop=1&playlist=' + s.id +
          '&controls=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      } else { box.innerHTML = ''; }
    }
  }

  function preload(i) {
    var s = S[i]; if (!s) return;
    if (s.type === 'photo' || s.type === 'pair') {
      (s.type === 'pair' ? s.src : [s.src]).forEach(function (src) { new Image().src = src; });
    }
    var v = slides[i] && slides[i].querySelector('video');
    if (v && v.preload === 'none') v.preload = 'metadata';
  }

  function go(n) {
    if (busy || n === cur || n < 0 || n >= slides.length) return;
    busy = true;
    media(cur, 'pause');
    slides[cur].classList.remove('is-active');
    slides[cur].setAttribute('aria-hidden', 'true');
    cur = n;
    slides[cur].classList.add('is-active');
    slides[cur].setAttribute('aria-hidden', 'false');
    if (S[cur].type === 'video' || S[cur].type === 'yt') setTimeout(function () { media(cur, 'play'); }, 260);
    update();
    preload(cur + 1); preload(cur + 2); preload(cur - 1);
    setTimeout(function () { busy = false; }, 560);
  }
  var next = function () { go(cur + 1); };
  var prev = function () { go(cur - 1); };

  function update() {
    bar.style.width = ((cur + 1) / slides.length * 100) + '%';
    counter.textContent = String(cur + 1).padStart(3, '0') + ' / ' + String(slides.length).padStart(3, '0');
    document.body.classList.toggle('show-counter', S[cur].type === 'text');
    document.body.classList.toggle('on-video', S[cur].type === 'video' || S[cur].type === 'yt');
    renderRail();
    showChrome();
  }
  function showChrome() {
    chrome.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { chrome.classList.remove('show'); }, 2600);
  }

  /* ── управление ─────────────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { grid.classList.contains('open') ? closeGrid() : openGrid(); return; }
    if (grid.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(slides.length - 1);
    else if (e.key === 'f' || e.key === 'F' || e.key === 'а' || e.key === 'А') toggleFull();
    hideHint();
  });

  var wheelLock = false;
  window.addEventListener('wheel', function (e) {
    if (grid.classList.contains('open')) return;
    if (wheelLock || Math.abs(e.deltaY) < 18) return;
    wheelLock = true;
    e.deltaY > 0 ? next() : prev();
    hideHint();
    setTimeout(function () { wheelLock = false; }, 700);
  }, { passive: true });

  var tX = 0, tY = 0, lastTap = 0, tapTimer = null;
  window.addEventListener('touchstart', function (e) {
    tX = e.changedTouches[0].clientX; tY = e.changedTouches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchend', function (e) {
    if (grid.classList.contains('open')) return;
    var dx = e.changedTouches[0].clientX - tX, dy = e.changedTouches[0].clientY - tY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); hideHint(); }
    else if (Math.abs(dy) > 55) { dy < 0 ? next() : prev(); hideHint(); }
  }, { passive: true });

  /* клик по левой трети — назад, по остальному полю — вперёд;
     на телефоне двойное касание — полный экран */
  stage.addEventListener('click', function (e) {
    if (e.target.closest('#sound-toggle') || e.target.closest('iframe') || e.target.closest('video')) return;
    var x = e.clientX;
    if (window.matchMedia('(pointer:coarse)').matches) {
      var now = Date.now();
      if (now - lastTap < 300) { clearTimeout(tapTimer); lastTap = 0; toggleFull(); return; }
      lastTap = now;
      tapTimer = setTimeout(function () { (x < window.innerWidth * 0.3) ? prev() : next(); }, 280);
    } else {
      (x < window.innerWidth * 0.3) ? prev() : next();
    }
    hideHint();
  });

  window.addEventListener('mousemove', showChrome);
  function openGrid() { grid.classList.add('open'); }
  function closeGrid() { grid.classList.remove('open'); }

  function toggleFull() {
    var d = document, el = d.documentElement;
    if (!(d.fullscreenElement || d.webkitFullscreenElement)) {
      var req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) { try { var p = req.call(el); if (p && p.then) p.then(function () {
        if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(function () {});
      }).catch(function () {}); } catch (err) {} }
    } else { (d.exitFullscreen || d.webkitExitFullscreen).call(d); }
  }
  function hideHint() {
    if (!hint || hint.classList.contains('gone')) return;
    hint.classList.add('gone');
    clearTimeout(hintTimer);
  }

  /* полный экран с первого клика или клавиши на компьютере */
  if (!window.matchMedia('(pointer:coarse)').matches) {
    var el0 = document.documentElement, req0 = el0.requestFullscreen || el0.webkitRequestFullscreen;
    var goFull = function (e) {
      if (e.type === 'keydown' && (e.key === 'Escape' || e.key === 'f' || e.key === 'F')) return;
      if (document.fullscreenElement || document.webkitFullscreenElement || !req0) return;
      try { var p = req0.call(el0); if (p && p.catch) p.catch(function () {}); } catch (err) {}
    };
    ['click', 'keydown'].forEach(function (ev) { window.addEventListener(ev, goFull, true); });
  }

  /* ── старт ──────────────────────────────────────────────────────── */
  slides[0].classList.add('is-active');
  slides[0].setAttribute('aria-hidden', 'false');
  update();
  preload(1); preload(2);
  hintTimer = setTimeout(hideHint, 6000);
})();
