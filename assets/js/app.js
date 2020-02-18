var searchName;
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "d2fbe879camshb3861a29657e700p10444djsnd41b07129f5d"
    }
}



$("#add-music").on("click", function(event) {
    event.preventDefault();
    console.log("click works")
    searchName = $("#music-input").val().trim();
    console.log(searchName);
    settings.url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchName

    $.ajax(settings).done(function(response) {
        console.log(response);
    });

});