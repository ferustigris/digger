Crafty.c('Player', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("PlayerSprite");

        this.attr({x: 0, y: 0, w: 100, h: 100});

        this.fourway(Settings.speed);
        
        var player = this;
        this.isCanMoveTo = function(x, y) {
            var isCollision = false;
            Crafty("hard_stone").each(function(i) {
                if (this.isAt(x, y)) {
                    var dx = x - player.x - player.w/2;
                    var dy = y - player.y - player.h/2;
                    var newX = this.x + dx;
                    var newY = this.y + dy;
                    if (this.isCanMoveTo(newX + this.w/2, newY + this.h/2)) {
                        this.tween({x: newX, y: newY}, 30);
                    } else {
                        isCollision = true;
                    }
                }
            });
    
            return !isCollision && !player.isUnitOutOfRange(x, y);
        };


        this.onHit("bag", function(e) {
            var object = e[0].obj;
            object.clear();

            Settings.scope += 50;
            Game.scopeView.update(Settings.scope);
            console.log("scope=" + Settings.scope);
            
            if (Settings.sound)
                Game.sounds.money.play();

            if ((Settings.flower_count -= 1) == 0) {
                setTimeout(function() {
                    Crafty.scene("win");
                }, 500);
            }
        });

        this.onHit("bonus", function(e) {
            var object = e[0].obj;
            object.clear();

            Settings.scope *= 2;
            Game.scopeView.update(Settings.scope);
            console.log("scope=" + Settings.scope);
            if (Settings.sound)
                Game.sounds.money.play();
        });

        this.onHit("hard_monster", function(e) {
            console.log("hit with Monster!");
            if (Settings.sound)
                Game.sounds.namnam.play();
            player.clear();
            setTimeout(function() {
                Crafty.scene("lose");
            }, 500);
        });

        this.onHit("hard_ground", function(e) {
            console.log("hit with ground");
            var object = e[0].obj;
            object.clear();
        });

        this.bind("onDue", function () {
            player.clean();
            setTimeout(function() {
                Crafty.scene("lose");
            }, 1500);
        });

    },

    clear: function() {
        this.removeComponent('Player');
        this.destroy();
    }
});
