Crafty.c('Stone', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("house");
        this.requires("hard_stone");
        this.requires("hard_object");
        this.requires("SpriteAnimation");

        num = Crafty.math.randomInt(0, 7)
        console.log('Crafty random: ' +  num)
        this.animate("first", num, 0, num);
        this.animate("first", 1);        
    },
        
    isCanMoveTo: function(x, y) {
        var isCollision = false;
        Crafty("hard_object").each(function(i) {
            if (this.isAt(x, y))
                isCollision = true
        });

        return !isCollision
    },
    update: function() {
        this.animate("first", 1);
    }
});
