

$(document).ready(function(){
	var searchName;
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://giphy.p.rapidapi.com/v1/gifs/search?q=",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "giphy.p.rapidapi.com",
			"x-rapidapi-key": "a14db8f8acmsh96bcdd8b84302d1p1c95dajsnfc135164e36b"
		}
	}

	$("#add-music").on("click", function(event) {
		event.preventDefault();
		$("#artist-gif").empty();
		searchName = $("#music-input").val().trim();
		settings.url = "https://giphy.p.rapidapi.com/v1/gifs/search?q=" + searchName;

	$.ajax(settings).done(function (response) {
		console.log(response);
	});}



