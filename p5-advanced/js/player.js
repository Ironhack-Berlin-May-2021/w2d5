class Player {
	constructor() {
		this.velocity = 0;
		this.gravity = 0.2;
		this.width = 100;
		this.height = 140;
		this.x = 0;
		this.y = height - this.height;
		// height is the height of the canvas (provided by p5.js)
	}

	draw() {
		// console.log('drawing the player');
		// this pushes the player down
		this.velocity += this.gravity;
		this.y += this.velocity;
		// if the player moves out of the screen on the bottom
		if (this.y >= height - this.height) {
			// we reset the y to it's starting position
			this.y = height - this.height;
		}
		image(game.playerImage, this.x, this.y, this.width, this.height);
	}

	jump() {
		// console.log('jumping');
		this.velocity = - 10;
	}
}