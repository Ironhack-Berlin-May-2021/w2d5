class Background {
	draw() {
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed;
			// this is the first image
			image(img.src, img.x, 0, width, height);
			// this adds the second image right after the first
			image(img.src, img.x + width, 0, width, height);
			// if the image moves completely out fo the screen to the left
			// then we reset it to it's start position
			if (img.x <= - width) {
				img.x = 0;
			}
		})
		console.log('this is the background');
		// image(game.backgroundImages[0].src, 0, 0, width, height)
		// image(game.backgroundImages[1].src, 0, 0, width, height)
		// image(game.backgroundImages[2].src, 0, 0, width, height)
		// image(game.backgroundImages[3].src, 0, 0, width, height)
		// image(game.backgroundImages[4].src, 0, 0, width, height)
	}
}
