Crafty.c('Flower', {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("bag");
    this.requires("SpriteAnimation");

    this.attr({x: 0, y: 0});
  },

  clear: function() {
    this.removeComponent('bag');
    this._visible = false;
  }
});