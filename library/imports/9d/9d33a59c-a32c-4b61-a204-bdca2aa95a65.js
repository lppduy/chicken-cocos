"use strict";
cc._RF.push(module, '9d33aWcoyxLYaIEvcoqqVpl', 'Light_1');
// scripts/Light_1.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start: function start() {
    var _this = this;

    this.scheduleOnce(function () {
      _this.node.color = new cc.Color(0, 0, 0, 255);
    }, 0);
    this.scheduleOnce(function () {
      _this.node.color = new cc.Color(255, 0, 0, 255);
    }, 1);
    this.scheduleOnce(function () {
      _this.blink(3, 0.2);
    }, 2);
  },
  blink: function blink(times, interval) {
    var _this2 = this;

    var count = 0;
    this.schedule(function () {
      if (count % 2 === 0) {
        _this2.node.color = new cc.Color(255, 255, 255, 255); // white
      } else {
        _this2.node.color = new cc.Color(255, 0, 0, 255); // red
      }
      count++;

      if (count === times * 2) {
        _this2.node.color = new cc.Color(0, 0, 0, 255);
        _this2.unscheduleAllCallbacks();
      }
    }, interval, cc.macro.REPEAT_FOREVER, 0);
  }
}
//   update(dt) {},
);

cc._RF.pop();