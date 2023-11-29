cc.Class({
  extends: cc.Component,

  properties: {
    speed: 500,
    isMoving: true,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {},

  start() {},

  update(dt) {
    // console.log(this.node.x);

    if (this.isMoving) {
      this.moveCharacterX(dt);
    }
  },

  moveCharacterX(dt) {
    this.node.x -= dt * 200;
    this.node.y -= dt * 200;
    this.node.rotation += dt * 200;
  },
});
