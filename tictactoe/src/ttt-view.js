// const Game = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard($el);
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '.square', (e) => {
      let $square = $(e.target);
      let pos = $square.data('pos');
      if (!this.game.board.isEmptyPos(pos)) {
        alert('That\'s not an empty position dummy!');
      }
      this.game.playMove(pos);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    $square.removeClass('.square');
    $square.css('background-color', "white");
    $square.html(this.game.currentPlayer);
    $square.addClass('mark');
    if (this.game.currentPlayer === 'x') {
      $square.addClass('x-mark');
    } else {
      $square.addClass('o-mark');
    }
  }
  
  checkWinner() {
    if (this.game.board.winner()) {
      alert (`${this.game.currentPlayer} wins!`);
    }
  }
    
  setupBoard($el) {
    
    const posses = {
      0: "[0, 0]",
      1: "[0, 1]",
      2: "[0, 2]",
      3: "[1, 0]",
      4: "[1, 1]",
      5: "[1, 2]",
      6: "[2, 0]",
      7: "[2, 1]",
      8: "[2, 2]"
    };
    
    const $board = $('<ul>');
    for (var i = 0; i < 9; i++) {
      $board.append(`<li class='square' data-pos="${posses[i]}" ></li>`);
    }
    $el.append($board);
    
  }
}

module.exports = View;
