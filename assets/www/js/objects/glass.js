Crafty.c('Glass', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("glass");

        this.attr({x: 0, y: 0});
    },

    clear: function() {
        this.removeComponent('glass');
        this._visible = false;
    }
});