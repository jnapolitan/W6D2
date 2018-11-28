const View = require('./hanoi-view.js');

$( () => {
  const $rootEl = $('.hanoi');
  const game = new HanoiGame();
  new View(game, $rootEl);
});