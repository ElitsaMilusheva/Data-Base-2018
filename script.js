  "use strict";
$(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});

function validate(e){
var name=document.getElementById("fname").value;
var text=document.getElementById("subject").value;
var errors=[];

if(!name.match(/^[a-zA-Z]+$/))
{
errors[errors.length] = "You must enter correct name.";


}

if (!checkLength(name,1,20)) {
    errors[errors.length] = "You must enter a name under 20 symbols.";
  }

  if (!checkLength(text,1,250)) {
    errors[errors.length] = "You must enter text under 250 symbols.";
  }


  if (errors.length > 0) {
    reportErrors(errors);
    e.preventDefault();
  }
}

function checkLength(text, min, max){

  if (text.length < min || text.length > max) {
    return false;
  }
  return true;
}

function reportErrors(errors){
  var msg = "There were some problems...\n";
  var numError;
  for (var i=0; i<errors.length; i++) {
    numError = i + 1;
    msg += "\n" + numError + ". " + errors[i];
  }
  alert(msg);
}

window.onload = function() {
  document.getElementById("contactus").addEventListener("submit", function(e){
      validate(e);
  });



}

