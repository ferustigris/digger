Crafty.c('Cross', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("cross");
    },

    clear: function() {
        this.removeComponent('cross');
        this._visible = false;
    }
});