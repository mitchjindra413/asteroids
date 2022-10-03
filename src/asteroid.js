const MovingObject = require('./moving_object');
const Util = require('./util');

const DEFAULTS = {
  COLOR: 'grey',
  RADIUS: 10
}

function Asteroid(obj) {
  // this.obj = obj;
  this.color = DEFAULTS.COLOR;
  this.radius = DEFAULTS.RADIUS;
  this.pos = obj.pos;
  MovingObject.call(this, obj);  
}

Util.inherits(Asteroid, MovingObject);