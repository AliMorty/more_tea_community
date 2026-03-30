(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var dismissed = false;

  function dismissHero() {
    if (dismissed) return;
    dismissed = true;
    hero.classList.add('hero-exit');

    // After animation, scroll to top so there's no white gap at the bottom
    hero.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'margin-top') return;
      hero.removeEventListener('transitionend', onEnd);
      window.scrollTo(0, 0);
    });
  }

  // Trigger on any downward scroll
  window.addEventListener('wheel', function (e) {
    if (!dismissed && e.deltaY > 0) {
      e.preventDefault();
      dismissHero();
    }
  }, { passive: false });

  // Touch support: swipe up dismisses
  var touchStartY = 0;
  window.addEventListener('touchstart', function (e) {
    if (!dismissed) touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', function (e) {
    if (dismissed) return;
    var deltaY = touchStartY - e.touches[0].clientY;
    if (deltaY > 30) {
      e.preventDefault();
      dismissHero();
    }
  }, { passive: false });
})();
