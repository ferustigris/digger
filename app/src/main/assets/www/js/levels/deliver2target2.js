Crafty.c('Deliver2Target2', {
    init: function() {
        this.attr({x: 0, y: 0, z: 1});
    },
    addPersonages: function(mainScene) {

        Crafty.e("Player").attr(mainScene.get_position(0, 0)).attr({'level': this});
        Crafty.e("Target1").attr(mainScene.get_random_position());

        for(var i = 0; i < mainScene.cellsCount/10; i+=2) {
            Crafty.e("Ground").attr(mainScene.get_random_position())
            Crafty.e("Stone").attr(mainScene.get_random_position())
        }

        Crafty.e("Cargo1").attr(mainScene.get_random_position_inside());
        Game.sounds.deliver2target2.play()
    },
    clean: function () {
        this.removeComponent('Deliver2Target2');
        this.destroy();
    }
});
