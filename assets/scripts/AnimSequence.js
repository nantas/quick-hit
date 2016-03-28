cc.Class({
    extends: cc.Component,

    properties: {
        counterFinishEvent: cc.Component.EventHandler,
        hitFinishEvent: cc.Component.EventHandler
    },

    // use this for initialization
    missFinish: function () {
        this.getComponent(cc.Animation).play('attack_counter');
    },

    counterFinish: function () {
        cc.Component.EventHandler.emitEvents([this.counterFinishEvent]);
    },

    hitFinish: function () {
        cc.Component.EventHandler.emitEvents([this.hitFinishEvent]);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
