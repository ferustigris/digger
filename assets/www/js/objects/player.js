Crafty.c('Player', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("Collision"); // компонент столкновения

        this.collision(); // подключаем компонент столкновения

        this.attr({x: 0, y: 0, z: 1, w: 100, h: 100});

        this.fourway(Settings.speed);

        this.onHit("bag", function(e) {
            var object = e[0].obj;
            object.clear();

            Settings.scope += 50;
            Game.scopeView.update(Settings.scope);
            console.log("scope=" + Settings.scope);
            
            if (Settings.sound)
                Crafty.audio.play("money");

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
                Crafty.audio.play("namnam");
        });

        var player = this;
        this.onHit("monster", function(e) {
            player.clear(); 
            if (Settings.sound)
                Crafty.audio.play("namnam");
            
            setTimeout(function() {
                Crafty.scene("lose");
            }, 500);
        });

        this.onHit("hard_ground", function(e) {
            console.log("hit with ground");
            var object = e[0].obj;
            object.clear();
        });

        this.onHit("hard_stone", function(e) {
            console.log("hit with stone");
            var stone = e[0].obj;
            if (this.isPlaying("walk_right") && player.x < stone.x) {
                stone.x = player.x + Settings.poligon;
            }
            if (this.isPlaying("walk_left") && player.x > stone.x) {
                stone.x = player.x - stone.w;
            }
        });

        this.bind("onDue", function () {
            this.clean();
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