Crafty.scene("main", function() {
    Settings.width = Crafty.DOM.window.width;
    Settings.height = Crafty.DOM.window.height;
    if (Settings.width < 501 || Settings.height < 501) {
        Settings.poligon = 50;
    }

    var ocupied = "0,0;";
    function joinCoord(x, y) {
        return x + "," + y + ";";
    }
    debug("main scene")

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

    this.get_random_position_inside = function() {
        do { 
            var x = Crafty.math.randomInt(1, Settings.width / Settings.poligon - 2)
            var y = Crafty.math.randomInt(1, Settings.height / Settings.poligon - 3)
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
    debug("main scene - poligon")
    for(var i = 0; i*Settings.poligon < Settings.width; i++) {
        for(var j = 0; j*Settings.poligon < Settings.height; j++) {
            Crafty.e("Sand").attr({x: i * Settings.poligon, y: j * Settings.poligon});
        }
    }

    levels = {
        0: Crafty.e("Deliver2Target"),
        1: Crafty.e("Deliver2Target2"),
        2: Crafty.e("Go2Target"),
        3: Crafty.e("Go2TargetConcrete")
    }
    this.cellsCount = Settings.width / Settings.poligon * Settings.height / Settings.poligon
    debug("main scene - levels")

    level = levels[Settings.level % 4]
    console.log(Settings.level % 4)
    console.log(level)
    debug("main scene - add personages to levels")
    level.addPersonages(this)
    debug("main scene - buttons")

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

    debug("main scene - scope")
    Game.scopeView = Crafty.e("Scope").attr({x: 0, y: 0, z: 1, scope: Settings.scope});
    console.log("Main scene stopped!")
});
