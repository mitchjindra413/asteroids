const MovingObject = require('./moving_object');
window.MovingObject = MovingObject; 


const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");
window.ctx = ctx;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 80,
    color: "#00FF00"
});

mo.draw(ctx)


console.log("check")