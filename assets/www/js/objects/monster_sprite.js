Crafty.c('MonsterSprite', {
    init: function() {
        this.requires("monster");
        this.requires("SpriteAnimation");

        this.animate("walk_left", 0, 2, 1);
        this.animate("walk_right", 0, 1, 1);
        this.animate("walk_up", 0, 0, 1);
        this.animate("walk_down", 0, 3, 1);
        
        var self = this;
        this.bind("Moved", function(e) {
            if(self.x > e.x) {
                if(!self.isPlaying("walk_left")) {
                    self.stop().animate("walk_left", 8, -1);
                };
            };
            if(self.x < e.x) {
                if(!self.isPlaying("walk_right")) {
                    self.stop().animate("walk_right", 8, -1);
                };
            };
            if(self.y > e.y) {
                if(!self.isPlaying("walk_up")) {
                    self.stop().animate("walk_up", 8, -1);
                };
            };
            if(self.y < e.y) {
                if(!self.isPlaying("walk_down")) {
                    self.stop().animate("walk_down", 8, -1);
                }
            }
        });

    },

    clear: function() {
        this.removeComponent('monster');
        this.removeComponent('MonsterSprite');
        this._visible = false;
        this.destroy();
    }
});