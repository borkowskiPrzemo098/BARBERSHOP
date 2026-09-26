// SFM — Salon Fryzur Męskich
// Content is visible by default: no scroll-triggered opacity reveals anywhere.
(function(){
  "use strict";

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header shadow + back-to-top (throttled, with hysteresis) ---------- */
  const bar = document.getElementById('bar');
  const toTop = document.getElementById('toTop');
  let scrolled = false, ticking = false;

  function update(){
    const y = window.scrollY;
    // Different on/off thresholds so rubber-band bounce can't flip state back and forth.
    if (!scrolled && y > 60){ scrolled = true; bar.classList.add('is-scrolled'); }
    else if (scrolled && y < 24){ scrolled = false; bar.classList.remove('is-scrolled'); }
    if (toTop) toTop.classList.toggle('show', y > 700);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking){ ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile drawer ---------- */
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');

  function setDrawer(open){
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    drawer.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => setDrawer(drawer.hidden));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setDrawer(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) setDrawer(false); });
  window.matchMedia('(min-width: 1041px)').addEventListener('change', e => { if (e.matches) setDrawer(false); });

  /* ---------- In-page anchors: offset for the fixed header ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (id === '#top' ? 0 : 72);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
