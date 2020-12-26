Crafty.c('SoundButtonOff', {
    init: function() {
        this.requires("2D");
        this.requires("DOM");
        this.requires("soundon");
        this.requires("Mouse");
        this.attr({ w: 100, h: 100 })
        this.bind("Click", function(){
            console.log("OnClick");
            this.Click()
        });
    },
    Click: function() {
        console.log("Sound on");
        Sound().soundSwitch()
        Settings.sound = false
        Crafty.e("SoundButtonOn").attr({x: this.x, y: this.y});
        this.clean();
    },

    clean: function () {
        this.removeComponent('SoundButtonOff');
        this.destroy();
    }

});