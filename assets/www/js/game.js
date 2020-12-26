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
    'js/objects/cross',
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

    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/digger.png", {
        digger: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/monster.png", {
        monster: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/target1.png", {
        target1: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/tracktarget_completed.png", {
        tracktargetcompleted: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/target1_completed.png", {
        target1completed: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/soundon.png", {
        soundon: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/soundoff.png", {
        soundoff: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/restart.png", {
        restart: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/ground.png", {
        ground: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/sand.jpg", {
        sand: [0,0]
    });
    // подгружаем спрайт
    Crafty.sprite(Settings.poligon, "images/cargo1.png", {
        cargo1: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/house.png", {
        house: [0,0]
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
    Crafty.sprite(Settings.poligon, "images/track.png", {
        track: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/trackfull.png", {
        trackfull: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/tracktarget.png", {
        tracktarget: [0,0]
    });
    Crafty.sprite(Settings.poligon, "images/trackfulltarget_completed.png", {
        trackfulltargetcompleted: [0,0]
    });

    var isPhoneGapUse = false;
    if (isPhoneGapUse) {
        Game.sounds.tractor = new Media("/android_asset/www/sounds/tractor.wav")
        Game.sounds.money = new Media("/android_asset/www/sounds/money.wav")
        Game.sounds.namnam = new Media("/android_asset/www/sounds/burp.wav")
        Game.sounds.water = new Media("/android_asset/www/sounds/water.wav")
        Game.sounds.hit = new Media("/android_asset/www/sounds/hit.wav")
        Game.sounds.laught = new Media("/android_asset/www/sounds/laught.wav")
        Game.sounds.deliver2target = new Media("/android_asset/www/sounds/deliver2target.wav")
        Game.sounds.deliver2target2 = new Media("/android_asset/www/sounds/deliver2target2.wav")
        Game.sounds.track_go2target = new Media("/android_asset/www/sounds/track_go2target.wav")
        Game.sounds.trackfull_go2target = new Media("/android_asset/www/sounds/trackfull_go2target.wav")
    } else {
    
        Crafty.audio.add("tractor", "sounds/tractor.wav")
        Crafty.audio.add("money", "sounds/money.wav")
        Crafty.audio.add("burp", "sounds/burp.wav")
        Crafty.audio.add("water", "sounds/water.wav")
        Crafty.audio.add("hit", "sounds/hit.wav")
        Crafty.audio.add("laught", "sounds/laught.wav")
        Crafty.audio.add("deliver2target", "sounds/deliver2target.wav")
        Crafty.audio.add("deliver2target2", "sounds/deliver2target2.wav")
        Crafty.audio.add("track_go2target", "sounds/track_go2target.wav")
        Crafty.audio.add("trackfull_go2target", "sounds/trackfull_go2target.wav")

        Game.sounds.tractor = {play: function() {
            Crafty.audio.play("tractor", 1);
        }};
        Game.sounds.money = {play: function() {
            Crafty.audio.play("money", 1);
        }};
        Game.sounds.namnam = {play: function() {
            Crafty.audio.play("burp", 1);
        }};
        Game.sounds.water = {play: function() {
            Crafty.audio.play("water", 1);
        }};
        Game.sounds.hit = {play: function() {
            Crafty.audio.play("hit", 1);
        }};
        Game.sounds.laught = {play: function() {
            Crafty.audio.play("laught", 1);
        }};
        Game.sounds.deliver2target2 = {play: function() {
            Crafty.audio.play("deliver2target2", 1);
        }};
        Game.sounds.deliver2target = {play: function() {
            Crafty.audio.play("deliver2target", 1);
        }};
        Game.sounds.track_go2target = {play: function() {
            Crafty.audio.play("track_go2target", 1);
        }};
        Game.sounds.trackfull_go2target = {play: function() {
            Crafty.audio.play("trackfull_go2target", 1);
        }};
    }

    // запускаем первую сцену
    Crafty.scene("loading");
});
