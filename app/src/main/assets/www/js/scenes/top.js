Crafty.scene("top", function() {
    // меняем цвет фона
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text, Image").attr({
        w: Crafty.DOM.window.width,
        h: Crafty.DOM.window.height,
        x: 0,
        y: 0
    }).image("images/ground.jpg", "repeat");

    // выводим по центру текст
    var imageX = Crafty.DOM.window.width/2;
    var imageY = Crafty.DOM.window.height/2;
    var h = 50;
    var count = (2.0*imageY - 200)/h;

    var top = new TopResults(Settings);

    for (var i = 0; i < count; i++) {
        var topItem = top.get(i);
        Crafty.e("2D, DOM, Text")
            .attr({w: 200, h: h, x: imageX - 100, y: imageY - h*count/2 +  + i*h})
            .text(topItem.name)
            .unselectable()
            .textColor('#FFFFFF', 1)
            .textFont({ size: '20px', weight: 'bold' });
        Crafty.e("2D, DOM, Text")
            .attr({w: 200, h: h, x: imageX + 100, y: imageY - h*count/2 +  + i*h})
            .text(topItem.value)
            .textFont({ size: '20px', weight: 'bold' })
            .textColor('#FFFFFF', 1)
            .unselectable();
    }
});