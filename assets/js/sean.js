$(document).ready(function() {
  $("#add-music").on("click", function(event) {
    event.preventDefault();
    $("#gif-image").empty();
    var searchName = $("#music-input")
      .val()
      .trim();

    console.log(searchName);

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=XW8IXY3rbQTNxW06roR2PAhak0yRewph&q=" +
      searchName +
      "&limit=1&offset=0&rating=R&lang=en";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var giphyGif = response.data[0].images.fixed_height.url;
      console.log(giphyGif);
      $("#gif-image").append($("<img>").attr("src", giphyGif));
    });
  });
});
