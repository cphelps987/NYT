$(document).ready(function(){



  function retrieveArticles(searchTerm, numToRetrieve, startYear, endYear){
    console.log("here");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var parameters = $.param({
      'api-key': "ab3aa28c8add469ca323c6117aeffb45",
      'q': searchTerm,
      'begin_date': startYear,
      'end_date': endYear
    });

    url += '?' + parameters;

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      console.log(result.response.docs);
      var articles = result.response.docs;

      for(let i=0; i<articles.length; i++){
        var headline = articles[i].headline.main;
        console.log(headline);
      }

    }).fail(function(err) {
      throw err;
    });
  }




  $("#button1").on("click", function() {
    var searchTerm = "Trump";
    var numRecordsToRetrieve = 10;
    var startYear = 1998+"0101";
    var endYear = 2000+"1231";;

    // var s = $("").val().trim();
    // var numArticles = $("").val().trim();
    // var startYear = $("").val().trim() + "0101";
    // var endYear = $("").val().trim()+"1231";

    retrieveArticles(searchTerm,numRecordsToRetrieve,startYear,endYear);
  });
  //       v







});
