Crafty.c('Go2Target', {
    init: function() {
        this.attr({x: 0, y: 0, z: 1});
    },
    addPersonages: function(mainScene) {
        debug("Go2Target - add personages to levels")
        Crafty.e("Track").attr(mainScene.get_position(0, 0)).attr({'level': this});
        Crafty.e("TrackFullTarget").attr(mainScene.get_random_position());
        Crafty.e("TrackTarget").attr(mainScene.get_random_position());

        debug("Go2Target - add personages to levels")
        for(var i = 0; i < mainScene.cellsCount/10; i += 2) {
            Crafty.e("Ground").attr(mainScene.get_random_position())
            Crafty.e("Stone").attr(mainScene.get_random_position())
        }
        debug("Go2Target - play")
        Game.sounds.track_go2target.play()
    },
    clean: function () {
        this.removeComponent('Go2Target');
        this.destroy();
    }
});
