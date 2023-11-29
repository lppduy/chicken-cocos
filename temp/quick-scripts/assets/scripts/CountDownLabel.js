(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/CountDownLabel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3eb231zm75JY5mJDsszBFIu', 'CountDownLabel', __filename);
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
        //# sourceMappingURL=CountDownLabel.js.map
        