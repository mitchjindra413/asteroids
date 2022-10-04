const MovingObject = require('./moving_object');
const Util = require('./util');

const DEFAULTS = {
  COLOR: '#D3D3D3',
  RADIUS: 10
}

function Asteroid(obj) {
  let ast = {};
  ast.color = DEFAULTS.COLOR;
  ast.radius = DEFAULTS.RADIUS;
  ast.pos = obj.pos;
  ast.vel = Util.randomVec(5);
  MovingObject.call(this, ast);  
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;