var Settings = {
    width: 800, // ширина игрового поля
    height: 600, // высота
    poligon: 80, // размер полигона 16x16
    mini_poligon: 40, // размер полигона 16x16
    scope: 0,
    level: 2, // текущий уровень
    speed: 1, // current monster speed
    flower_count: 0 // цветоков на уровне
};

var AllScripts = [
    'js/scenes/top',
    //utils
    'js/storage.js',
    'js/utils.js'    
];

require(AllScripts, function() {
    Crafty.init(); // инизиализируем игровое поле

    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/digger.png", {
        digger: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/monster.png", {
        monster: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.mini_poligon, "images/ground.jpg", {
        ground: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/bag.png", {
        bag: [0,0]
    });

    // запускаем первую сцену
    Crafty.scene("top");
});
