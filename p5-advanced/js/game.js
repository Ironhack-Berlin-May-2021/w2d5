class Game {
	constructor() {
		this.backgroundImages;
	}

	setup() {
		this.player = new Player();
		this.background = new Background();
		this.obstacles = [];
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('../assets/background/plx-1.png'), x: 0, speed: 0 },
			{ src: loadImage('../assets/background/plx-2.png'), x: 0, speed: 1 },
			{ src: loadImage('../assets/background/plx-3.png'), x: 0, speed: 2 },
			{ src: loadImage('../assets/background/plx-4.png'), x: 0, speed: 3 },
			{ src: loadImage('../assets/background/plx-5.png'), x: 0, speed: 4 },
		];
		this.playerImage = loadImage('../assets/player/bb8.gif');
		this.coinImage = loadImage('../assets/coins/tile000.png');
	}

	draw() {
		clear();
		this.background.draw();
		this.player.draw();
		// every x frames we push a new Obstacle in the obstacles array	
		// we use the variable frameCount that p5.js provides
		// console.log(frameCount);
		if (frameCount % 60 === 0) {
			this.obstacles.push(new Obstacle(this.coinImage));
			console.log(this.obstacles);
		}
		// we iterate over the obstacles array and call their draw function for every obstacle 
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw();
		})
		// we use array filter to remove coins that collide with the player from the array
		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
				return false;
			} else {
				return true
			}
			// obstacle.collision(this.player);
		})
	}
}