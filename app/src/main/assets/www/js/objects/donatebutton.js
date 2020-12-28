Crafty.c('ResetButton', {
    init: function() {
        this.requires("2D");
        this.requires("DOM");
        this.requires("Mouse");
        this.requires("donate");

        this.bind("Click", function(){
            console.log("donate on click");
            this.Click()
        });
    },
    Click: function() {
        console.log("OnDonate");
        Crafty.scene("lose");
    },

    clean: function () {
        this.destroy();
    }
});