/* 1. Grab the input value */
		document.querySelector(".js-go").addEventListener('click', function(){
			//alert("test");
			var input = document.querySelector("input").value;
			//console.log(input);
			//calling searchGiphy function to display our input
			searchGiphy(input);
			//pushToDOM(input);//not needed b/c we have searchGiphy function
		});

		document.querySelector(".js-userinput").addEventListener('keyup', function(e){
			//alert("test for keyup");
			var input = document.querySelector("input").value;
			//console.log(input);
			if(e.which === 13) {
				searchGiphy(input);
					//pushToDOM(input);
			}
		});

/*2 Do the stuff with the API*/
//wrapping ajax request in function so that it only fires when we call its name
function searchGiphy(input){
	var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function(e) {
		var data = e.target.response;
	//console.log(data);
	//now that you have the data, this pushtoDOM display it on the webpage//
		pushToDOM(data);
	});
}
/*3 show me the gifs*/
function pushToDOM(input) {
			var response = JSON.parse(input);
			//var imageUrl = response.data[4].images.fixed_height.url;
			//console.log(response);
			var imageUrls = response.data
			//console.log(imageUrls);
			var container = document.querySelector(".js-container");
			/* allows us to do things for each images*/
			imageUrls.forEach(function(image){
				//console.log(image.images.fixed_height.url);
				var src = image.images.fixed_height.url;
				console.log(src);
				container.innerHTML += "<img src=\"" + src + "\">";

			});
}
