Crafty.c('PlayerSprite', {
    init: function() {
        this.requires("digger");
        this.requires("SpriteAnimation");

        this.animate("walk_left", 0, 0, 0);
        this.animate("walk_right", 2, 0, 2);
        this.animate("walk_up", 1, 0, 1);
        this.animate("walk_down", 3, 0, 3);
        
        this.bind("Moved", function(e) {
            if(this.x > e.x) {
                if(!this.isPlaying("walk_left")) {
                    this.stop().animate("walk_left", 10);
                }
            }
            if(this.x < e.x) {
                if(!this.isPlaying("walk_right")) {
                    this.stop().animate("walk_right", 10);
                }
            }
            if(this.y > e.y) {
                if(!this.isPlaying("walk_up")) {
                    this.stop().animate("walk_up", 10);
                }
            }
            if(this.y < e.y) {
                if(!this.isPlaying("walk_down")) {
                    this.stop().animate("walk_down", 10);
                }
            }
        });
    },
    clear: function() {
        this.removeComponent('digger');
        this.removeComponent('PlayerSprite');
        this.destroy();
    }
});