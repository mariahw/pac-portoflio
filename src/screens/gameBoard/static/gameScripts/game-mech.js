
var Pacman = function(game){
	this.map = null;
	this.player = null;
	this.layer = null;
	
	this.safetile = 9;
	this.gridsize = 35;
	
	this.speed = 150;
	this.threshold = 3;
	
	this.marker = new Phaser.Point();
	this.turnPoint = new Phaser.Point();
	
	this.directions = [null, null , null, null];
	// ?? Phaser.none
	this.opposites = [  Phaser.NONE, Phaser.RIGHT, Phaser.LEFT, Phaser.DOWN, Phaser.UP ];
	
	this.current = Phaser.NONE;
	this.turning = Phaser.NONE;
	
	
	// THINGS DO 
	this.infoBlock = null;
	
}

Pacman.prototype = {
	
	init: function() {
		this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	
	preload: function() {
		this.load.image('dot', 'images/dot.jpg');
		this.load.image('tiles', 'images/tile_atlas_fin.jpg');
		this.load.image('pacman', 'images/pacMan-tile.png', 35, 35);
		this.load.spritesheet('ms', 'images/characters/main/min-sheet-170X98', 170, 98, 2);
		//this.load.tilemap('map', 'mini-games/things-do/mapBlnkCSV.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('map', tilemap, null, Phaser.Tilemap.TILED_JSON);
		
		//THINGS-DO BLOCKS
		this.load.image('blockP', 'images/Bblock-pink.jpg');
		this.load.image('blockO', 'images/Bblock-orange.jpg');
		this.load.image('blockR', 'images/Bblock-red.jpg');
		this.load.image('blockB', 'images/Bblock-blue.jpg');
		
	},
	
	create: function(){                
		
		this.map = this.add.tilemap('map');
		this.map.addTilesetImage('tiles', 'tiles');
		this.layer = this.map.createLayer('game-maze');
		
		// GIVE DOTS PHYSICS ATTR
		this.dots = this.add.physicsGroup();
		
		// REPLACE BLANK TILES WITH DOTS FROM DOT GROUP ON 1 INDEX
		this.map.createFromTiles(9, this.safetile, 'dot', this.layer, this.dots);
	
		//  INVERT COLLISION = EVERYTHING BUT SAFETILE
		this.map.setCollisionByExclusion([this.safetile], true, this.layer);
		
		//POSITION PLAYER
		this.player = this.add.sprite((startPos.x * 35) - 17.5, (startPos.y * 35) - 17.5, 'pacman', 0);
		
		this.player.anchor.set(0.5, 0.5);
		
		
		if ( currgame === 1 ){
			
			//THINGS-DO BLOCKS

			this.infoBlock = this.add.physicsGroup();
			this.physics.arcade.enable(this.infoBlock);

			this.infoBlock.create((7 * 35), (9 * 35), 'blockP');
			this.infoBlock.create((3 * 35), (1 * 35), 'blockO');
			this.infoBlock.create((9 * 35), (3 * 35), 'blockB');
			this.infoBlock.create((1 * 35), (7 * 35), 'blockR');
			
		}
		
		// THINGS-DO BLOCKS

		this.physics.arcade.enable(this.player);
		this.player.body.setSize(32.5, 32.5, 0, 0); 

	   
		this.cursors = this.input.keyboard.createCursorKeys();
		
		// DISABLE ARROW KEYS !!!! FIN 
		
	},
	
	checkKeys: function () {
		
		if (this.cursors.left.isDown && this.current !== Phaser.LEFT)
		{
			this.checkDirection(Phaser.LEFT);
		}
		else if (this.cursors.right.isDown && this.current !== Phaser.RIGHT)
		{
			this.checkDirection(Phaser.RIGHT);
		}
		else if (this.cursors.up.isDown && this.current !== Phaser.UP)
		{
			this.checkDirection(Phaser.UP);
		}
		else if (this.cursors.down.isDown && this.current !== Phaser.DOWN)
		{
			this.checkDirection(Phaser.DOWN);
		}
		else
		{
			//  This forces them to hold the key down to turn the corner
			this.turning = Phaser.NONE;
		}

	},

	checkDirection: function (turnTo) {

		if (this.turning === turnTo || this.directions[turnTo] === null || this.directions[turnTo].index !== this.safetile)
		{
			//  Invalid direction if they're already set to turn that way
			//  Or there is no tile there, or the tile isn't index 1 (a floor tile)
			return;
		}

		//  Check if they want to turn around and can
		if (this.current === this.opposites[turnTo])
		{
			this.move(turnTo);
		}
		else
		{
			this.turning = turnTo;

			this.turnPoint.x = (this.marker.x * this.gridsize) + (this.gridsize / 2);
			this.turnPoint.y = (this.marker.y * this.gridsize) + (this.gridsize / 2);
		}

	},

	turn: function () {

		var cx = Math.floor(this.player.x);
		var cy = Math.floor(this.player.y);

		//  This needs a threshold, because at high speeds you can't turn because the coordinates skip past
		if (!this.math.fuzzyEqual(cx, this.turnPoint.x, this.threshold) || !this.math.fuzzyEqual(cy, this.turnPoint.y, this.threshold))
		{
			return false;
		}

		//  Grid align before turning
		this.player.x = this.turnPoint.x;
		this.player.y = this.turnPoint.y;

		this.player.body.reset(this.turnPoint.x, this.turnPoint.y);

		this.move(this.turning);

		this.turning = Phaser.NONE;

		return true;

	},

	move: function (direction) {

		var speed = this.speed;

		if (direction === Phaser.LEFT || direction === Phaser.UP)
		{
			speed = -speed;
		}

		if (direction === Phaser.LEFT || direction === Phaser.RIGHT)
		{
			this.player.body.velocity.x = speed;
		}
		else
		{
			this.player.body.velocity.y = speed;
		}

		//  Reset the scale and angle (Pacman is facing to the right in the sprite sheet)
		this.player.scale.x = 1;
		this.player.angle = 0;

		if (direction === Phaser.LEFT)
		{
			this.player.scale.x = -1;
		}
		else if (direction === Phaser.UP)
		{
			this.player.angle = 270;
		}
		else if (direction === Phaser.DOWN)
		{
			this.player.angle = 90;
		}

		this.current = direction;

	},

	eatDot: function (pacman, dot) {

		dot.kill();

		if (this.dots.total === 0){
			alert(currgame);
			
			switch( currgame ) {
				case 1: lvl1Out();
				break;
				case 2: lvl2Out();
				break;                        
				case 3: lvl3Out();
				break;
				case 4: lvl4Out();
				break;
				case 5: lvl4Out();
				break;
				default: break;
			}
			
		}


	},
	
	blockHit: function(pacman, block){
		
		block.kill();
		
		if (this.infoBlock.total === 2) {
			//alert("2 blocks left");
		}
		
		else if (this.infoBlock.total === 0){
		}
		
		game.paused = true;
	
		slideInit(1);
		toolHit("block");
	
	},

	update: function () {

		this.physics.arcade.collide(this.player, this.layer);
		this.physics.arcade.overlap(this.player, this.dots, this.eatDot, null, this);
		this.physics.arcade.overlap(this.player, this.infoBlock, this.blockHit, null, this);

		this.marker.x = this.math.snapToFloor(Math.floor(this.player.x), this.gridsize) / this.gridsize;
		this.marker.y = this.math.snapToFloor(Math.floor(this.player.y), this.gridsize) / this.gridsize;

		//  Update our grid sensors
		this.directions[1] = this.map.getTileLeft(this.layer.index, this.marker.x, this.marker.y);
		this.directions[2] = this.map.getTileRight(this.layer.index, this.marker.x, this.marker.y);
		this.directions[3] = this.map.getTileAbove(this.layer.index, this.marker.x, this.marker.y);
		this.directions[4] = this.map.getTileBelow(this.layer.index, this.marker.x, this.marker.y);

		this.checkKeys();

		if (this.turning !== Phaser.NONE)
		{
			this.turn();
		}

	}

};
		