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

var Game = {
    scopeView: {},
    level: {}
};

var AllScripts = [
    // objects
    'js/objects/flower',
    'js/objects/stone',
    'js/objects/ground',
    'js/objects/glass',
    'js/objects/cross',
    'js/objects/unit',
    'js/objects/player',
    'js/objects/fourway_ai',
    'js/objects/fourway_touch',
    'js/objects/monster',
    'js/objects/scope',
    // scenes
    'js/scenes/loading',
    'js/scenes/main',
    'js/scenes/win',
    'js/scenes/lose',
    //utils
    'js/storage.js',
    'js/utils.js'
];

require(AllScripts, function() {
    Crafty.init(); // инизиализируем игровое поле

    Game.level = new Level(Settings);

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
    Crafty.sprite(Settings.poligon, "images/glass.jpg", {
        glass: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/granit1.png", {
        granit1: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/granit2.png", {
        granit2: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/bag.png", {
        bag: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/cross.png", {
        cross: [0,0]
    });
    
    Crafty.audio.add("drips", [
        "sounds/drips4.wav",
        "sounds/drips4.mp3",
    ]);
    Crafty.audio.add("money", [
        "sounds/money.wav",
        "sounds/money.mp3",
    ]);
    Crafty.audio.add("namnam", [
        "sounds/apple.wav",
        "sounds/apple.mp3",
    ]);
    Crafty.audio.add("chick", [
        "sounds/chick.wav",
        "sounds/chick.mp3",
    ]);

    // запускаем первую сцену
    Crafty.scene("loading");
});
