Crafty.c('Bonus', {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("repa");
    this.requires("bonus");
    this.requires("SpriteAnimation");

    this.attr({x: 0, y: 0});
    this.animate("wind", 0, 0, 0);

    this.bind("EnterFrame", function() {
      if(!this.isPlaying());
        this.animate("wind", 80);
    });
  },

  clear: function() {
    this.removeComponent('repa');
    this.removeComponent('bonus');
    this._visible = false;
  }
});