"use strict";
cc._RF.push(module, '0f084dy6TFCUL6uqbVWLguU', 'Car');
// scripts/Car.js

// cc.Class({
//   extends: cc.Component,

//   properties: {
//     speed: 500,
//     isMoving: true,
//   },

//   onLoad() {
//     this.enablePhysics();

//     this.playWalkingAnimation(); // Bắt đầu animation khi load scene
//   },
//   start() {
//     console.log(this.speed);
//   },

//   update(dt) {
//     if (this.isMoving) {
//       this.moveCharacterX(dt);
//     }
//   },

//   moveCharacterX(dt) {
//     this.node.x -= dt * this.speed;
//   },

//   onBeginContact(contact, selfCollider, otherCollider) {
//     let selfRigidBody = selfCollider.getComponent(cc.RigidBody);
//     let otherRigidBody = otherCollider.getComponent(cc.RigidBody);

//     if (selfRigidBody && otherRigidBody) {
//       let selfVelocity = selfRigidBody.linearVelocity;
//       let otherVelocity = otherRigidBody.linearVelocity;

//       let impulse = selfVelocity.clone().normalize().mul(100000); // Điều chỉnh lực văng ra
//       selfRigidBody.applyLinearImpulse(
//         impulse,
//         selfRigidBody.getWorldCenter(),
//         true
//       );

//       impulse = otherVelocity.clone().normalize().mul(1000);
//       otherRigidBody.applyLinearImpulse(
//         impulse,
//         otherRigidBody.getWorldCenter(),
//         true
//       );
//     }
//   },

//   enablePhysics() {
//     let physicsManager = cc.director.getPhysicsManager();
//     physicsManager.enabled = true;

//     // Bắt sự kiện va chạm
//     physicsManager.enabledDebugDraw = true;
//     this.node.on('begin-contact', this.onBeginContact, this);
//   },
// });
"use strict";

cc._RF.pop();