Crafty.c('Sand', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("sand");
    },

    clear: function() {
        this.removeComponent('sand');
        this._visible = false;
    }
});