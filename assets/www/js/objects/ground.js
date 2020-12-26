Crafty.c('Ground', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("ground");
        this.requires("hard_ground");
        this.requires("hard_object");
        this.requires("SpriteAnimation");

        num = Crafty.math.randomInt(0, 7)
        console.log('Crafty random: ' +  num)
        this.animate("first", num, 0, num);
        this.attr({x: 0, y: 0, z: 2, w: Settings.poligon, h: Settings.poligon});
        this.animate("first", 1);        

        this.attr({x: 0, y: 0});
    },

    clear: function() {
        this.removeComponent('hard_object');
        this.removeComponent('hard_ground');
        this.removeComponent('ground');
        this.removeComponent('Ground');
        this._visible = false;
        this.destroy();
    }
});