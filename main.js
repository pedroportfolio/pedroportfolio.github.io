	let index = 0;
		displayImages ();
		
		function displayImages() {
			let i;
			const images = document.getElementsByClassName("slideShow");
			const dots = document.getElementsByClassName("dot");
			
			for (i = 0; i < images.length; i++) {
				images[i].style.display = "none";
			}
			
			index++;
			
			if (index > images.length) {
				index = 1;
			}
			
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			
			images[index-1].style.display = "block";
			dots[index-1].className += " active";
			setTimeout(displayImages, 2000);
		}