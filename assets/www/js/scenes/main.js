Crafty.scene("main", function() {
    Settings.width = Crafty.DOM.window.width;
    Settings.height = Crafty.DOM.window.height;

    var flower_count = Settings.level;
    Settings.flower_count = 0;
    var stonesCoords = "0,0;";
    function joinCoord(x, y) {
        return x + "," + y + ";";
    }

    console.log("Main scene started!")

    for(var i = 0; i*Settings.poligon < Settings.width; i++) {
        console.log("Main scene ground")
        for(var j = 0; j*Settings.poligon < Settings.height; j++) {
	    console.log("Main scene ground")
            Crafty.e("Sand").attr({x: i * Settings.poligon, y: j * Settings.poligon});
            if ((i + j > 0) && (Crafty.math.randomInt(0, 6) < 4)) {
                        Crafty.e("Ground").attr({
                            x: i * Settings.poligon,
                            y: j * Settings.poligon,
                            w: Settings.poligon,
                            h: Settings.poligon
                        });
                stonesCoords += joinCoord(i, j);
            } else

            if ((i + j > 0) && !Crafty.math.randomInt(0, 4)) {
                Crafty.e("Stone").attr({
                    x: i * Settings.poligon,// + 10,
                    y: j * Settings.poligon,// + 20,
                    w: Settings.poligon,// - 20,
                    h: Settings.poligon// - 20
                    });
                stonesCoords += joinCoord(i, j);
            }

        }
    }
    
    if (Settings.level % 2) {
        var x = 0;
        var y = 0;
        while (stonesCoords.search(joinCoord(x, y)) >= 0) {
            x = Crafty.math.randomInt(2, Settings.width / Settings.poligon - 1);
            y = Crafty.math.randomInt(2, Settings.height / Settings.poligon - 1);
	    console.log("Main scene koords")
        }
        Crafty.e("Bonus").attr({
            x: x * Settings.poligon,
            y: y * Settings.poligon,
            w: Settings.poligon,
            h: Settings.poligon
        });
        stonesCoords += joinCoord(x, y);
    }

    while (flower_count > 0) {
        //generate the grass along the x-axis
        for(var i = 1; i*Settings.poligon < Settings.width; i++) {
            //generate the grass along the y-axis
	    console.log("Main scene flowers")
            for(var j = 1; j*Settings.poligon < Settings.height; j++) {
                if (stonesCoords.search(joinCoord(i, j)) >= 0)
                    continue;
                if ((flower_count > 0) && (!Crafty.math.randomInt(0, 5))) {
                    Crafty.e("Flower").attr({
                        x: i * Settings.poligon,
                        y: j * Settings.poligon,
                        w: Settings.poligon,
                        h: Settings.poligon
                    });
                    Settings.flower_count += 1;
                    flower_count -= 1;
                    Crafty.e("Monster").attr({
                        x: i * Settings.poligon,
                        y: j * Settings.poligon,
                        w: Settings.poligon,
                        h: Settings.poligon
                    });
                    stonesCoords += joinCoord(i, j);
                }
            }
        }
    }

    Crafty.e("Player").attr({x: 0, y: 0, z: 1, w: Settings.poligon, h: Settings.poligon});

    Game.scopeView = Crafty.e("Scope").attr({x: 0, y: 0, z: 1, scope: Settings.scope});
    console.log("Main scene stoped!")
});
