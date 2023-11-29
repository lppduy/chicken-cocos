"use strict";
cc._RF.push(module, 'ddef4FZW4NGQLmHXmsJN1T7', 'KFC');
// scripts/KFC.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 500,
    isMoving: true
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {
    // console.log(this.node.x);

    if (this.isMoving) {
      this.moveCharacterX(dt);
    }
  },
  moveCharacterX: function moveCharacterX(dt) {
    this.node.x -= dt * 200;
    this.node.y -= dt * 200;
    this.node.rotation += dt * 200;
  }
});

cc._RF.pop();