const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid')
const Game = require('./game')
const GameView = require('./game_view')
const Util = require('./util')
window.MovingObject = MovingObject; 


const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");
window.ctx = ctx;

canvas.width = 500;
canvas.height = 500;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 500, 500);

const g = new Game();
const gv = new GameView(g, ctx);

gv.start()

console.log("check")