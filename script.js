// SFM — Salon Fryzur Męskich — interactions
(function(){
  "use strict";

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Header scroll state + progress bar ---------- */
  const header = document.getElementById('siteHeader');
  const progressBar = document.getElementById('progressBar');

  function onScroll(){
    header.classList.toggle('scrolled', window.scrollY > 40);
    const h = document.documentElement;
    const scrollable = h.scrollHeight - h.clientHeight;
    const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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

  /* ---------- Testimonial slider ---------- */
  const track = document.getElementById('testiTrack');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  const currentEl = document.getElementById('testiCurrent');
  const totalEl = document.getElementById('testiTotal');
  const slides = track ? track.children.length : 0;
  let index = 0;

  function pad(n){ return String(n).padStart(2, '0'); }

  function updateSlider(){
    track.style.transform = `translateX(-${index * 100}%)`;
    if (currentEl) currentEl.textContent = pad(index + 1);
  }
  if (track){
    if (totalEl) totalEl.textContent = pad(slides);
    updateSlider();

    nextBtn.addEventListener('click', () => { index = (index + 1) % slides; updateSlider(); });
    prevBtn.addEventListener('click', () => { index = (index - 1 + slides) % slides; updateSlider(); });

    let autoplay = setInterval(() => { index = (index + 1) % slides; updateSlider(); }, 6000);
    [prevBtn, nextBtn].forEach(btn => btn.addEventListener('click', () => {
      clearInterval(autoplay);
      autoplay = setInterval(() => { index = (index + 1) % slides; updateSlider(); }, 6000);
    }));
  }

  /* ---------- Booking form (no backend — placeholder confirmation) ---------- */
  const form = document.getElementById('bookingForm');
  const note = document.getElementById('formNote');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.textContent = 'Dziękujemy! Zgłoszenie zostało zarejestrowane — skontaktujemy się wkrótce, aby potwierdzić termin.';
      form.reset();
    });
  }

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
