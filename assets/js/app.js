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


// on click event for searching artists song
$("#add-music").on("click", function(event) {
    event.preventDefault();
    //emptys div of past songs
    $("#music-list").empty();
    //grabs user input
    searchName = $("#music-input").val().trim();

    settings.url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchName

    //ajax call to grab the songs
    $.ajax(settings).done(function(response) {
        console.log(response);
        // for loop looping through array of songs grabbing title album and preview
        for (let i = 0; i < 10; i++) {

            var songName = response.data[i].title;
            var albumName = response.data[i].album.title;
            var snippet = response.data[i].preview;
            var audioElement = $("<audio controls>")
            var sourceTag = $("<source>").attr("src", snippet);
            sourceTag.attr("type", "audio/mpeg");


            audioElement.append(sourceTag);

            $("#music-list").append(

                $("<div>")
                .addClass(".test")
                .append(
                    $("<p>").text("Title: " + songName),
                    $("<p>").text("album: " + albumName),
                    audioElement
                )

            )


        }
        $("music-input").empty();

    });

});