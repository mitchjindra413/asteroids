class MovingObject {
  constructor(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], 0, this.radius, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move() {
    this.pos += this.vel;
  }
};

module.exports = MovingObject;