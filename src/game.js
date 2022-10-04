const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 15;

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  console.log(this.asteroids)
}

Game.prototype.addAsteroids = function() {
  let count = 0;
  while (count < NUM_ASTEROIDS) {
    let newAsteroid = new Asteroid({pos: this.randomPosition()});
    this.asteroids.push(newAsteroid);
    count++;
  }
}

Game.prototype.randomPosition = function() {
  return [Math.random() * DIM_X, Math.random() * DIM_Y]
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 500, 500);
  for (let asteroid of this.asteroids) {
    asteroid.draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
  for (let asteroid of this.asteroids) {
    asteroid.move();
  }
}

Game.prototype.wrap = function(pos) {
  if (pos[0] > 500) {
    pos[0] = 0;
  } else if (pos[1] > 500) {
    pos[1] = 0;
  } else if (pos[0] < 0) {
    pos[0] = 500;
  } else if (pos[1] < 0) {
    pos[1] = 500;
  }
}

module.exports = Game;