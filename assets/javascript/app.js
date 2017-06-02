$(document).ready(function(){

});


$("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        var results = response.data;

        for(var i=0; i<results.length; i++){
          var animalDiv = $("div");

          var p = $("<p>");
          p.text(results[i].rating);
          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);
          animalDiv.append(p);
          animalDiv.append(animalImage);
          $("#gifs-appear-here").prepend(animalDiv);
          console.log(animalDiv);
        }

      });
    });
