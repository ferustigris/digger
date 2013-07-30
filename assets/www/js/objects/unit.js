Crafty.c('Unit', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("SpriteAnimation");
        this.requires("Collision"); // компонент столкновения

        this.attr({x: 0, y: 0, z: 1});

        this.collision(); // подключаем компонент столкновения

        this.onHit("hard_stone", function(e) {
            var stone = e[0].obj;
            if (stone._falling) {
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
            var maxX = Settings.width - Settings.poligon;
            if (x > maxX) {
                return true
            }
            var maxY = Settings.height - Settings.poligon;
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

    stopOnHit: function(object) {
        console.log('stopOnHit')
        
        if ((this.x + Settings.poligon) > object.x && (this.x + Settings.poligon/2) < object.x) {
            this.x = object.x - Settings.poligon;
        } else
        if (this.x < (object.x + object.w) && this.x > (object.x + object.w/2)) {
            this.x = object.x + object.w;
        }
        if (this.y < object.y + object.h && this.y > object.y + object.h/2) {
            this.y = object.y + object.h;
        } else
        if ((this.y + Settings.poligon) > object.y && (this.y + Settings.poligon/2) < object.y) {
            this.y = object.y - Settings.poligon;
        }
    },

    clean: function () {
        this.removeComponent('Unit');
        this.destroy();
    }
});