Crafty.c('Player', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("digger"); // подключаем спрайт игрока
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("Mouse");
        this.requires("Collision"); // компонент столкновения

        this.collision(); // подключаем компонент столкновения

        this.attr({x: 0, y: 0, z: 1, w: 100, h: 100});

        this.animate("walk_left", 0, 0, 0);
        this.animate("walk_right", 2, 0, 2);
        this.animate("walk_up", 1, 0, 1);
        this.animate("walk_down", 3, 0, 3);

        this.fourway(Settings.speed);
        this.fourwayTouch(Settings.speed);

        this.onHit("bag", function(e) {
            var object = e[0].obj;
            object.clear();

            Settings.scope += 50;
            Game.scopeView.update(Settings.scope);
            console.log("scope=" + Settings.scope);

            if ((Settings.flower_count -= 1) == 0) {
                setTimeout(function() {
                    Crafty.scene("win");
                }, 500);
            }
        });

        this.onHit("monster", function(e) {
            var object = e[0].obj;
            object.clear();
            Crafty.scene("lose");
        });

        this.onHit("hard_ground", function(e) {
            var object = e[0].obj;
            object.clear();
        });

        var player = this;
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
        this.removeComponent('digger');
        this.removeComponent('Player');
        this.destroy();
    }
});