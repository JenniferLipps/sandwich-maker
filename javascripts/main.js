import cart from './components/cart.js';

import events from './helpers/buttonEvents.js';

const init = () => {
  document.getElementById('make-sandwich').addEventListener('click', cart.makeSandwich);
  events.attachEvents();
};

init();