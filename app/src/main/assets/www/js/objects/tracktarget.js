Crafty.c('TrackTarget', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("tracktarget");
        this.requires("SpriteAnimation");
        this.requires("Collision");

        this.animate("walk_left", 0, 0, 0);
        this.animate("walk_left", 1);
        this.bind("Moved", function(e) {
             Game.sounds.track.play();
        });

        this.onHit("Track", function(e) {
            //FIXME: doesn't work
            console.log("TrackTarget&Track");
            var object = e[0].obj;
        });
    },
    onHitCustom: function(track) {
        console.log("onHitCustom Track & target");
        Settings.scope += 50;
        Crafty.e("TrackTargetCompleted").attr({x: this.x, y: this.y, w: this.w, h: this.h});
        Crafty.e("TrackFull").attr({x: this.x, y: this.y, w: this.w, h: this.h});
        Game.sounds.trackfull_go2target.play()
        this.clean();
        track.clean();
    },

    clean: function() {
        this.removeComponent('TrackTarget');
        this.destroy();
    }
});