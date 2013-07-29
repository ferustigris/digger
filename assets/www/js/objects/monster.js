Crafty.c('Monster', {
    init: function() {
        this.requires("Unit");
        this.requires("FourwayAI");
        this.requires("Collision"); // компонент столкновения

        this.collision(); // подключаем компонент столкновения

        this.attr({x: 0, y: 0, z: 1});

        // отрабатывем событие столкновения с камнем
        this.onHit("hard_object", function(e) {
            var object = e[0].obj;
            this.stopOnHit(object);
        });

        this.fourway_ai(3);//Settings.speed);
        
        this.bind("onDue", function() {
            Settings.scope += 100;
            Game.scopeView.update(Settings.scope);
            console.log("scope=" + Settings.scope);
            this.clean();
            if (Settings.sound)
                Crafty.audio.play("chick");
        })
    }
});