Crafty.scene("lose", function() {
    var isGameOver = Game.level.fail();
    Crafty.background("#000");
    // меняем цвет фона
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text, Image").attr({
        w: Crafty.DOM.window.width,
        h: Crafty.DOM.window.height,
        x: 0,
        y: 0
    }).image("images/ground.jpg", "repeat");

    Game.scopeView = Crafty.e("Scope").attr({x: 0, y: 0, h: 50, z: 1, scope: Settings.scope});

    // выводим по центру текст
    var imageX = Crafty.DOM.window.width/2;
    var imageY = Crafty.DOM.window.height/2;

    Crafty.e("2D, DOM, Text")
        .attr({w: Settings.width, h: 200, x: imageX - Settings.width/2, y: imageY - 100})
        .text(isGameOver ? "Game over" : "You loose")
        .textFont({ size: '48px'})
        .css({
            "text-align": "center",
            "color": "white"
        });
    if (Settings.sound)
        Game.sounds.laught.play();

    setTimeout(function() {
        Crafty.scene("main");
    }, 1000);
});
