Crafty.c('Cargo1', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("cargo1");
        this.requires("hard_object");
        this.requires("hard_stone");
        this.requires("Tween");

        this.attr({x: 0, y: 0, z: 2});

    },
        
    isCanMoveTo: function(x, y) {
        var isCollision = false;
        Crafty("hard_object").each(function(i) {
            if (this.isAt(x, y))
                isCollision = true
        });

        return !isCollision
    },

    clear: function() {
        this.removeComponent('Player');
        this.destroy();
    }
});
