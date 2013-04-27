Crafty.c('Stone', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("Gravity");
        this.requires("granit" + Crafty.math.randomInt(1,2));
        this.requires("hard_stone");
        this.requires("hard_object");
        this.requires("Collision"); // компонент столкновения

        this.gravity("hard_object");
        this.attr({x: 0, y: 0, z: 2, w: Settings.poligon, h: Settings.poligon});

        var stone = this;
        hitWithObject = function(e) {
            var object = e[0].obj;

            if (object.x < stone.x) {
                stone.x = object.x + object.w;
            }
            if (object.x > stone.x) {
                stone.x = object.x - stone.w;
            }
        };
        this.onHit("hard_object", hitWithObject);
        this.bind("EnterFrame", function() {
            this.checkUnitOutOfRange();
        });

    },
    checkUnitOutOfRange: function() {
        var maxX = Settings.width - this.w;
        if (this.x > maxX) {
            this.x = maxX;
        }
        var maxY = Settings.height - this.h;
        if (this.y > maxY) {
            this.y = maxY;
        }
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }
});