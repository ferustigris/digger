Crafty.scene("main", function() {
    Settings.width = Crafty.DOM.window.width;
    Settings.height = Crafty.DOM.window.height;

    var ocupied = "0,0;";
    function joinCoord(x, y) {
        return x + "," + y + ";";
    }

    console.log("Main scene started!")

    this.get_random_position = function() {
        do { 
            var x = Crafty.math.randomInt(0, Settings.width / Settings.poligon - 2)
            var y = Crafty.math.randomInt(0, Settings.height / Settings.poligon - 2)
            var pos = {
                x: x * Settings.poligon,// + 10,
                y: y * Settings.poligon,// + 10,
                w: Settings.poligon,// - 20,
                h: Settings.poligon// - 20
            } 
        } while (ocupied.search(joinCoord(x, y)) >= 0)
        ocupied += joinCoord(x, y);
        return pos
    }

    this.get_position = function(x, y) {
        ocupied += joinCoord(x, y);
        return {
            x: x * Settings.poligon,
            y: y * Settings.poligon,
            w: Settings.poligon,
            h: Settings.poligon
        } 
    }

    for(var i = 0; i*Settings.poligon < Settings.width; i++) {
        for(var j = 0; j*Settings.poligon < Settings.height; j++) {
            Crafty.e("Sand").attr({x: i * Settings.poligon, y: j * Settings.poligon});
        }
    }

    levels = {
        0: Crafty.e("Deliver2Target"),
        1: Crafty.e("Deliver2Target2"),
        2: Crafty.e("Go2Target"),
        3: Crafty.e("CleanAll")
    }
    this.cellsCount = Settings.width / Settings.poligon * Settings.height / Settings.poligon
    
    level = levels[Settings.level % 3]
    console.log(Settings.level % 3)
    console.log(level)
    level.addPersonages(this)

    Crafty.e(Settings.sound ? "SoundButtonOff" : "SoundButtonOn").attr({
        x: Settings.width - 1 * Settings.poligon,
        y: Settings.height - 1 * Settings.poligon,
        w: Settings.poligon,
        h: Settings.poligon,
        z: 1
    });

    Crafty.e("ResetButton").attr({
        x: Settings.width - 2 * Settings.poligon,
        y: Settings.height - 1 * Settings.poligon,
        w: Settings.poligon,
        h: Settings.poligon,
        z: 1
    });

    Game.scopeView = Crafty.e("Scope").attr({x: 0, y: 0, z: 1, scope: Settings.scope});
    console.log("Main scene stopped!")
});
