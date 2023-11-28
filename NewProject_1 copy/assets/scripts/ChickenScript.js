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
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.enablePhysics();

    this.animationComponent = this.getComponent(cc.Animation);
    this.playWalkingAnimation(); // Bắt đầu animation khi load scene
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
    this.node.x += dt * this.speed;
  },

  playWalkingAnimation() {
    this.animationComponent.play('chicken_walking');
    this.animationComponent.on('finished', this.playWalkingAnimation, this);
  },

  // Chicken.js
  // Chicken.js
  onBeginContact(contact, selfCollider, otherCollider) {
    let selfNode = selfCollider.node;
    let otherNode = otherCollider.node;

    if (selfNode.name === 'Chicken' && otherNode.name === 'Car') {
      let selfRigidBody = selfCollider.getComponent(cc.RigidBody);
      let otherRigidBody = otherCollider.getComponent(cc.RigidBody);

      if (selfRigidBody && otherRigidBody) {
        let selfPosition = selfNode.position;
        let otherPosition = otherNode.position;
        let distance = selfPosition.sub(otherPosition).mag(); // Tính khoảng cách giữa con gà và xe

        if (distance < 50) {
          // Kiểm tra nếu khoảng cách nhỏ hơn một ngưỡng nào đó
          let otherVelocity = otherRigidBody.linearVelocity;
          let impulse = otherVelocity.clone().normalize().mul(1000); // Điều chỉnh giá trị lực áp dụng lên con gà
          selfRigidBody.applyLinearImpulse(
            impulse,
            selfRigidBody.getWorldCenter(),
            true
          );
        }
      }
    }
  },
  onEndContact() {
    cc.log('onEndContact');
  },

  enablePhysics() {
    let physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;

    // Bắt sự kiện va chạm
    physicsManager.enabledDebugDraw = true;
    this.node.on('begin-contact', this.onBeginContact, this);
  },
});
