var mainGame = mainGame || {};

mainGame.draw = function(){
    this.ctx.save();
    this.ctx.translate(this.offsetX, this.offsetY);
    this.ctx.clearRect(-this.offsetX, -this.offsetY, 768,672);
    
    this.ctx.drawImage(this.player, this.playerX-this.offsetX, this.playerY-this.offsetY);
    
    for (var i = 0; i < 6; i++) {
        var x = (i*256)+128;
        var y = (i*20)+20;
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(x, y, 16, 16);
    }
    
    this.ctx.restore();
};

mainGame.update = function(){
    if(this.jumpPress == true){
        if(this.playerY > 0){
            this.playerY-=3;
        }
    } else if(this.jumpPress == false){
        if(this.playerY < (224-16)){
            this.playerY+=3;
        }
        if(this.playerY > (224-16)){
            this.playerY = 224-16;
        }
    }

    if(this.offsetX > -(7*256)){
        this.offsetX-=3;
    } else {
        this.offsetX=0;
    }
};