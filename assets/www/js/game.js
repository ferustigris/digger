var Settings = {
    width: 800, // ширина игрового поля
    height: 600, // высота
    poligon: 100, // размер полигона 16x16
    scope: 0,
    level: 1, // текущий уровень
    speed: 1, // current monster speed
    flower_count: 0, // цветоков на уровне
    sound: true
};

var Game = {
    scopeView: {},
    level: {},
    sounds: {},
    win: function() {
        Game.scopeView.update(Settings.scope);
        console.log("Target1&Player scope=" + Settings.scope);
        
        if (Settings.sound)
            Game.sounds.money.play();

        setTimeout(function() {
            Crafty.scene("win");
        }, 1500);
    },
    lose: function() {
        Game.scopeView.update(Settings.scope);
        console.log("Target1&Player scope=" + Settings.scope);
        
        if (Settings.sound)
            Game.sounds.namnam.play();

        setTimeout(function() {
            Crafty.scene("lose");
        }, 1500);
    },
};

var AllScripts = [
    // objects
    'js/objects/flower',
    'js/objects/stone',
    'js/objects/cargo1',
    'js/objects/ground',
    'js/objects/sand',
    'js/objects/unit',
    'js/objects/player',
    'js/objects/player_sprite',
    'js/objects/fourway_ai',
    'js/objects/fourway_touch',
    'js/objects/monster',
    'js/objects/monster_sprite',
    'js/objects/scope',
    'js/objects/target1',
    'js/objects/target1completed',
    'js/objects/resetbutton',
    'js/objects/soundbuttonoff',
    'js/objects/soundbuttonon',
    'js/objects/bonus',
    'js/objects/track',
    'js/objects/trackfull',
    'js/objects/tracktarget',
    'js/objects/trackfulltarget',
    'js/objects/tracktargetcompleted',
    'js/objects/trackfulltargetcompleted',

    // scenes
    'js/scenes/loading',
    'js/scenes/main',
    'js/scenes/win',
    'js/scenes/lose',
    //utils
    'js/levels/deliver2target',
    'js/levels/deliver2target2',
    'js/levels/go2target',
    'js/levels/cleanall',
    'js/storage.js',
    'js/utils.js',
    'js/phonegap-1.4.1.js'
];

require(AllScripts, function() {
    Crafty.init(); // инизиализируем игровое поле
    Settings.sound = Sound().sound;

    Game.level = new Level(Settings);


    sprites = {
        digger: "images/digger.png",
        ground: "images/ground.png",
        sand: "images/sand.jpg",
        house: "images/house.png",

        soundon: "images/soundon.png",
        soundoff: "images/soundoff.png",
        restart: "images/restart.png",

        target1: "images/target1.png",
        cargo1: "images/cargo1.png",
        target1completed: "images/target1_completed.png",

        monster: "images/monster.png",

        track: "images/track.png",
        tracktarget: "images/trackTarget.png",
        tracktargetcompleted: "images/tracktarget_completed.png",
        trackfull: "images/trackfull.png",
        trackfulltargetcompleted: "images/trackfulltarget_completed.png",
    }

    for (var key in sprites) {
        console.log("Load sprite", key, sprites[key] );
        // подгружаем спрайт
        attr = {}
        attr[key] = [0, 0]
        Crafty.sprite(Settings.poligon, sprites[key], attr);
    }

    sounds = {
        tractor: "sounds/tractor.wav",
        money: "sounds/money.wav",
        namnam: "sounds/burp.wav",
        water: "sounds/water.wav",
        hit: "sounds/hit.wav",
        laught: "sounds/laught.wav",
        deliver2target: "sounds/deliver2target.wav",
        deliver2target2: "sounds/deliver2target2.wav",
        track_go2target: "sounds/track_go2target.wav",
        trackfull_go2target: "sounds/trackfull_go2target.wav",
    }

    var isPhoneGapUse = false;
    for (var key in sounds) {
        console.log("Load sound", key, sprites[key]);
        if (isPhoneGapUse) {
            Game.sounds[key] = new Media("/android_asset/www/" + sounds[key])
        } else {
            Crafty.audio.add(key, sounds[key])
            Game.sounds[key] = {
                play: function() {
                    if (Settings.sound)
                        Crafty.audio.play(key, 1);
                }
            };
        }
    }

    // запускаем первую сцену
    Crafty.scene("loading");
});
