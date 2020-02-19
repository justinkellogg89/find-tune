var settings = {
	"async": true,
	"crossDomain": true,
	"url": "",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "a14db8f8acmsh96bcdd8b84302d1p1c95dajsnfc135164e36b"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    console.log("click works")
    searchName = $("#add-gif").val().trim();
    console.log(searchName);
    settings.url = "https://giphy.p.rapidapi.com/v1/gifs/search?q=" + searchName

    $.ajax(settings).done(function(response) {
        console.log(response);
    });

});

