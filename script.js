// SFM — Salon Fryzur Męskich — interactions
(function(){
  "use strict";

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Header scroll state + progress bar ---------- */
  const header = document.getElementById('siteHeader');
  const progressBar = document.getElementById('progressBar');
  let isScrolled = false;
  let ticking = false;

  function updateOnScroll(){
    const y = window.scrollY;
    // Hysteresis (different on/off thresholds) stops the header from
    // flipping .scrolled on and off repeatedly during iOS/Android
    // rubber-band bounce near the boundary — that flicker is what reads
    // as the page "jumping" while scrolling.
    if (!isScrolled && y > 60){ isScrolled = true; header.classList.add('scrolled'); }
    else if (isScrolled && y < 24){ isScrolled = false; header.classList.remove('scrolled'); }

    const h = document.documentElement;
    const scrollable = h.scrollHeight - h.clientHeight;
    const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = pct + '%';
    ticking = false;
  }
  // requestAnimationFrame is the ideal throttle for scroll-driven paint work, but it
  // only fires on a visible, foregrounded tab — fall back to a plain timeout so this
  // still runs (e.g. in an embedded/backgrounded preview, or a low-power scenario).
  const raf = (typeof requestAnimationFrame === 'function')
    ? requestAnimationFrame
    : (fn) => setTimeout(fn, 16);
  function onScroll(){
    if (!ticking){
      raf(updateOnScroll);
      ticking = true;
    }
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  updateOnScroll();

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-up');
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* Hero reveals immediately on load (above the fold, no scroll needed) */
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('is-visible'));
  });

  /* ---------- Smooth-scroll for in-page anchors (accounts for fixed header) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 84;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
