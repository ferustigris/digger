Crafty.c('Cross', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("cross");

        this.attr({x: 0, y: 0});
    },

    clear: function() {
        this.removeComponent('cross');
        this._visible = false;
    }
});