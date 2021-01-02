Crafty.c('Track', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("PlayerSprite");
        this.requires("track");
        this.requires("Collision");

        this.fourway(Settings.speed);
        this.bind("Moved", function(e) {
             Game.sounds.track.play();
        });

        track = this;
        this.bind('Move', function(evt) {
            Crafty("TrackTarget").each(function(i) {
                if (this.isAt(track.x, track.y)) {
                    console.log('Hits with TrackTarget ')
                    this.onHitCustom(track)
                }
            })
        });
    },

    clean: function() {
        this.removeComponent('Track');
        this.destroy();
    }
});
