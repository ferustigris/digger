function exit() {
    var thisWindow = window.open("menu.html",'_self');
    //var exit = confirm("Хотите закрыть страницу?");
    //if(exit){
    thisWindow.close();
    //}
}

var Level = function (game) {
    if ($.jStorage.get("scope"))
        game.scope = $.jStorage.get("scope");
    var top = new TopResults(game);
    var index = $.jStorage.get("index", -1);
        
    this.complite = function () {
        game.level += 1;
        if (game.level > 4) {
            game.level = 2;
            game.speed += 1;
        }

        $.jStorage.set("scope", game.scope);    
        if (index < 0) {
            index = top.add("You", game.scope);
        } else {
            var lastScope = top.get(index);
            if (lastScope.value < game.scope) {
                index = top.set(index, lastScope.name, game.scope);
            }
        }
        $.jStorage.set("index", index);
    }
    
    this.fail = function () {
        game.scope = Math.round(game.scope/2);
        if (game.scope < 50) {
            if (index >= 0) {
                var lastScope = top.get(index).value;
                if (lastScope > 0)
                    top.set(index, "Digger", lastScope);
            }
            game.level = 1;
            game.speed = 1;
            game.scope = 0;
            index = -1;
            $.jStorage.set("index", index);
            return true;
        }
        return false;
    }
};

var TopResults = function (game) {
    
    this.get = function (index) {
        return $.jStorage.get("top" + index, {
            "name": "Looser", 
            "value": 0, 
        });
    }

    this.add = function (name, value) {
        if (value < 0)
            return;
            
        var index = 0;
        for (; this.get(index).value > value; index++);
        
        var prevItem = this.get(index);
        for (var i = index + 1; prevItem.value > 0; i++) {
            var tmpItem = this.get(i);
            $.jStorage.set("top" + i, prevItem);            
            prevItem = tmpItem;
        }
        
        $.jStorage.set("top" + index, {
            "name": name, 
            "value": value, 
        });
        return index;
    }
    
    this.set = function (index, name, value) {
        for (var i = index; this.get(i).value > 0; i++) {
            $.jStorage.set("top" + i, this.get(i + 1));
        }
        return this.add(name, value);
    }
};
