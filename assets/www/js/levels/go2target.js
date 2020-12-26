Crafty.c('Go2Target', {
    init: function() {
        this.attr({x: 0, y: 0, z: 1});
    },
    addPersonages: function(mainScene,) {

        Crafty.e("Player").attr(mainScene.get_position(0, 0));
        // Crafty.e("Target").attr(mainScene.get_random_position());
        Crafty.e("Target").attr(mainScene.get_position(3, 3));

        for(var i = 0; i < mainScene.cellsCount/5; i++) {
            Crafty.e("Ground").attr(mainScene.get_random_position())
        }
        for(var i = 0; i < mainScene.cellsCount/10; i++) {
            Crafty.e("Stone").attr(mainScene.get_random_position())
        }

        if (Settings.level == 1) {
            Crafty.e("Cargo").attr(mainScene.get_position(1, 1));
        } else {
            Crafty.e("Cargo").attr(mainScene.get_random_position());
        } 
    },
    clean: function () {
        this.removeComponent('Go2Target');
        this.destroy();
    }
});
