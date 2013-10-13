Crafty.c('Unit', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("Collision"); // компонент столкновения

        this.attr({x: 0, y: 0, z: 1});

        this.collision(); // подключаем компонент столкновения

        this.onHit("hard_stone", function(e) {
            var stone = e[0].obj;
            if (stone._falling) {
		    if (Settings.sound)
		        Game.sounds.hit.play()
                this.trigger('onDue');
                Crafty.e("Cross").attr({x: this.x, y: this.y});
                this.clean();
            }
        });
    },
    
    isCanMoveTo: function(x, y) {
        var isCollision = false;
        Crafty("hard_object").each(function(i) {
            if (this.isAt(x, y))
                isCollision = true
        });

        return !isCollision && !this.isUnitOutOfRange(x, y)
    },

    isUnitOutOfRange: function(x, y) {
            var maxX = Settings.width;
            if (x > maxX) {
                return true
            }
            var maxY = Settings.height;
            if (y > maxY) {
                return true
            }
            if (x < 0) {
                return true
            }
            if (y < 0) {
                return true
            }
            return false
    },

    clean: function () {
        this.removeComponent('Unit');
        this.destroy();
    }
});
