$(document).ready(function(){
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=XW8IXY3rbQTNxW06roR2PAhak0yRewph&q=" + searchName + "&limit=1&offset=0&rating=R&lang=en";

	
	
	$("#add-music").on("click", function(event) {
		event.preventDefault();
		$("#gif-image").empty();
		searchName = $("#music-input").val().trim();
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {
			console.log(response);
			
		});
		
		
	});
});

