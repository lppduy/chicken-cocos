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

  properties: {
    speed: 500,
    isMoving: true,
    isHit: false,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.enablePhysics();
  },
  start() {
    console.log(this.speed);
  },

  update(dt) {
    if (this.isHit) this.node.rotation += dt * this.speed;
    if (this.isMoving) {
      this.moveCharacterX(dt);
    }
  },

  moveCharacterX(dt) {
    this.node.x -= dt * this.speed;
  },

  onBeginContact(contact, selfCollider, otherCollider) {
    cc.log('onBeginContact');
    this.isHit = true;
    console.log(this.isHit);

    // let selfRigidBody = selfCollider.getComponent(cc.RigidBody);
    // let otherRigidBody = otherCollider.getComponent(cc.RigidBody);
    // if (selfRigidBody && otherRigidBody) {
    //   let selfVelocity = selfRigidBody.linearVelocity;
    //   let otherVelocity = otherRigidBody.linearVelocity;
    //   let impulse = selfVelocity.clone().normalize().mul(1000); // Điều chỉnh lực văng ra
    //   selfRigidBody.applyLinearImpulse(
    //     impulse,
    //     selfRigidBody.getWorldCenter(),
    //     true
    //   );
    //   impulse = otherVelocity.clone().normalize().mul(1000);
    //   otherRigidBody.applyLinearImpulse(
    //     impulse,
    //     otherRigidBody.getWorldCenter(),
    //     true
    //   );
    // }
  },

  enablePhysics() {
    let physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;

    // Bắt sự kiện va chạm
    physicsManager.enabledDebugDraw = true;
    this.node.on('begin-contact', this.onBeginContact, this);
  },
});
