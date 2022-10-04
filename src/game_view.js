const Game = require('./game')

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    setInterval( () => {
        this.game.draw(this.ctx);
        this.game.moveObjects();
    }, 75)
}

module.exports = GameView;