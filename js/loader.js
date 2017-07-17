var mainGame = mainGame || {};

mainGame.init = function(){
    var debug = true;
    var ct = mainGame.ctx;
    var canvas = mainGame.can;
    ct.fillStyle = "black";
    ct.imageSmoothingEnabled = false;

    sprites = [];
    readySprites = [];
    allSpritesReady = false;

    currentSprite = 0;

    loadArt("/assets/sprites/Loading.png");

    loadArt("/assets/sprites/TempPlayer.png");

    var setupFadeIn = 0;
    var setupFadeOut = 1;

    this.player = sprites[1];

    setupLoop = setInterval(function() {
        console.log("running");
        if(allSpritesReady){
            clearInterval(setupLoop);
            gameloop = setInterval(update, 33.3);
        } else {
            if(readySprites[0] == true){
                ct.drawImage(sprites[0], 0, 0);
            }

            allSpritesReady = true;

            for (var n = 0; n < readySprites.length; n++) {
                if(readySprites[n] == false){
                    allSpritesReady = false;
                    break;
                }
            }
        }
    }, 33.3);

    function update() {
        if(mainGame.started){
            clearInterval(gameloop);
        }
        if (setupFadeIn < 1) {
            setupFadeIn += 0.025;

            ct.globalAlpha = 1;
            ct.drawImage(sprites[0], 0, 0);

            ct.globalAlpha = setupFadeIn;
            ct.fillRect(0, 0, canvas.width, canvas.height);
            ct.globalAlpha = 1;
        } else {
            if (setupFadeOut > 0) {
                setupFadeOut -= 0.025;
            }
            ct.globalAlpha = 1;

            ct.clearRect(0, 0, canvas.width, canvas.height);

            if(setupFadeOut > 0) {
                ct.globalAlpha = setupFadeOut;
                ct.fillRect(0, 0, canvas.width, canvas.height);
                ct.globalAlpha = 1;
            } else {
                mainGame.started = true;
            }
        }
    }

    function loadArt(file) {
        sprites[currentSprite] = new Image();
        readySprites[currentSprite] = false;

        sprites[currentSprite].src = file;

        sprites[currentSprite].onload = function() {
            readySprites[sprites.indexOf(this)] = true;
        }

        currentSprite += 1;
    }
};