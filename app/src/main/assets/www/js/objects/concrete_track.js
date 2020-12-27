Crafty.c('ConcreteTrack', {
    init: function() {
        this.requires("Unit"); // подключаем компонент юнита
        this.requires("Fourway"); // подключаем компонент движения
        this.requires("FourwayTouch"); // подключаем компонент движения
        this.requires("PlayerSprite");
        this.requires("concrete_track");
        this.requires("Collision");

        this.fourway(Settings.speed);

        track = this;
        this.bind('Move', function(evt) {
            Crafty("ConcreteTrackTarget").each(function(i) {
                if (this.isAt(track.x, track.y)) {
                    console.log('Hits with ConcreteTrackTarget ')
                    this.onHitCustom(track)
                }
            })
        });
    },

    clean: function() {
        this.removeComponent('ConcreteTrack');
        this.destroy();
    }
});
