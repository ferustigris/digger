Crafty.c('SoundButtonOn', {
    init: function() {
        this.requires("2D");
        this.requires("DOM");
        this.requires("soundoff");
        this.requires("Mouse");
        this.bind("Click", function(){
            console.log("OnClick");
            this.Click()
        });
    },
    Click: function() {
        Sound().soundSwitch()
        Settings.sound = true
        console.log("Sound off");
        Crafty.e("SoundButtonOff").attr({x: this.x, y: this.y, w: this.w, h: this.h});
        this.clean();
    },

    clean: function () {
        this.removeComponent('SoundButtonOn');
        this.destroy();
    }

});