Crafty.c('FourwayTouch', {
    _speed: 3,
    _interval: null,

    init: function() {
        this._movement= { x: 0, y: 0};
        this._pos= { x: 0, y: 0};

        var object = this;
        Crafty.e("2D, DOM, Color, Mouse")
            .attr({ w: 10000, h: 10000 })
            .bind('MouseDown', function(e) {
                console.log("down x=" + e.x + ", y=" + e.y);
                var dx = e.x - object.x - object.w/2;
                var dy = e.y - object.y - object.h/2;
                var hDirection = Math.abs(dx) > Math.abs(dy);
                object._pos = e;
                object._movement.x = hDirection ? dx/Math.abs(dx) : 0;
                object._movement.y = hDirection ? 0 : dy/Math.abs(dy);
                console.log("move to x=" + object._movement.x + ", y=" + object._movement.y);
            })
            .bind('MouseUp', function(e) {
                object._movement.x = 0;
                object._movement.y = 0;
                console.log("move to x=" + object._movement.x + ", y=" + object._movement.y);
            });

        this.bind("EnterFrame", function() {
            if (this.disableControls) return;

            if(this._movement.x !== 0) {
                this.x += this._movement.x;
                this.trigger('Moved', {x: this.x - this._movement.x, y: this.y});
            }
            if(this._movement.y !== 0) {
                this.y += this._movement.y;
                this.trigger('Moved', {x: this.x, y: this.y - this._movement.y});
            }
        });
    },

    fourwayTouch: function(speed) {
        this._speed = speed;

        this.make_step();

        var kclass = this;
        this._interval = setInterval(function() {
            kclass.make_step();
        }, 1000 * this._speed);
    },

    make_step: function() {
        this.trigger('NewDirection', this._movement);
    }
});