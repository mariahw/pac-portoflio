// MAZE MOTION

function mapInit (){
	
	$("#close").css("visibility", "visible");

    TweenLite.to(stage, .75, {y: "-=215", onComplete: pacFlip, onCompleteParams:["left"], ease:Linear.easeNone});
    TweenLite.to(target, .85, {x: "-=280", delay: 1, onComplete: pacFlip, onCompleteParams:["pause"], ease:Linear.easeNone});
    
    // DOWN WARP
    TweenLite.to(target, .25, {y: "+=80", delay: 2.25, ease:Linear.easeNone});
    TweenLite.to(stage, .75, {y: "-=290", delay: 2.75, onComplete: lvl1Start});
    //TweenLite.to(stage, .75, {y: "-=290", delay: 2.75});
};

function lvl1Start(){
    
    $("#game-intro-vid").get(0).play();
    document.getElementById('game-intro-vid').addEventListener('ended', gameStart, false);
    function gameStart(e) {

        $("#game-intro-vid").remove();
        
        startPos = {
            x: 6,
            y: 7
        };

        currgame = 1;
        game = new Phaser.Game(385, 385, Phaser.AUTO, 'things-do');
		game.state.add("Preload", preload);
		game.state.add("StartGame", startGame);
		game.state.start("Preload", preload);
                        
        tilemap = 'mini-games/things-do/mapBlnkCSV.json';
        //game.state.add('Game', Pacman, true); 

    }
    pacFlip("right");
    
 
};

function lvl1Out(){

	$('.mini-canvas[data-game-val="0"]').removeClass('static').addClass('win');

	game.destroy();
	
    pacFlip("pause");
    TweenLite.to(target, .25, {x: 70, y: -40,  ease:Linear.easeNone});
    TweenLite.to(target, .25, {x: "+=65", delay: .5,  onComplete: lvl2In, ease:Linear.easeNone});    
};

