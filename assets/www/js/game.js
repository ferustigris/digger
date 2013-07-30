var Settings = {
    width: 800, // ширина игрового поля
    height: 600, // высота
    poligon: 80, // размер полигона 16x16
    scope: 0,
    level: 2, // текущий уровень
    speed: 1, // current monster speed
    flower_count: 0, // цветоков на уровне
    sound: true
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
    'js/objects/sand',
    'js/objects/cross',
    'js/objects/unit',
    'js/objects/player',
    'js/objects/player_sprite',
    'js/objects/fourway_ai',
    'js/objects/fourway_touch',
    'js/objects/monster',
    'js/objects/monster_sprite',
    'js/objects/scope',
    'js/objects/bonus',
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
    Settings.sound = Sound().sound;

    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/digger.png", {
        digger: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/monster.png", {
        monster: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/ground.jpg", {
        ground: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/sand.jpg", {
        sand: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/granit1.jpg", {
        granit1: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/granit2.jpg", {
        granit2: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/bag.png", {
        bag: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/repa.png", {
        repa: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/cross.png", {
        cross: [0,0]
    });
    
    Crafty.audio.add("drips", [
        "sounds/drips4.wav",
        //"sounds/drips4.mp3",
    ]);
    Crafty.audio.add("money", [
        "sounds/money.wav"
        //"sounds/money.mp3",
    ]);
    Crafty.audio.add("namnam", [
        "sounds/apple.wav",
        //"sounds/apple.mp3",
    ]);
    Crafty.audio.add("chick", [
        "sounds/chick.wav",
        //"sounds/chick.mp3"
    ]);

    // запускаем первую сцену
    Crafty.scene("loading");
});
