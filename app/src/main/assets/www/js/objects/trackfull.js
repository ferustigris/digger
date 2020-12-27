Crafty.c('TrackFull', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("PlayerSprite");
        this.requires("trackfull");
        this.requires("Collision");

        this.fourway(Settings.speed/2);

        track = this;
        this.bind('Move', function(evt) {
            Crafty("TrackFullTarget").each(function(i) {
                if (this.isAt(track.x, track.y)) {
                    console.log('Hits with TrackFullTarget')
                    this.onHitCustom(track)
                }
            })
        });
    },

    clean: function() {
        this.removeComponent('TrackFull');
        this.destroy();
    }
});
