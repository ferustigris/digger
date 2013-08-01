Crafty.c('Stone', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("Gravity");
        this.requires("granit" + Crafty.math.randomInt(1,2));
        this.requires("hard_stone");
        this.requires("hard_object");
        this.requires("Tween");

        this.gravity("hard_object");
        this.attr({x: 0, y: 0, z: 2, w: Settings.poligon, h: Settings.poligon});

    },
        
    isCanMoveTo: function(x, y) {
        var isCollision = false;
        Crafty("hard_object").each(function(i) {
            if (this.isAt(x, y))
                isCollision = true
        });

        return !isCollision
    }
});
