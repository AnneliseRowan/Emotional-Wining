//for the parallax background image
$(document).ready(function(){
  $('.parallax').parallax();
});

//for the drop down menu
$(document).ready(function(){
  $('select').formSelect();
});


//for the modal
$(document).ready(function(){
  $('.modal').modal();
});

//to make the button on modal copy the test
$(function()  {
  $('#copy-btn').click(function(){
      var content = $('#full-information').html();
      var newdiv = $("<div>");
      newdiv.html(content);
      $('#full-information').after(newdiv);
  });
});

