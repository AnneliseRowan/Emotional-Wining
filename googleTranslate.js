
// $.ajax(settingsGoogleTranslate).done(function (response) {
    // 	console.log(response);
    // });
    
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
          
        
        console.log("TRANSLATE: ", translationText)
        var translatedText = response.data.translation;
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#translated-instructions").append(translatedText)
        
    });
}

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
          
        
        console.log("TRANSLATE: ", translationIngredients)
        var translatedText = response.data.translation;
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#ingredients2").append(translatedText)
        
    });
}

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
          
        
        console.log("TRANSLATE: ", translationTitle)
        var translatedText = response.data.translation;
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#card-title2").append(translatedText)
        
    });
}

$("#language").on('change', function () {
    languageChoice = $(this).find('option:selected').attr('id');
    var translationText = $("#instructions").text();
    var translationIngredients = $("#ingredients").text(); 
    var translationTitle = $("#card-title").text(); 
    fetchTranslation(translationText);
    fetchIngredientTranslation(translationIngredients); 
    fetchNameTranslation(translationTitle); 
});