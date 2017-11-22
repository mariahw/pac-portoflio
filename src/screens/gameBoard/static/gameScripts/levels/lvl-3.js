// LEVEL 3

function lvl3In(){
    pacFlip("right");
    
    TweenLite.to(target, .5, {x: "+=210", delay: .25, onComplete: pacFlip, onCompleteParams:["up"], ease:Linear.easeNone});
    TweenLite.to(stage, 1, {y: "+=455", delay: 1, onComplete: pacFlip, onCompleteParams:["right"], ease:Linear.easeNone});
    TweenLite.to(stage, .5, {x: "-=220", delay: 2.25, onComplete: pacFlip, onCompleteParams:["down"], ease:Linear.easeNone});
    TweenLite.to(stage, 1.25, {y: "-=520", delay: 3, onComplete: pacFlip, onCompleteParams:["pause"], ease:Linear.easeNone});
    
    // DOWN WARP
    TweenLite.to(stage, .75, {y: "-=402.5", delay: 4.75, onComplete: lvl3Start});
};

function lvl3Start(){
    pacFlip("left");

    startPos = {
        x: 5,
        y: 6
    };
    
    currgame = 3;
    game = new Phaser.Game(315, 385, Phaser.AUTO, 'tools-use');
    tilemap = 'mini-games/tools-use/map.json';

	game.state.add("Preload", preload);
	game.state.add("StartGame", startGame);
	game.state.start("Preload", preload);
		
};

function lvl3Out(){

	$('.mini-canvas[data-game-val="2"]').removeClass('static').addClass('win');

	game.destroy();

    TweenLite.to(target, .25, {y: "-=20"});
    TweenLite.to(stage, .5, {x: "+=345"});
    pacFlip("pause");

    // PIPE OUT
    TweenLite.to(stage, .5, {x: "+=70", delay: .75, onComplete: lvl4In, ease:Linear.easeNone});
};
