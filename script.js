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


$('#wine').change(function(){
  selected = $(".wine option:selected").text();
  $('#ingredients').empty();
  console.log(`poison   `+ selected);
  $.ajax(settingsFilter).done(function (response) {
    console.log(response);
    console.log('1 deeper', response.drinks)
    console.log('deeper length', response.drinks.length)
    chosenDrink = response.drinks[Math.floor((Math.random() * response.drinks.length) + 0)];
    console.log('I am chosendDrink',chosenDrink);
    drinkID = chosenDrink.idDrink;
    console.log('drink ID', drinkID);
    

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
  console.log(response);
  
  console.log(`drinks??`, response.drinks)
  console.log(`drink name???`, response.drinks[0].strDrink)
  drinkName = response.drinks[0].strDrink
  $('#card-title').text(drinkName);
  //$('#card-title2').text(drinkName);
      
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
  console.log(ingredients);
  console.log(measurements);
  
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== null && measurements[i] !==null) {
      temp = ingredients[i] + ' ' + measurements[i];
      $('#ingredients').append("<li>"+ temp + "</li>");
      console.log(`did this go??`);
    } else if (ingredients[i] !== null && measurements[i] ==null) {
      temp2 = ingredients[i]
      
      $('#ingredients').append("<li>"+ temp2 + "</li>");
    }
  }
      
  var translationText = response.drinks[0].strInstructions
      $('#instructions').text(translationText);
      console.log('window ', window)

      // call the other api to translate and then put it on the dom
   storeSearch();   
});
});
})


function previousSearch() {   
  console.log('did previous serach go??'); 
  drinkSearch = JSON.parse(localStorage.getItem('drinkSearch'));
  $('button').remove('.historyBtn');
  for (let i = 0; i < drinkSearch.length; i++) {
      $('#full-information').after($('<button/>', {
          text: drinkSearch[i].drinkName,
          class: 'historyBtn',
          id: i,            
      }))}}

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



$("#language").on('change', function () {
    languageChoice = $(this).find('option:selected').attr('id');
    console.log('chosen language', languageChoice)
});

$(document).on('click', '.historyBtn', function(){
  searchHisotry = JSON.parse(localStorage.getItem('drinkSearch'));
  chosenDrink = drinkSearch[this.id].drinkID
  console.log('serach history', searchHisotry)
  console.log('chosen drink', chosenDrink);
  getOldRecipe();
})

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
  console.log(response);
  
  console.log(`drinks??`, response.drinks)
  
  drinkName = response.drinks[0].strDrink
  $('#card-title').text(drinkName);
 //$('#card-title2').text(drinkName);
      
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
  console.log(ingredients);
  console.log(measurements);
  
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== null && measurements[i] !==null) {
      temp = ingredients[i] + ' ' + measurements[i];
      $('#ingredients').append("<li>"+ temp + "</li>");
      console.log(`did this go??`);
    } else if (ingredients[i] !== null && measurements[i] ==null) {
      temp2 = ingredients[i]
      
      $('#ingredients').append("<li>"+ temp2 + "</li>");
    }
  }
    })}

