Crafty.scene("main", function() {
    Settings.width = Crafty.DOM.window.width;
    Settings.height = Crafty.DOM.window.height;

    var flower_count = Settings.level;
    Settings.flower_count = 0;
    var stonesCoords = "0,0;";
    function joinCoord(x, y) {
        return x + "," + y + ";";
    }

    for(var i = 0; i*Settings.poligon < Settings.width; i++) {
        for(var j = 0; j*Settings.poligon < Settings.height; j++) {
            Crafty.e("Glass").attr({x: i * Settings.poligon, y: j * Settings.poligon});
            if ((i + j > 0) && (Crafty.math.randomInt(0, 7) < 4)) {
                for (var x = 0; x*Settings.mini_poligon < Settings.poligon; x++) {
                    for (var y = 0; y*Settings.mini_poligon < Settings.poligon; y++) {
                        Crafty.e("Ground").attr({
                            x: i * Settings.poligon + x*Settings.mini_poligon,
                            y: j * Settings.poligon + y*Settings.mini_poligon,
                            w: Settings.mini_poligon,
                            h: Settings.mini_poligon
                        });
                    }
                }
                stonesCoords += joinCoord(i, j);
            } else

            if ((i + j > 0) && !Crafty.math.randomInt(0, 4)) {
                Crafty.e("Stone").attr({
                    x: i * Settings.poligon + 10,
                    y: j * Settings.poligon + 20,
                    w: Settings.poligon - 20,
                    h: Settings.poligon - 20
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
        for(var i = 1; (i + 1)*Settings.poligon < Settings.width; i++) {
            //generate the grass along the y-axis
            for(var j = 1; (j + 1)*Settings.poligon < Settings.height; j++) {
                if (stonesCoords.search(joinCoord(i, j)) >= 0)
                    continue;
                if ((i + j > 0) && (flower_count > 0) && (!Crafty.math.randomInt(0, 5))) {
                    Crafty.e("Flower").attr({
                        x: i * Settings.poligon,
                        y: j * Settings.poligon,
                        w: Settings.poligon,
                        h: Settings.poligon
                    });
                    Settings.flower_count += 1;
                    flower_count -= 1;
                    /*Crafty.e("MonsterSprite").attr({
                        x: i * Settings.poligon,
                        y: j * Settings.poligon,
                        w: Settings.poligon,
                        h: Settings.poligon
                    });*/
                    stonesCoords += joinCoord(i, j);
                }
            }
        }
    }

    Crafty.e("PlayerSprite").attr({x: 0, y: 0, z: 1, w: Settings.poligon, h: Settings.poligon});

    Game.scopeView = Crafty.e("Scope").attr({x: 0, y: 0, z: 1, scope: Settings.scope});

});