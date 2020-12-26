Crafty.c('Sand', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("sand");

        this.attr({x: 0, y: 0});
    },

    clear: function() {
        this.removeComponent('sand');
        this._visible = false;
    }
});