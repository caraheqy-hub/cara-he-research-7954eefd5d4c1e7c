(() => {
  const websiteId = window.PORTFOLIO_UMAMI_WEBSITE_ID;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(websiteId || '')) return;

  const tracker = document.createElement('script');
  tracker.src = 'https://cloud.umami.is/script.js';
  tracker.async = true;
  tracker.dataset.websiteId = websiteId;
  tracker.dataset.autoPageview = 'false';
  tracker.dataset.excludeHash = 'true';
  tracker.dataset.excludeSearch = 'true';
  tracker.dataset.doNotTrack = 'true';

  tracker.addEventListener('load', () => {
    if (typeof window.umami?.track !== 'function') return;

    window.umami.track();
    const track = (name, data) => window.umami.track(name, data);
    const sections = document.querySelectorAll('[data-track-section]');
    const seen = new Set();

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = entry.target.dataset.trackSection;
          if (seen.has(section)) return;
          seen.add(section);
          track('section_view', { section });
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '-25% 0px -25% 0px' });
      sections.forEach((section) => observer.observe(section));
    }

    document.querySelectorAll('[data-track-link]').forEach((link) => {
      link.addEventListener('click', () => {
        track('project_link_click', { target: link.dataset.trackLink });
      });
    });
  }, { once: true });

  document.head.appendChild(tracker);
})();
