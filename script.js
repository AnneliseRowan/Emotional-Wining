//for the carousel background image
$(document).ready(function(){
  $('.carousel').carousel({
    fullWidth: true,
    indicators: true
  });

  autoplay(); 

  function autoplay(){
    $(".carousel").carousel("next");
    setTimeout(autoplay, 2500); 
  }
});


//for the drop down menu
$(document).ready(function(){
  $('select').formSelect();
});

//for the modal
$(document).ready(function(){
  $('.modal').modal();
});


//for the drop down menu
$(document).ready(function(){
  $('select').formSelect();
});
var selected = '';
var drinkID ='';
const settingsFilter = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/randomselection.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2b1c64edc5msh3cacde3352fe1ebp1fec04jsn6c0584396bd0",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
};

// This is the event listener for when an emotion is chosen from the dropdown menu
// It'll ping the api and get 10 drink recipes, and then randomly chose of those 1 to 
// present.

$('#wine').change(function(){
  selected = $(".wine option:selected").text();
  $('#ingredients').empty();
  $.ajax(settingsFilter).done(function (response) {
    console.log(response);
    console.log('1 deeper', response.drinks)
    console.log('deeper length', response.drinks.length)
    chosenDrink = response.drinks[Math.floor((Math.random() * response.drinks.length) + 0)];
    drinkID = chosenDrink.idDrink;
    

    const settingsSingleDrink = {
      "async": true,
      "crossDomain": true,
      "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i="+chosenDrink.idDrink,
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "2b1c64edc5msh3cacde3352fe1ebp1fec04jsn6c0584396bd0",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
      }
    };
    
    $.ajax(settingsSingleDrink).done(function (response) {
  
  console.log(`drinks??`, response.drinks)
  console.log(`drink name???`, response.drinks[0].strDrink)
  drinkName = response.drinks[0].strDrink
  $('#card-title').text(drinkName);
      
  ingredients = [
    response.drinks[0].strIngredient1,
    response.drinks[0].strIngredient2,
    response.drinks[0].strIngredient3,
    response.drinks[0].strIngredient4,
    response.drinks[0].strIngredient5,
    response.drinks[0].strIngredient6,
    response.drinks[0].strIngredient7,
    response.drinks[0].strIngredient8,
    response.drinks[0].strIngredient9,
    response.drinks[0].strIngredient10,
    response.drinks[0].strIngredient11,
    response.drinks[0].strIngredient12,
    response.drinks[0].strIngredient13,
    response.drinks[0].strIngredient14,
    response.drinks[0].strIngredient15,
  ]
  measurements = [
    response.drinks[0].strMeasure1,
    response.drinks[0].strMeasure2,
    response.drinks[0].strMeasure3,
    response.drinks[0].strMeasure4,
    response.drinks[0].strMeasure5,
    response.drinks[0].strMeasure6,
    response.drinks[0].strMeasure7,
    response.drinks[0].strMeasure8,
    response.drinks[0].strMeasure9,
    response.drinks[0].strMeasure10,
    response.drinks[0].strMeasure11,
    response.drinks[0].strMeasure12,
    response.drinks[0].strMeasure13,
    response.drinks[0].strMeasure14,
    response.drinks[0].strMeasure15,
  ]
  
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== null && measurements[i] !==null) {
      temp = ingredients[i] + ' ' + measurements[i];
      $('#ingredients').append("<li>"+ temp + "</li>");
    } else if (ingredients[i] !== null && measurements[i] ==null) {
      temp2 = ingredients[i]      
      $('#ingredients').append("<li>"+ temp2 + "</li>");
    }
  }
      
  var translationText = response.drinks[0].strInstructions
      $('#instructions').text(translationText);

      // call the other api to translate and then put it on the dom
   storeSearch();   
});
});
})

