// when the dom has loaded run the following code
$(document).ready(function(){

  var $container = $(".container");
  // when the form is submitted
  $("form").on("submit",function(e){
    // cache the result of whatever the user typed in
    var $title = $("#title");
    var val = $title.val();
    // prevent the default action of refreshing the page
    e.preventDefault();
    // remove everything inside of container
    $container.empty();
    // clearing whatever the user typed in
    $title.val("");
    // let's make an ajax call
    $.ajax({
      method: "GET",
      url: "http://omdbapi.com",
      // the key is what should be the query string key
      // the value is whatever the user typed in
      data: {
        t:val
      },
      success: function(data){
        if(data.Response === "False"){
          $title = $("<h1></h1>").text("YOU LOSE! YOU GET NOTHING!");
          $container.append($title);
        }
        else {
          // var $img = $("<img src=" + data.Poster + " + alt=Movie Picture></img>")
          var $img = $("<img>", {
          src: data.Poster,
          alt: "Movie Picture",
          class: "awesome",
          id: "test",
          style: "color:red;"
        });
          $title = $("<h1></h1>").text(data.Title + " " + data.Year);
          $container.append($title);
          $title.after($img);
        }
      }

    });

  });

});