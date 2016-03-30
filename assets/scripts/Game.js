var Result = require('Result');

cc.Class({
    extends: cc.Component,

    properties: {
        homeUI: cc.Node,
        rankList: cc.Label,
        fightAnim: cc.Animation,
        powerBar: cc.Animation,
        btnAtk: cc.Node,
        result: Result, 
        hitRange: 0,
        maxBarSpeed: 0,
        minBarSpeed: 0
    },

    onLoad: function () {
        this.homeUI = this.homeUI.getComponent('HomeUI');
        this.homeUI.init(this);
        if (this.result && this.result.showTitle) {
            this.result.showTitle();            
        }
        cc.loader.loadRes('data/ranklist.json', (err, data) => {
            if (err) {
                cc.log('no ranklist data.');
            } else {
                let text = '';
                for (let i = 0; i < data.length; ++i) {
                    let line = data[i].rank + '  ' + data[i].name + '  ' + data[i].score + '\n'; 
                    text += line;
                }
                this.rankList.string = text;
                // cc.log(JSON.stringify(data));
            }
        })
    },

    // use this for initialization
    ready: function () {
        if (this.result && this.result.node) {
            this.result.node.active = false;            
        }
        let indicator = this.powerBar.node.getChildByName('indicator').getComponent(cc.Widget);
        let progressBar = this.powerBar.getComponent(cc.ProgressBar);
        indicator.left = progressBar.node.width - indicator.right - progressBar.totalLength * this.hitRange;
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
        if (this.result && this.result.showLose) {
            this.result.showLose();            
        }
        cc.log('game over');
        this.btnAtk.scale = 0;
        this.homeUI.updateCounter(false);
        this.homeUI.restart();
    },

    win: function () {
        if (this.result && this.result.showWin) {
            this.result.showWin();           
        }
        cc.log('you win');
        this.btnAtk.scale = 0;
        this.homeUI.updateCounter(true);
        this.homeUI.restart();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
