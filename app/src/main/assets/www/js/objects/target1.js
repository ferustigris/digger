Crafty.c('Target1', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("target1");
        this.requires("SpriteAnimation");
        this.requires("Collision");

        var num = 0;//Crafty.math.randomInt(0, 7)
        this.animate("first", num, 0, num);
        this.animate("first", 1);        

        this.onHit("Player", function(e) {
            //FIXME: doesn't work
            console.log("Target1&Player");
            var object = e[0].obj;
            object.clear();

            Settings.scope /= 2;
            Game.lose()
        });    

        this.onHit("Cargo1", function(e) {
            var object = e[0].obj;
            object.clear();

            Settings.scope += 50;
            Crafty.e("Target1Completed").attr({x: this.x, y: this.y, w: this.w, h: this.h});
            this.clean();

            Game.win();
        });
    },

    clean: function() {
        this.removeComponent('Target1');
        this.destroy();
    }
});