Crafty.c('FourwayAI', {
    init: function() {
        this.requires("2D");
        this.requires("Tween");
    },

    fourway_ai: function(speed) {

        var kclass = this;
        this._interval = setInterval(function() {
            kclass.make_step();
        }, 1000 * speed);
    },

    make_step: function() {
        var step = Crafty.math.randomInt(-1,1);
        var stepDirection = Crafty.math.randomInt(0,1)
        var dx = stepDirection ? 0 : step;
        var dy = stepDirection ? step : 0;

        dx = this.x + this.w*dx;
        dy = this.y + this.h*dy;
        
        if (this.isCanMoveTo(dx + this.w/2, dy + this.h/2)) {
            this.trigger('Moved', {x: dx, y: dy})
            this.tween({x: dx, y: dy}, 50)
        }
    }
});