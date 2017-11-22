var bolSwitch = false;
var toolTip = $("#tools-tip");
var toolSlidesArr = $(".tool-slides");
var toolTipCntr = 0;
var game;
var blockCnt = 1;
var toolCnt = 1;
var langCnt = 1;

var target = $("#pacman");
var targetSprite = $("#pacman img");
var stage = $("#maze-stage");
var startGame = $(".btn[data-val='start']");
var scrollStage = $("#scroll-container");
var currgame = 0;
var initEl = false;
var tilemap, game, startPos, mobileBol, gameHeight, gameWidth, mobGame;
var mobPowCnt = 0;

var powHitArr = ['illustrator', 'animator', 'developer', 'designer', 'illustratorCC', 'maya', 'unity', 'afterEffects'];

//MOBILE
var mobWidth = window.innerWidth;

// MOBILE vs DESKTOP
$(document).ready( function(){
    if ( $(this).width() < 800 ) {
        
        $('#mob-container').addClass('active');
        mobileBol = true;
        mobGame = true;
        
        currgame = 1;
        
        gameHeight = ($('#mob-container').height() > 490 ? 490 : $('#mob-container').height());
        gameWidth = ($('#mob-container').width() > 385 ? 385 : $('#mob-container').width());

        game = new Phaser.Game(gameWidth, gameHeight, Phaser.WEBGL, 'mob-container');
        //game.mobile = true;
        
        game.state.add("Boot", boot);
        game.state.add("Menu", mainMenu);
        game.state.add("Tutorial", tutorial);
        game.state.add("Preload", preload);
        game.state.add("StartGame", startGame);
        game.state.start("Boot", boot);  
                    
    }
    
    else { $('#desk-container').addClass('active'); }
    
});

function mobBlockHit() {
    var currImage = 'images/mob-slides/powHit-' + powHitArr[mobPowCnt] + '.gif';
    
    $('#hit-gif').attr('src', currImage);
    mobPowCnt +=1;
    console.log(mobPowCnt);
}

var pacFlip = function(direction){
    
    if (direction !== "pause"){
        
        document.getElementById('pacman').className = '';

        switch(direction){
            case "up": $(target).addClass("up");
                break;
            case "down": $(target).addClass("down");
                break;
            case "left": $(target).addClass("left");
                break;
            case "right": $(target).addClass("right");
                break;
        }
        
    }
    
    else { $(target).addClass("pause"); }
}

// MOBILE FUNCTIONALITY
function mobToolHit (){
    $("#hit-box").addClass('active');
    game.paused = true; 
};

$('#hit-box').on('click', function(){
    $(this).removeClass('active');
    game.paused = false; 
});

$(startGame).click( function(){
    $("#tools-tip").removeClass("active");
    mapInit();
    return toolTipCntr+=1;
});


function slideInit(curNum){
    
    for ( i = 0; i <= toolSlidesArr.length; i++ ){
        var currSlide = toolSlidesArr[i];
        var tipval = $(currSlide).attr("data-slide-tip-val");
        console.log(tipval);
        
        if( tipval == curNum ){
            $(currSlide).addClass("active");
        }
        else{ $(currSlide).removeClass("active"); }
    }
    
    game.paused = true;
    
};

$("#close").on("click", function(){
    
    $("#tools-tip").removeClass("active");

    if ( toolTipCntr === 0 ){
        $('.tool-slides').toggleClass('active');
    }    
    
    if( currgame != 0 ){
        game.paused = false;
    }
    
});

function introClose(){ 
    
    if ( bolSwitch === false ){
        $("#intro").addClass("vid-actv");
        $('#main-menu').addClass("clear");

        $("#introVid").get(0).play();
        document.getElementById('introVid').addEventListener('ended', introClear, false);
        function introClear(e) {
            $("#vidWrapper .btn").addClass("flash");
            $(".vid-actv").on("click", function(){
                $("#intro-viewport").addClass("clear");
                $("#close").css("visibility", "hidden");
                $("#tools-tip").addClass('active');
                $("#maze-container").addClass('active');
            });
        } 
    }
    
    bolSwitch = true;
};

function tipAlert (){
    $("#tools-tip").addClass("active");
}

function toolHit( elmClass ){
        
    switch ( elmClass ) {
            
        case "block": $(".block[data-block-val='" + blockCnt + "']").addClass("activated");
            blockCnt+=1;
            break;
        case "tool": $(".tool[data-tool-val='" + toolCnt + "']").addClass("activated");
            toolCnt+=1;
            break;
        case "lang": $(".lang[data-lang-val='" + langCnt + "']").addClass("activated");
            langCnt+=1;
            break;
        default: break;   
        
    }
    
    tipAlert();

};


$("#tutA").on("click", function(){
    if( initEl === false ){
          $(this).addClass("init");
         initEl == true;
     }
});

$("#lvl-1-start").on("click", introClose);
