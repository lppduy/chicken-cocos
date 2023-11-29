(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/KFC.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ddef4FZW4NGQLmHXmsJN1T7', 'KFC', __filename);
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
        //# sourceMappingURL=KFC.js.map
        