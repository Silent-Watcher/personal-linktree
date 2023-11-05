'use strict';

window.addEventListener('load', () => {
  quicklink.listen();
  const themeCta = document.querySelector('#themeCta');

  themeCta.addEventListener('click', function () {
    const root = document.documentElement;
    if (!root.classList.contains('dark')) {
      root.classList.add('dark');
      this.classList.replace('bxs-moon', 'bxs-sun');
    } else {
      root.classList.remove('dark');
      this.classList.replace('bxs-sun', 'bxs-moon');
    }
  });
});
