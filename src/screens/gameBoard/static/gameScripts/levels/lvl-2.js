// LEVEL 2 

function lvl2In (){
    pacFlip("down");
    
    TweenLite.to(stage, 1, {y: "-=475", delay: .25, onComplete: pacFlip, onCompleteParams:["left"], ease:Linear.easeNone});
    TweenLite.to(target, 1, {x: "-=480", delay: 1.5, onComplete: pacFlip, onCompleteParams:["pause"], ease:Linear.easeNone});
    
    // DOWN WARP
    TweenLite.to(target, .25, {y: "+=80", delay: 2.75, ease:Linear.easeNone});
    TweenLite.to(stage, .75, {y: "-=290", delay: 3.25, onComplete: lvl2Start});
};

function lvl2Start(){
    
    startPos = {
        x: 3,
        y: 2
    };
    
    currgame = 2;
    game = new Phaser.Game(175, 350, Phaser.AUTO, 'addicted-creativity');
    tilemap = 'mini-games/addicted-creativity/map.json';
	game.state.add("Preload", preload);
	game.state.add("StartGame", startGame);
	game.state.start("Preload", preload);
	
    pacFlip("right");
};

function lvl2Out(){

	$('.mini-canvas[data-game-val="1"]').removeClass('static').addClass('win');

	game.destroy();
    pacFlip("pause");

    TweenLite.to(stage, .5, {y: "-=270", ease:Linear.easeNone});
    //TweenLite.to(target, .25, {y: "+=80", delay: .75, onComplete: lvl3In});
    TweenLite.to(target, .25, {y: "+=55", delay: 1, onComplete: lvl3In});
    
};

// Flash

function mazeFlash() {
	//$("#maze").addClass("flash");	
}
