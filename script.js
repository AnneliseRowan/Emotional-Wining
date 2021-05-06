const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2b1c64edc5msh3cacde3352fe1ebp1fec04jsn6c0584396bd0",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
    var text = $('#textHTML');
	console.log(response);
    quote = console.log(response.content);
    text.textcontent = quote;
    
});




