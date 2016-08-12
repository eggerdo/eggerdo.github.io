// JavaScript Document

var hotelMain = 'btn-hotel-main';
var hotel1 = 'btn-hotel-golden-sand';
var hotel2 = 'btn-hotel-karatzas';
var hotel3 = 'btn-hotel-aegean-dream';

var switchHotel = function(obj) {

	console.log(obj);
	console.log(hotel1);
	console.log(hotel2);
						
	if (hotel1 == obj) {
		console.log("1");
		hotel1 = hotelMain;
		$('#' + hotel1).show();
		$('#' + hotel1).removeClass("hotelMain");
		$('#' + hotel1).addClass("hotel1");
	} else if (hotel2 == obj) {
		console.log("2");
		hotel2 = hotelMain;
		$('#' + hotel2).show();
		$('#' + hotel2).removeClass("hotelMain");
		$('#' + hotel2).addClass("hotel2");
	} else if (hotel3 == obj) {
		console.log("3");
		hotel3 = hotelMain;
		$('#' + hotel3).show();
		$('#' + hotel3).removeClass("hotelMain");
		$('#' + hotel3).addClass("hotel3");
	}
	
	hotelMain = obj;
	$('#' + hotelMain).removeClass("hotel1");
	$('#' + hotelMain).removeClass("hotel2");
	$('#' + hotelMain).removeClass("hotel3");
	$('#' + hotelMain).addClass("hotelMain");
	$('#' + hotelMain).hide();

}

$(function() {
	$('div.nav a').bind('click',function(event){
		var $anchor = $(this);
		
		/*
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 3000,'easeInOutQuad');
		/*
		if you don't want to use the easing effects:
		*/
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
	
	$('div#lunaplane a').bind('click',function(event){
		var $anchor = $(this);
		/*
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 3000,'easeInOutQuad');
		*/
		/*
		if you don't want to use the easing effects:
		*/
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
	
	var initialized = false;
	var shown = false;
	$('#btn-map-chios-google').bind('click', function(event) {
		if (!shown) {
		
		if (!initialized) {
			initialize();
			initialized = true;
		}
			$('#map-chios').show();
			$('#btn-map-chios-google-close').show();
			shown = true;
		} else {
			$('#map-chios').hide();
			$('#btn-map-chios-google-close').hide();
			shown = false;
		}
		var $anchor = $(this);
		
		event.preventDefault();
		
	 });
	 
	$('#btn-map-chios-google-close').bind('click', function(event) {
			$('#map-chios').hide();
			$('#btn-map-chios-google-close').hide();
			shown = false;
	});
				
	$('#btn-hotel-main').bind('click',function(event){
		var $anchor = $(this);
							
		$('#hotel-main').show();
		$('#golden-sand').hide();
		$('#karatzas').hide();
		$('#aegean-dream').hide();
		
		switchHotel(this.id);

		event.preventDefault();
	});
	 
	$('#btn-hotel-golden-sand').bind('click',function(event){
		var $anchor = $(this);
							
		$('#hotel-main').hide();
		$('#golden-sand').show();
		$('#karatzas').hide();
		$('#aegean-dream').hide();
		
		switchHotel(this.id);

		event.preventDefault();
	});
		
	$('#btn-hotel-karatzas').bind('click',function(event){
		var $anchor = $(this);
		
		console.log("click");
		
		$('#hotel-main').hide();
		$('#golden-sand').hide();
		$('#karatzas').show();
		$('#aegean-dream').hide();
			
		switchHotel(this.id);
			
		event.preventDefault();
	});
		
	$('#btn-hotel-aegean-dream').bind('click',function(event){
		var $anchor = $(this);
		
		$('#hotel-main').hide();
		$('#golden-sand').hide();
		$('#karatzas').hide();
		$('#aegean-dream').show();
				
		switchHotel(this.id);
			
		event.preventDefault();
	});
});