Crafty.c('Monster', {
    init: function() {
        this.requires("Unit");
        this.requires("FourwayAI");

        this.attr({x: 0, y: 0, z: 1});

        this.fourway_ai(Settings.speed);
        
        this.bind("onDue", function() {
            Settings.scope += 100;
            Game.scopeView.update(Settings.scope);
            console.log("scope=" + Settings.scope);
            this.clean();
        })

    }
});
