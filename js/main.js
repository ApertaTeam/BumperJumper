var mainGame = mainGame || {};

mainGame.started = false;

mainGame.player = new Image();

mainGame.can = document.getElementById('screen');
mainGame.ctx = mainGame.can.getContext('2d');
mainGame.can.tabIndex = 1;
mainGame.ctx.font = '8px sans';

mainGame.ctx.scale(3,3);

mainGame.playerX = 20;
mainGame.playerY = 20;

mainGame.offsetX = 0;
mainGame.offsetY = 0;

mainGame.jumpPress = false;
mainGame.rightPress = false;
mainGame.leftPress = false;
 
setInterval(function(){
    if(mainGame.started == true){
        mainGame.update();
        mainGame.draw();
    }
}, 33.3);

mainGame.can.addEventListener('keydown', function(e){
if(mainGame.started == true){    
    if(e.keyCode == 32){
        mainGame.jumpPress = true;
    }
    if(e.keyCode == 37){
        mainGame.leftPress = true;
    }
    if(e.keyCode == 39){
        mainGame.rightPress = true;
    }
}
}, false);

mainGame.can.addEventListener('keyup', function(e){
if(mainGame.started == true){
    if(e.keyCode == 32){
        mainGame.jumpPress = false;
    }
    if(e.keyCode == 37){
        mainGame.leftPress = false;
    }
    if(e.keyCode == 39){
        mainGame.rightPress = false;
    }
}
}, false);

mainGame.init();

// ScreenSize (scaled): 768x672;
// ScreenSize: 256x224;