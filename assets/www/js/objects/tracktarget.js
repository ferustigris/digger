Crafty.c('TrackTarget', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("tracktarget");
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
        Crafty.e("TrackTargetCompleted").attr({x: this.x, y: this.y});
        Crafty.e("TrackFull").attr({x: this.x, y: this.y});
        Game.sounds.trackfull_go2target.play()
        this.clean();
        track.clean();
    },

    clean: function() {
        this.removeComponent('TrackTarget');
        this.destroy();
    }
});