var Settings = {
    width: 800, // ширина игрового поля
    height: 600, // высота
    poligon: 100, // размер полигона 16x16
    scope: 0,
    level: 1, // текущий уровень
    speed: 10, // current monster speed
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
    'js/objects/concrete_track',
    'js/objects/concrete_track_full',
    'js/objects/concrete_track_target',
    'js/objects/concrete_track_target_empty',
    'js/objects/concrete_track_full_target',
    'js/objects/concrete_track_full_target_completed',
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
    'js/levels/go2target_concrete',
    'js/levels/cleanall',
    'js/storage.js',
    'js/utils.js',
    'js/phonegap-1.4.1.js'
];

require(AllScripts, function() {
    Crafty.init(); // инизиализируем игровое поле
    Settings.sound = Sound().sound;
    console.log("Game started!")

    Game.level = new Level(Settings);
    Settings.width = Crafty.DOM.window.width;
    Settings.height = Crafty.DOM.window.height;
    if (Settings.width < 501 || Settings.height < 501) {
        Settings.poligon = 50;
    }

	images_path = Settings.poligon == 50 ? "images/x50" : "images"
	// images_path = "images"
    sprites = {
        digger: images_path + "/digger.png",
        ground: images_path + "/ground.png",
        sand: images_path + "/sand.jpg",
        house: images_path + "/house.png",

        soundon: images_path + "/soundon.png",
        soundoff: images_path + "/soundoff.png",
        restart: images_path + "/restart.png",

        target1: images_path + "/target1.png",
        cargo1: images_path + "/cargo1.png",
        target1completed: images_path + "/construction1.png",

        monster: images_path + "/monster.png",

        track: images_path + "/track.png",
        tracktarget: images_path + "/trackTarget.png",
        tracktargetcompleted: images_path + "/tracktarget_completed.png",
        trackfull: images_path + "/trackfull.png",
        trackfulltargetcompleted: images_path + "/construction2.png",

        concrete_track: images_path + "/concrete_track.png",
        concrete_track_target: images_path + "/concrete_target_full.png",
        concrete_track_target_empty: images_path + "/concrete_target_empty.png",
        concrete_track_full: images_path + "/concrete_trackfull.png",
        concrete_track_full_target_completed: images_path + "/construction3.png",
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
        concrete: "sounds/concrete.wav",
        trackfull_go2target: "sounds/trackfull_go2target.wav",
    }

    var isPhoneGapUse = false;
    for (var key in sounds) {
        console.log("Load sound", key, sounds[key]);
        if (isPhoneGapUse) {
            Game.sounds[key] = new Media("/android_asset/www/" + sounds[key])
        } else {
            Crafty.audio.add(key, sounds[key])
            function playFunction(k) {
                return function() {
                    console.log("Play sound", k, sounds[k]);
                    if (Settings.sound)
                        Crafty.audio.play(k, 1);
                }
            }
            Game.sounds[key] = {
                play: playFunction(key)
            };
        }
    }

    // запускаем первую сцену
    Crafty.scene("loading");
});
