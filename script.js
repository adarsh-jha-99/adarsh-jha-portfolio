const yearElement = document.querySelector('#current-year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const revealTargets = document.querySelectorAll(
  '.section-heading, .about-content, .about-stats, .skill-card, .project-card, .research-intro, .interest-row, .education-card, .contact-copy'
);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
}