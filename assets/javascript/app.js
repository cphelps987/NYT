$(document).ready(function(){

  console.log("ha");

  function retrieveArticles(searchTerm, numToRetrieve, startYear, endYear){
    console.log("here");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var parameters = $.param({
      'api-key': "ab3aa28c8add469ca323c6117aeffb45",
      'q': searchTerm,
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
        var url = "";
        console.log(headline);
        displayArticle(headline,url);
      }

    }).fail(function(err) {
      throw err;
    });
  }

  function displayArticle(headline, url){
    var articleDiv = $("<div>")
    articleDiv.attr("id", "articleDiv");

    var p = $("<p>")
    p.text(headline);
    var a = $("<a>");
    a.attr("href", url);

    articleDiv.append(p);
    articleDiv.append(a);
    $("body").append(articleDiv);

  }


  $("#submit").on("click", function() {
    var searchTerm = $("#topic").val().trim();
    var numArticles = $("#article-number").val().trim();
    var startYear = $("#from-year").val().trim() + "0101";
    var endYear = $("#to-year").val().trim()+"1231";

    retrieveArticles(searchTerm,numArticles,startYear,endYear);
  });

  $("#clear").on("click",function(){
    
  });







});
