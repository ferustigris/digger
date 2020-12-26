Crafty.c('Bonus', {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("repa");
    this.requires("bonus");

    this.attr({x: 0, y: 0});
  },

  clear: function() {
    this.removeComponent('repa');
    this.removeComponent('bonus');
    this._visible = false;
  }
});