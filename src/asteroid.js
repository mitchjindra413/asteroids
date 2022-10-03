const MovingObject = require('./moving_object');
const Util = require('./util');

const DEFAULTS = {
  COLOR: 'grey',
  RADIUS: 10
}

function Asteroid(obj) {
  let ast = {};
  ast.color = DEFAULTS.COLOR;
  ast.radius = DEFAULTS.RADIUS;
  ast.pos = obj.pos;
  ast.vel = Util.randomVec(20);
  MovingObject.call(this, ast);  
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;