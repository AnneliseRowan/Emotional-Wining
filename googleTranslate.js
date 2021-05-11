
// $.ajax(settingsGoogleTranslate).done(function (response) {
    // 	console.log(response);
    // });
    
    function fetchTranslation(translationText){
        console.log('translation text???? ', translationText)
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
          
        console.log('translation!!!!!~ ', response);
        var translatedText = response.data.translation;
            
        // var translatedInstructions = $("#instructions").text(translatedText);
        $("#translated-instructions").replaceWith(translatedText)
        
    });
}