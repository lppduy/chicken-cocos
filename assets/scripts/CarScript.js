cc.Class({
  extends: cc.Component,

  properties: {
    speed: 500,
    isMoving: true,
    isHit: false,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {},
  start() {
    // console.log(this.speed);
  },

  update(dt) {
    if (this.isHit) this.node.rotation += dt * this.speed;
    if (this.isMoving) {
      this.moveCharacterX(dt);
      if (this.node.position.x <= 150) {
        // this.isMoving = false; // Dừng lại khi vị trí x đạt 73
        this.node.rotation += dt * this.speed;
        console.log('CAR đạt đến vị trí x là 73!');
      }
    }
  },

  moveCharacterX(dt) {
    this.node.x -= dt * this.speed;
  },
});
