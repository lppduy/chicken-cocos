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

  start() {
    this.scheduleOnce(() => {
      this.node.color = new cc.Color(0, 0, 0, 255);
    }, 0);
    this.scheduleOnce(() => {
      this.node.color = new cc.Color(255, 0, 0, 255);
    }, 1);
    this.scheduleOnce(() => {
      this.blink(3, 0.2);
    }, 2);
  },
  blink(times, interval) {
    let count = 0;
    this.schedule(
      () => {
        if (count % 2 === 0) {
          this.node.color = new cc.Color(255, 255, 255, 255); // white
        } else {
          this.node.color = new cc.Color(255, 0, 0, 255); // red
        }
        count++;

        if (count === times * 2) {
          this.node.color = new cc.Color(0, 0, 0, 255);
          this.unscheduleAllCallbacks();
        }
      },
      interval,
      cc.macro.REPEAT_FOREVER,
      0
    );
  },
  //   update(dt) {},
});
