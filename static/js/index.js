(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.primary-navigation');

  if (!toggle || !navigation) return;

  const setNavigation = (open, returnFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setNavigation(open);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavigation(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setNavigation(false, true);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setNavigation(false);
  });
})();
