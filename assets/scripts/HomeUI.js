cc.Class({
    extends: cc.Component,

    properties: {
        menuAnim: {
            default: null,
            type: cc.Animation
        },
        counter: cc.Label
    },

    // use this for initialization
    init: function (game) {
        this.game = game;
        this.menuAnim.play('menu_reset');
        this.playerWinCount = 0;
        this.monsterWinCount = 0;
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

    onMenuHide: function () {
        this.game.ready();
    },
    
    restart: function () {
        this.menuAnim.play('menu_intro');
    },
    
    updateCounter(isPlayerWin) {
        if (isPlayerWin) {
            this.playerWinCount++;
        } else {
            this.monsterWinCount++;
        }
        this.counter.string = this.playerWinCount + ' : ' + this.monsterWinCount;
    }
});
