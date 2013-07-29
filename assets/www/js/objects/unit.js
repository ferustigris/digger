Crafty.c('Unit', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("SpriteAnimation");
        this.requires("Collision"); // компонент столкновения

        this.attr({x: 0, y: 0, z: 1});

        this.collision(); // подключаем компонент столкновения

        // отрабатывем событие столкновения с камнем
        this.onHit("hard_stone", function(e) {
            var object = e[0].obj;
            this.stopOnHit(object);
        });

        // анимация движения, сами указатели на спрайты
        // находятся в дочерних компонентах

        this.bind("Moved", function(e) {
            console.log('moved! x=' + this.x + ', y=' + this.y + ', e.x=' + e.x + ', e.y=' + e.y)
            if(this.x > e.x) {
                if(!this.isPlaying("walk_left")) {
                    this.stop().animate("walk_left", 10);
                }
            }
            if(this.x < e.x) {
                if(!this.isPlaying("walk_right")) {
                    this.stop().animate("walk_right", 10);
                }
            }
            if(this.y > e.y) {
                if(!this.isPlaying("walk_up")) {
                    this.stop().animate("walk_up", 10);
                }
            }
            if(this.y < e.y) {
                if(!this.isPlaying("walk_down")) {
                    this.stop().animate("walk_down", 10);
                }
            }
            this.checkUnitOutOfRange();
        });

        this.onHit("hard_stone", function(e) {
            var stone = e[0].obj;
            console.log("On hit with stone");
            if (stone._falling) {
                this.trigger('onDue');
                Crafty.e("Cross").attr({x: this.x, y: this.y});
                this.clean();
            }
        });
    },

    checkUnitOutOfRange: function() {
            var maxX = Settings.width - Settings.poligon;
            if (this.x > maxX) {
                this.x = maxX;
            }
            var maxY = Settings.height - Settings.poligon;
            if (this.y > maxY) {
                this.y = maxY;
            }
            if (this.x < 0) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = 0;
            }
    },

    stopOnHit: function(object) {
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