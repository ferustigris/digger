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
        
    this.complite = function () {
        game.level += 1;
        if (game.level > 4) {
            game.level = 2;
            game.speed += 1;
        }
        $.jStorage.set("scope", game.scope);
    }
    
    this.fail = function () {
        game.scope = Math.round(game.scope/2);
        if (game.scope < 50) {
            game.level = 1;
            game.speed = 1;
            game.scope = 0;
        }
    }
};
