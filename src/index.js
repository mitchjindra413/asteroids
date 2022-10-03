const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid')
window.MovingObject = MovingObject; 


const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");
window.ctx = ctx;

const mo = new Asteroid({pos: [30, 30]})

mo.draw(ctx)


console.log("check")