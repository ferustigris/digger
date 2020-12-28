Crafty.c('Scope', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");

        this.attr({x: 0, y: 0, z: 1, scope: Settings.scope});

        this.text = Crafty.e("2D, DOM, Text")
            .attr({w: this.w, h: this.h, x: this.x, y: this.y})
            .textFont({ size: '24px'})
            .text("x" + this.scope)
            .textColor('#FFFFFF', 1)
            .css({"text-align": "left"});

    },

    update:function (newScope) {
        this.scope = newScope;
        this.text.text(this.getString());
    },

    clear: function() {
        this.removeComponent('Scope');
        this.destroy();
    },

    getString: function() {
        return "x" + Math.round(this.scope);
    }

});