// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});



$('#login').on('submit', function(e){
if (user === '' || password === '') {
  alert('This field cannot be left blank!');
  //when working send the user to the landing.html page
  window.location.replace('landing.html');
}else{ 
	console.log('bad username or password');

	}
});  