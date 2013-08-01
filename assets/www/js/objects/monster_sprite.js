Crafty.c('MonsterSprite', {
    init: function() {
        this.requires("Monster");
        this.requires("monster");

        this.animate("walk_left", 0, 2, 1);
        this.animate("walk_right", 0, 1, 1);
        this.animate("walk_up", 0, 0, 1);
        this.animate("walk_down", 0, 3, 1);
        
        this.bind("Moved", function(e) {
            if(this.x > e.x) {
                if(!this.isPlaying("walk_left")) {
                    this.stop().animate("walk_left", 8, -1);
                }
            }
            if(this.x < e.x) {
                if(!this.isPlaying("walk_right")) {
                    this.stop().animate("walk_right", 8, -1);
                }
            }
            if(this.y > e.y) {
                if(!this.isPlaying("walk_up")) {
                    this.stop().animate("walk_up", 8, -1);
                }
            }
            if(this.y < e.y) {
                if(!this.isPlaying("walk_down")) {
                    this.stop().animate("walk_down", 8, -1);
                }
            }
        });

    },

    clear: function() {
        this.removeComponent('monster');
        this.removeComponent('Monster');
        this.removeComponent('MonsterSprite');
        this._visible = false;
        this.destroy();
    }
});