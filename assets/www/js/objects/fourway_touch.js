Crafty.c('FourwayTouch', {
    init: function() {
        this.requires("2D")
        this.requires("Tween")
        
        this.inMotion = false
        
        var object = this
        Crafty.e("2D, DOM, Color, Mouse")
            .attr({ w: 10000, h: 10000 })
            .bind('MouseDown', function(e) {
                if (object.inMotion)
                    return
                    
                var dx = e.x - object.x - object.w/2;
                var dy = e.y - object.y - object.h/2;
                
                if (Math.abs(dx) > Math.abs(dy)) {
                    dx = object.x + object.w*(dx/Math.abs(dx));
                    dy = object.y;
                } else {
                    dx = object.x + 0;
                    dy = object.y + object.h*(dy/Math.abs(dy));
                }
                
                if (object.isCanMoveTo(dx + object.w/2, dy + object.h/2)) {
                    object.trigger('Moved', {x: dx, y: dy})
                    object.tween({x: dx, y: dy}, 30)
                    object.inMotion = true
                    if (Settings.sound)
                        Game.sounds.tractor.play();
                }
            })
        this.bind("TweenEnd", function() {
            object.inMotion = false    
        })
    },
});
