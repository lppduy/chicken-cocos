cc.Class({
  extends: cc.Component,

  properties: {
    countdownLabel: cc.Label, // Label cho đếm ngược
  },

  start() {
    this.scheduleOnce(() => {
      this.startCountdown();
    }, 5.8);
  },

  startCountdown() {
    let count = 3;
    this.schedule(
      () => {
        if (count > 0) {
          this.countdownLabel.string = count.toString();
          count--;
        } else {
          this.countdownLabel.string = 'GO!';
          this.countdownLabel.node.scale = 2;
          this.unscheduleAllCallbacks();
          // Sau khi đếm ngược kết thúc, bạn có thể thực hiện hành động tiếp theo ở đây
        }
      },
      1,
      4
    ); // Gọi hàm mỗi giây, tổng cộng 4 lần
  },
});
