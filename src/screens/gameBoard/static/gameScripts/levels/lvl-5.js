// LEVEL 5

function lvl5In(){
    pacFlip("down");
    
    TweenLite.to(stage, .75, {y: "-=230", delay: .25, ease:Linear.easeNone, onComplete: pacFlip, onCompleteParams: ["right"]});
    TweenLite.to(target, .75, {x: "+=200", delay: 1.25, ease:Linear.easeNone, onComplete: pacFlip, onCompleteParams: ["down"]});
    
    // PIPE IN
    TweenLite.to(stage, .25, {y: "-=90", delay: 2.25, onComplete: pacFlip, ease:Linear.easeNone, onCompleteParams: ["pause"]});
    TweenLite.to(stage, .3, {y: "-=180", delay: 2.75, onComplete: gameOver});
    //TweenLite.to(stage, .3, {y: "-=140", delay: 2.75, onComplete: lvl5Start});
};

function gameOver(){
	$("#winners-viewport").addClass("active");
}

/* function lvl5Start(){
    
    startPos = {
        x: 3.5,
        y: 7
    };
    
    currgame = 5;
    game = new Phaser.Game(210, 420, Phaser.AUTO, 'teamwork');
    tilemap = 'mini-games/teamwork/map.json';
    
	game.state.add("Preload", preload);
	game.state.add("StartGame", startGame);
	game.state.start("Preload", preload);    
};

function lvl5Out(){
    TweenLite.to(stage, .5, {y: "-=305", onComplete: pacFlip, onCompleteParams: ["down"]});
    TweenLite.to(stage, .5, {y: "-=140", onComplete: pacFlip, delay: .75, onCompleteParams: ["left"], ease:Linear.easeNone});
    TweenLite.to(target, .5, {x: "-=230", onComplete: pacFlip, delay: 1.5, onCompleteParams: ["pause"], ease:Linear.easeNone});
}; */
