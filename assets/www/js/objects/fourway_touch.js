Crafty.c('FourwayTouch', {
    init: function() {
        this.requires("2D");
        this.requires("Tween");
        var object = this;
        Crafty.e("2D, DOM, Color, Mouse")
            .attr({ w: 10000, h: 10000 })
            .bind('MouseDown', function(e) {
                var dx = e.x - object.x - object.w/2;
                var dy = e.y - object.y - object.h/2;
                if (Math.abs(dx) > Math.abs(dy)) {
                    dx = object.x + object.w*(dx/Math.abs(dx));
                    dy = object.y;
                } else {
                    dx = object.x + 0;
                    dy = object.y + object.h*(dy/Math.abs(dy));
                }
                object.tween({x: dx, y: dy}, 30)
            })
    },
});