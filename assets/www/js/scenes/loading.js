Crafty.scene("loading", function() {
    // меняем цвет фона
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text, Image").attr({
        w: Crafty.DOM.window.width,
        h: Crafty.DOM.window.height,
        x: 0,
        y: 0
    }).image("images/ground.jpg", "repeat");

    var splashSizes = [800, 400, 200, 75, 0];
    var splashSizeIndex = 0;

    while (splashSizes[splashSizeIndex] > Math.min(Crafty.DOM.window.width, Crafty.DOM.window.height)) {
        splashSizeIndex++;
	if(splashSizeIndex == splashSizes.length - 1)break;
    }

    var imgWidth = splashSizes[splashSizeIndex];
    var imgHeight = splashSizes[splashSizeIndex];

    // выводим по центру текст
    var imageX = Crafty.DOM.window.width/2 - imgWidth/2;
    var imageY = Crafty.DOM.window.height/2 - imgHeight/2;
    var imgName = "images/splash/digger" + splashSizes[splashSizeIndex] + "x" + splashSizes[splashSizeIndex] + ".png";

    Crafty.e("2D, DOM, Text, Image").attr({
        w: imgWidth,
        h: imgHeight,
        x: imageX,
        y: imageY
    }).image(imgName);

    setTimeout(function() {
        Crafty.scene("main");
    }, 1500);
});
