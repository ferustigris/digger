Crafty.c('ResetButton', {
    init: function() {
        this.requires("2D");
        this.requires("DOM");
        this.requires("Mouse");
        this.requires("restart");

        this.bind("Click", function(){
            console.log("Reset on click");
            this.Click()
        });
    },
    Click: function() {
        console.log("OnReset");
        Crafty.scene("lose");
    },

    clean: function () {
        this.destroy();
    }
});