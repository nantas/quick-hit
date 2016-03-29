cc.Class({
    extends: cc.Component,

    properties: {
        menuAnim: {
            default: null,
            type: cc.Animation
        }
    },

    // use this for initialization
    init: function (game) {
        this.game = game;
        this.menuAnim.play('menu_reset');
    },

    start: function () {
        this.scheduleOnce ( function() {
            this.menuAnim.play('menu_intro');
        }.bind(this), 0.5);
    },

    gotoPlay: function () {
        this.game.fightAnim.play('idle');
        this.menuAnim.play('menu_back');
    },

    gameReady: function () {
        this.game.ready();
    },
    
    restart: function () {
        this.menuAnim.play('menu_intro');
    }
});
