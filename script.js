(function() {
  function isSamePageLink(a) {
    return a.hash && (a.origin + a.pathname === window.location.origin + window.location.pathname);
  }

  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    if (!isSamePageLink(target)) return;
    const el = document.querySelector(target.hash);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', target.hash);
  });
})();

(function() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }
  }, { threshold: 0.12 });

  const els = document.querySelectorAll('.reveal');
  els.forEach(el => observer.observe(el));
})();

(function() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(btn => {
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--mx', x + 'px');
      btn.style.setProperty('--my', y + 'px');
    });
  });
})();

