(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/ChickenScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fe157urNC1PgJyB2qezGVmL', 'ChickenScript', __filename);
// scripts/ChickenScript.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 500,
    isMoving: true,
    targetX: 0,
    backgroundWidth: 0
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.animationComponent = this.getComponent(cc.Animation);
    this.playWalkingAnimation();
  },
  start: function start() {},
  update: function update(dt) {
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
  moveCharacterX: function moveCharacterX(dt) {
    this.node.x += dt * this.speed;
  },
  playWalkingAnimation: function playWalkingAnimation() {
    this.animationComponent.play('chicken_walking');
    this.animationComponent.on('finished', this.playWalkingAnimation, this);
  }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ChickenScript.js.map
        