// previousSearch will pull the drinkSearch from local storage. It'll pull out the drinks
// each button is assigned with an id=i, which makes it easy to pull the thing.
function previousSearch() {
  drinkSearch = JSON.parse(localStorage.getItem('drinkSearch'));
  $('button').remove('.historyBtn');
  for (let i = 0; i < drinkSearch.length; i++) {
      $('#full-information').after($('<button/>', {
          text: drinkSearch[i].drinkName,
          class: 'historyBtn',
          id: i,            
      }))}}
// the storeSearch function will automatically save the drink name and drink ID of each drink
// that was pulled by the system. The data is stored in the local data.
      function storeSearch() {
        searchHisotry = JSON.parse(localStorage.getItem('drinkSearch'));
        if (searchHisotry === null) {
            search = [{
                drinkName: drinkName,
                drinkID: drinkID,
            }]
        } else {
            search = searchHisotry.concat([{
              drinkName: drinkName,
              drinkID: drinkID,
            }])
            }
         localStorage.setItem('drinkSearch', JSON.stringify(search));   
    }
    $('#oldBtn').on('click', function(){
  previousSearch();
});


// This is the event listener, that pulls out the id from the input element the user switches to
// the id of each element is the parameter that will be sent to the api.
$("#language").on('change', function () {
    languageChoice = $(this).find('option:selected').attr('id');
});
// This is the event listener for the dynamically generated buttons created by previously pulled
// drinks by the app.
$(document).on('click', '.historyBtn', function(){
  searchHisotry = JSON.parse(localStorage.getItem('drinkSearch'));
  chosenDrink = drinkSearch[this.id].drinkID
  getOldRecipe();
})
// The getOlDRecipe function will remove the data currently in the drink card, before pulling in
//the drink by using the id from the selected buttons.
function getOldRecipe() {
    $('.titleCard').text('');
    $('.instructions').text('');
    $('.ingredients').text('');
    
    const settingsSingleDrink = {
      "async": true,
      "crossDomain": true,
      "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i="+chosenDrink,
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "2b1c64edc5msh3cacde3352fe1ebp1fec04jsn6c0584396bd0",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
      }}
    
    
    $.ajax(settingsSingleDrink).done(function (response) {

  drinkName = response.drinks[0].strDrink
  $('#card-title').text(drinkName); 
      
  ingredients = [
    response.drinks[0].strIngredient1,
    response.drinks[0].strIngredient2,
    response.drinks[0].strIngredient3,
    response.drinks[0].strIngredient4,
    response.drinks[0].strIngredient5,
    response.drinks[0].strIngredient6,
    response.drinks[0].strIngredient7,
    response.drinks[0].strIngredient8,
    response.drinks[0].strIngredient9,
    response.drinks[0].strIngredient10,
    response.drinks[0].strIngredient11,
    response.drinks[0].strIngredient12,
    response.drinks[0].strIngredient13,
    response.drinks[0].strIngredient14,
    response.drinks[0].strIngredient15,
  ]
  measurements = [
    response.drinks[0].strMeasure1,
    response.drinks[0].strMeasure2,
    response.drinks[0].strMeasure3,
    response.drinks[0].strMeasure4,
    response.drinks[0].strMeasure5,
    response.drinks[0].strMeasure6,
    response.drinks[0].strMeasure7,
    response.drinks[0].strMeasure8,
    response.drinks[0].strMeasure9,
    response.drinks[0].strMeasure10,
    response.drinks[0].strMeasure11,
    response.drinks[0].strMeasure12,
    response.drinks[0].strMeasure13,
    response.drinks[0].strMeasure14,
    response.drinks[0].strMeasure15,
  ]
  // This will take the two arrays of the ingredients and measurements and add them together
  // Not all ingredient will have a measurement we found during stress testing, so the if/else
  // statements will check for those.
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== null && measurements[i] !==null) {
      temp = ingredients[i] + ' ' + measurements[i];
      $('#ingredients').append("<li>"+ temp + "</li>");
    } else if (ingredients[i] !== null && measurements[i] ==null) {
      temp2 = ingredients[i]      
      $('#ingredients').append("<li>"+ temp2 + "</li>");
    }
  }
    })}

