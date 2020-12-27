Crafty.c('ConcreteTrackFull', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("PlayerSprite");
        this.requires("concrete_track_full");
        this.requires("Collision");

        this.fourway(Settings.speed/2);

        track = this;
        this.bind('Move', function(evt) {
            Crafty("ConcreteTrackFullTarget").each(function(i) {
                if (this.isAt(track.x, track.y)) {
                    console.log('Hits with TrackFullTarget')
                    this.onHitCustom(track)
                }
            })
        });
    },

    clean: function() {
        this.removeComponent('ConcreteTrackFull');
        this.destroy();
    }
});
