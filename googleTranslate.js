// gathering the Google Translate API data within a function to pull the specific language choice
function fetchTranslation(translationText){

    const settingsGoogleTranslate = {
        "async": true,
        "crossDomain": true,
        "url": "https://google-translate20.p.rapidapi.com/translate",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-key": "f3639aabd2msh02be33c0048b519p16c0fdjsn7fcab6521dd2",
            "x-rapidapi-host": "google-translate20.p.rapidapi.com"
        },
        "data": {
            "text": translationText,
            "tl": languageChoice,
            "q": translationText,
            "sl": "en"
        }
    };
    $.ajax(settingsGoogleTranslate).done(function (response) {
          
        var translatedText = response.data.translation;
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#translated-instructions").append(translatedText)
        
    });
}

// gathering the Google Translate API data within a function to translate the ingredients
function fetchIngredientTranslation(translationIngredients){

    const settingsGoogleTranslate = {
        "async": true,
        "crossDomain": true,
        "url": "https://google-translate20.p.rapidapi.com/translate",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-key": "f3639aabd2msh02be33c0048b519p16c0fdjsn7fcab6521dd2",
            "x-rapidapi-host": "google-translate20.p.rapidapi.com"
        },
        "data": {
            "text": translationIngredients,
            "tl": languageChoice,
            "q": translationIngredients,
            "sl": "en"
        }
    };
    $.ajax(settingsGoogleTranslate).done(function (response) {
          
        var translatedText = response.data.translation;
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#ingredients2").append(translatedText)
        
    });
}

// gathering the Google Translate API data within a function to translate the name of the drink (if possible)
function fetchNameTranslation(translationTitle){

    const settingsGoogleTranslate = {
        "async": true,
        "crossDomain": true,
        "url": "https://google-translate20.p.rapidapi.com/translate",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-key": "f3639aabd2msh02be33c0048b519p16c0fdjsn7fcab6521dd2",
            "x-rapidapi-host": "google-translate20.p.rapidapi.com"
        },
        "data": {
            "text": translationTitle,
            "tl": languageChoice,
            "q": translationTitle,
            "sl": "en"
        }
    };
    $.ajax(settingsGoogleTranslate).done(function (response) {
          
        var translatedText = response.data.translation;
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#card-title2").append(translatedText)
        
    });
}

// Using an on-click function to activate the chosen langauge in the drop-down menu
$("#language").on('change', function () {

    // These update the elements in the translation card to be blank when a new language is selected, preventing stacking
    $('#card-title2').text('');
    $('#translated-instructions').text('');
    $('#ingredients2').text('');


    // Code for calling the choice of language on click
    languageChoice = $(this).find('option:selected').attr('id');
    
    // Setting variables
    var translationText = $("#instructions").text();
    var translationIngredients = $("#ingredients").text(); 
    var translationTitle = $("#card-title").text();

    // Calling the global functions
    fetchTranslation(translationText);
    fetchIngredientTranslation(translationIngredients); 
    fetchNameTranslation(translationTitle); 
});