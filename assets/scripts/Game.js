cc.Class({
    extends: cc.Component,

    properties: {
        homeUI: cc.Node,
        fightAnim: cc.Animation,
        powerBar: cc.Animation,
        hitRange: 0,
        maxBarSpeed: 0,
        minBarSpeed: 0
    },

    onLoad: function () {
        this.homeUI = this.homeUI.getComponent('HomeUI');
        this.homeUI.init(this);
    },

    // use this for initialization
    ready: function () {
        this.fightAnim.play('idle');
        let clip = this.powerBar.getAnimationState('bar_rise').clip;
        clip.speed = this.minBarSpeed + cc.random0To1() * (this.maxBarSpeed - this.minBarSpeed);
        this.powerBar.play('bar_rise');
    },

    pressed: function () {
        this.powerBar.stop();
        let progress = this.powerBar.getComponent(cc.ProgressBar).progress;
        if (1 - progress <= this.hitRange) {
            this.fightAnim.play('attack_hit');
        } else {
            this.fightAnim.play('attack_miss');
        }
    },

    gameover: function () {
        cc.log('game over');
    },

    win: function () {
        cc.log('you win');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
