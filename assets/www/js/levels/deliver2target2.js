Crafty.c('Deliver2Target2', {
    init: function() {
        this.attr({x: 0, y: 0, z: 1});
    },
    addPersonages: function(mainScene) {

        Crafty.e("Player").attr(mainScene.get_position(0, 0));
        Crafty.e("Target1").attr(mainScene.get_random_position());

        for(var i = 0; i < mainScene.cellsCount/5; i++) {
            Crafty.e("Ground").attr(mainScene.get_random_position())
        }
        for(var i = 0; i < mainScene.cellsCount/10; i++) {
            Crafty.e("Stone").attr(mainScene.get_random_position())
        }

        Crafty.e("Cargo1").attr(mainScene.get_random_position());
        Game.sounds.deliver2target2.play();
    },
    clean: function () {
        this.removeComponent('Deliver2Target2');
        this.destroy();
    }
});
