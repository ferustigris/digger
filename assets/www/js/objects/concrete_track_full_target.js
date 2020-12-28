Crafty.c('ConcreteTrackFullTarget', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("trackfulltargetcompleted");
        this.requires("SpriteAnimation");
        this.requires("Collision");

        var num = 0;//Crafty.math.randomInt(0, 7)
        this.animate("first", num, 0, num);
        this.animate("first", 1);        

        this.onHit("Track", function(e) {
            //FIXME: doesn't work
            console.log("TrackTarget&Track");
            var object = e[0].obj;
        });
    },
    onHitCustom: function(track) {
        console.log("onHitCustom Track & target");
        Settings.scope += 50;
        Crafty.e("ConcreteTrackFullTargetCompleted").attr({x: this.x, y: this.y, w: this.w, h: this.h});
        this.clean();
        track.clean();
        Game.win()
    },

    clean: function() {
        this.removeComponent('ConcreteTrackFullTarget');
        this.destroy();
    }
});