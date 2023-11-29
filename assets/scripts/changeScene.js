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
  changeScene(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.enter:
        cc.director.loadScene('sceneTwo');
        break;
    }
  },
  onLoad() {
    cc.director.preloadScene('sceneTwo', function () {
      console.log('the scene two has been loaded in the memory');
    });
    cc.systemEvent.on(
      cc.SystemEvent.EventType.KEY_DOWN,
      this.changeScene,
      this
    );
  },

  start() {
    console.log(cc.macro.KEY);
  },

  // update (dt) {},
});
