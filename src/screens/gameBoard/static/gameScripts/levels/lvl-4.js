// LEVEL 4

function lvl4In(){
    pacFlip("down");
    
    TweenLite.to(stage, .75, {y: "-=305", delay: .25, onComplete: pacFlip, onCompleteParams:["right"], ease:Linear.easeNone});
    TweenLite.to(stage, 1, {x: "-=220", delay: 1.25, ease:Linear.easeNone});
    TweenLite.to(target, 1, {x: "+=205", delay: 1.25, onComplete: pacFlip, onCompleteParams:["down"], ease:Linear.easeNone});
    TweenLite.to(stage, 1, {y: "-=295", delay: 2.5, onComplete: pacFlip, onCompleteParams:["left"], ease:Linear.easeNone});
    
    //PIPE IN
    TweenLite.to(target, .25, {x: "-=125", delay: 3.75, onStart: pacFlip, onStartParams: ["pause"], ease:Linear.easeNone});
    TweenLite.to(stage, .25, {x: "+=95", delay: 4.25, onComplete: lvl4Start});
    
};

function lvl4Start(){
    
    pacFlip("down");
    
    startPos = {
        x: 5,
        y: 4
    };
    
    currgame = 4;
    game = new Phaser.Game(315, 315, Phaser.AUTO, 'prog-lang');
    tilemap = 'mini-games/prog-lang/map.json';
    
	game.state.add("Preload", preload);
	game.state.add("StartGame", startGame);
	game.state.start("Preload", preload);
	    
};

function lvl4Out(){

	$('.mini-canvas[data-game-val="3"]').removeClass('static').addClass('win');

	game.destroy();

    TweenLite.to(target, .05, {x: "-=116", onComplete: pacFlip, onCompleteParams: ["pause"]});
    
    //PIPE OUT
    TweenLite.to(stage, .5, {y: "-=300"});
    TweenLite.to(stage, .25, {y: "-=70", delay: .75, ease:Linear.easeNone, onComplete: lvl5In});
};
