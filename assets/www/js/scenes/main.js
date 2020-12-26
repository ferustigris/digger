Crafty.scene("main", function() {
    Settings.width = Crafty.DOM.window.width;
    Settings.height = Crafty.DOM.window.height;

    var flower_count = Settings.level;
    Settings.flower_count = 0;
    var ocupied = "0,0;";
    function joinCoord(x, y) {
        return x + "," + y + ";";
    }

    console.log("Main scene started!")

    get_random_position = function() {
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
        ocupied += joinCoord(pos.x, pos.y);
        return pos
    }

    get_position = function(x, y) {
        ocupied += joinCoord(x, y);
        return {
            x: x * Settings.poligon,
            y: y * Settings.poligon,
            w: Settings.poligon,
            h: Settings.poligon
        } 
    }

    cellsCount = Settings.width / Settings.poligon * Settings.height / Settings.poligon

    for(var i = 0; i*Settings.poligon < Settings.width; i++) {
        for(var j = 0; j*Settings.poligon < Settings.height; j++) {
            Crafty.e("Sand").attr({x: i * Settings.poligon, y: j * Settings.poligon});
        }
    }

    Crafty.e("Player").attr(get_position(0, 0));
    // Crafty.e("Target").attr(get_random_position());
    Crafty.e("Target").attr(get_position(3, 3));

    for(var i = 0; i < cellsCount/5; i++) {
        Crafty.e("Ground").attr(get_random_position())
    }
    for(var i = 0; i < cellsCount/10; i++) {
        Crafty.e("Stone").attr(get_random_position())
    }


    // for(var i = 0; (i+1)*Settings.poligon < Settings.width; i++) {
    //     console.log("Main scene ground")
    //     for(var j = 0; (j+1)*Settings.poligon < Settings.height; j++) {
    //         if ((i + j > 0) && (Crafty.math.randomInt(0, 6) < 4)) {
    //                     Crafty.e("Ground").attr({
    //                         x: i * Settings.poligon,
    //                         y: j * Settings.poligon,
    //                         w: Settings.poligon,
    //                         h: Settings.poligon
    //                     });
    //             ocupied += joinCoord(i, j);
    //         } else

    //         if ((i + j > 0) && !Crafty.math.randomInt(0, 4)) {
    //             Crafty.e("Stone").attr({
    //                 x: i * Settings.poligon,// + 10,
    //                 y: j * Settings.poligon,// + 20,
    //                 w: Settings.poligon,// - 20,
    //                 h: Settings.poligon// - 20
    //                 }).update();
    //             ocupied += joinCoord(i, j);
    //         }
    //     }
    // }
    
    if (Settings.level == 1) {
        Crafty.e("Cargo").attr(get_position(1, 1));
    } else {
        Crafty.e("Cargo").attr(get_random_position());
    } 

    // if (Settings.level % 2) {
    //     var x = 0;
    //     var y = 0;
    //     while (ocupied.search(joinCoord(x, y)) >= 0) {
    //         x = Crafty.math.randomInt(2, Settings.width / Settings.poligon - 1);
    //         y = Crafty.math.randomInt(2, Settings.height / Settings.poligon - 1);
	   //  console.log("Main scene koords")
    //     }
    //     Crafty.e("Bonus").attr({
    //         x: x * Settings.poligon,
    //         y: y * Settings.poligon,
    //         w: Settings.poligon,
    //         h: Settings.poligon
    //     });
    //     ocupied += joinCoord(x, y);
    // }

    // while (flower_count > 0) {
    //     //generate the grass along the x-axis
    //     for(var i = 0; (i+1)*Settings.poligon < Settings.width; i++) {
    //         console.log("Main scene ground")
    //         for(var j = 0; (j+1)*Settings.poligon < Settings.height; j++) {
    //             if (ocupied.search(joinCoord(i, j)) >= 0)
    //                 continue;
    //             if ((flower_count > 0) && (!Crafty.math.randomInt(0, 5))) {
    //                 Crafty.e("Flower").attr({
    //                     x: i * Settings.poligon,
    //                     y: j * Settings.poligon,
    //                     w: Settings.poligon,
    //                     h: Settings.poligon
    //                 });
    //                 Settings.flower_count += 1;
    //                 flower_count -= 1;
    //                 Crafty.e("Monster").attr({
    //                     x: i * Settings.poligon,
    //                     y: j * Settings.poligon,
    //                     w: Settings.poligon,
    //                     h: Settings.poligon
    //                 });
    //                 ocupied += joinCoord(i, j);
    //             }
    //         }
    //     }
    // }

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
