"use strict";
cc._RF.push(module, 'a52fcPvel9Lj42UNVZJotcH', 'changeScene');
// scripts/changeScene.js

'use strict';

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
  changeScene: function changeScene(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.enter:
        cc.director.loadScene('sceneTwo');
        break;
    }
  },
  onLoad: function onLoad() {
    cc.director.preloadScene('sceneTwo', function () {
      console.log('the scene two has been loaded in the memory');
    });
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.changeScene, this);
  },
  start: function start() {
    console.log(cc.macro.KEY);
  }
}

// update (dt) {},
);

cc._RF.pop();