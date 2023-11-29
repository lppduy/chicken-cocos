"use strict";
cc._RF.push(module, '3eb231zm75JY5mJDsszBFIu', 'CountDownLabel');
// scripts/CountDownLabel.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    countdownLabel: cc.Label // Label cho đếm ngược
  },

  start: function start() {
    var _this = this;

    this.scheduleOnce(function () {
      _this.startCountdown();
    }, 5.8);
  },
  startCountdown: function startCountdown() {
    var _this2 = this;

    var count = 3;
    this.schedule(function () {
      if (count > 0) {
        _this2.countdownLabel.string = count.toString();
        count--;
      } else {
        _this2.countdownLabel.string = 'GO! PRESS ENTER!';
        _this2.countdownLabel.node.scale = 1.2;
        _this2.unscheduleAllCallbacks();
        // Sau khi đếm ngược kết thúc, bạn có thể thực hiện hành động tiếp theo ở đây
      }
    }, 1, 4); // Gọi hàm mỗi giây, tổng cộng 4 lần
  }
});

cc._RF.pop();