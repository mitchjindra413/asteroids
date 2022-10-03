const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 1000;
const NUM_ASTEROIDS = 15;

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  let count = 0;
  while (count < NUM_ASTEROIDS) {
    let newAsteroid = new Asteroid(this.randomPosition);
    this.asteroids.push(newAsteroid);
    count++;
  }
}

Game.prototype.randomPosition = function() {
  return [Math.random() * DIM_X, Math.random() * DIM_Y]
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  for (let asteroid of this.asteroids) {
    asteroid.draw(ctx);
  }
}

Game.prototype.move = function(obj) {
  for (let asteroid of this.asteroids) {
    asteroid.move();
  }
}