"use strict";
cc._RF.push(module, '0180fqlSapK6bKmNskpoWy4', 'CarScript');
// scripts/CarScript.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 500,
    isMoving: true,
    isHit: false
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {},
  start: function start() {
    // console.log(this.speed);
  },
  update: function update(dt) {
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
  moveCharacterX: function moveCharacterX(dt) {
    this.node.x -= dt * this.speed;
  }
});

cc._RF.pop();