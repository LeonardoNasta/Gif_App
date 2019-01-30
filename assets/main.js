//creates an array of salads that will be used as buttons.
var saladArray = ["Caesar Salad","Greek Salad","Garden Salad","Cobb Salad" ,"Potato Salad"] ;



$(document).ready(function(){
  createButtons();

  var customSalad = $('#SaladInput').val();

  
  function createButtons(){
    
    $("#SaladButtons").empty();


    for (var i = 0; i < saladArray.length; i++) {
  
     
      $("#SaladButtons").append("<button type='button' onclick='getSalads(\"" + saladArray[i] + "\")' class='btn btn-secondary " + saladArray[i] + "'> " + saladArray[i] + " </button>");
  }
    }
  
          // Grab the input from the textbox
  
      $('#NewSalad').on('click', function(){ 
      
      //push custom salad to button array 
  
      saladArray.push(customSalad);
  
      createButtons();
      })


getSalads();

function getSalads(){

  var imageLimit = "10";
  var apiKey = "&api_key=q2skq8tXN7GTPzrEte12QsMixkB0Murh";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + customSalad + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.data.length);

    showSalads();
  })
}
  

//will run a function to that displays the images.
function showSalads() {

//replaces spaces with pluses in the search URL

  var customSalad = $(this).attr('data-name').replace(/ /g, '+');
  
  for (var i = 0; i < response.data.length; i++) {

    var stillImage = response.data[i].images.fixed_height_still.url; 
    var movingImg = response.data[i].images.fixed_height.url;
    var rating = response.data[i].rating;
    
  }






  ////////////////////////////////////////////////
      //create divs for each relevant element.




  //var imageDiv = ;

  $("#SaladGifs").append(imageDiv);


}



//collects salad gifs from the Giphy API



//create a div thats holds the image.

//collects ratings and adds it to the image div.

//append still images and gifs to the div.





// Create a function that alternates between still and animated states.









});