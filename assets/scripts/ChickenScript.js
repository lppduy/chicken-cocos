cc.Class({
  extends: cc.Component,

  properties: {
    speed: 500,
    isMoving: true,
    targetX: 0,
    backgroundWidth: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.animationComponent = this.getComponent(cc.Animation);
    this.playWalkingAnimation();
  },

  start() {},

  update(dt) {
    // console.log(this.node.x);

    if (this.isHit) this.node.rotation += dt * this.speed;
    if (this.isMoving) {
      this.moveCharacterX(dt);

      // console.log(this.node.position.x);

      if (this.node.position.x >= 80) {
        // this.isMoving = false; // Dừng lại khi vị trí x đạt 73
        this.node.y += dt * 2 * this.speed;
        this.node.rotation += dt * this.speed * 2;
        console.log('Con gà đạt đến vị trí x là 73!');
      }
    }
  },

  moveCharacterX(dt) {
    this.node.x += dt * this.speed;
  },

  playWalkingAnimation() {
    this.animationComponent.play('chicken_walking');
    this.animationComponent.on('finished', this.playWalkingAnimation, this);
  },
});
