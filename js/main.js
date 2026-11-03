/* NEXRA CREATIVE — interactions. Vanilla, no dependencies. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Sticky header hairline --- */
  var head = document.getElementById('siteHead');
  if (head) {
    var onScroll = function () {
      head.classList.toggle('stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Mobile menu --- */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        document.body.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  /* --- Scroll reveal --- */
  var targets = document.querySelectorAll('[data-reveal]');
  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseFloat(el.getAttribute('data-delay') || '0');
        setTimeout(function () { el.classList.add('in'); }, delay * 1000);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -4% 0px', threshold: 0.01 });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  /* --- Current year --- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* --- Form: inline validation + submitting state --- */
  var form = document.querySelector('form[data-enhanced]');
  if (form) {
    form.addEventListener('submit', function () {
      var submit = form.querySelector('[type="submit"]');
      if (submit && form.checkValidity()) {
        submit.setAttribute('disabled', 'disabled');
        var label = submit.querySelector('.btn-label');
        if (label) label.textContent = 'Sending';
      }
    });
  }
})();
