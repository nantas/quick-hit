cc.Class({
    extends: cc.Component,
    
    properties: {
        txtTitle: '',
        txtWin: '',
        txtLose: ''  
    },
    
    // use this for initialization
    showWin: function () {
        this.node.active = true;
        this.getComponent(cc.Label).string = this.txtWin;
    },
    
    showLose: function () {
        this.node.active = true;
        this.getComponent(cc.Label).string = this.txtLose;
    },
    
    showTitle: function () {
        this.node.active = true;
        this.getComponent(cc.Label).string = this.txtTitle;
    },
    
    hide: function () {
        this.node.active = false;
    }
});
