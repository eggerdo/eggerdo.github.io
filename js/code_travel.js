// JavaScript Document

var switchTravel = function(obj) {

console.log(obj);
console.log(travel1);
console.log(travel2);

		if (travel1 == obj) {
		console.log("123");
			travel1 = travelMain;
			$('#' + travel1).show();
			$('#' + travel1).removeClass("travelMain");
			$('#' + travel1).addClass("travel1");
		} else if (travel2 == obj) {
		console.log("2");
			travel2 = travelMain;
			$('#' + travel2).show();
			$('#' + travel2).removeClass("travelMain");
			$('#' + travel2).addClass("travel2");
		}
		
		travelMain = obj;
		$('#' + travelMain).removeClass("travel1");
		$('#' + travelMain).removeClass("travel2");
		$('#' + travelMain).addClass("travelMain");
		$('#' + travelMain).hide();

}

$(function() {	
	$('#btn-travel-amsterdam').bind('click',function(event){
		var $anchor = $(this);
							
		$('#travelinfo-amsterdam').show();
		$('#travelinfo-zurich').hide();
		$('#travelinfo-athens').hide();

		switchTravel(this.id);

		event.preventDefault();
});
		
	$('#btn-travel-zurich').bind('click',function(event){
		var $anchor = $(this);
		
		console.log("click");
		
		$('#travelinfo-amsterdam').hide();
		$('#travelinfo-zurich').show();
		$('#travelinfo-athens').hide();
			
		switchTravel(this.id);
			
		event.preventDefault();
	});
		
	$('#btn-travel-athens').bind('click',function(event){
		var $anchor = $(this);
		
		$('#travelinfo-amsterdam').hide();
		$('#travelinfo-zurich').hide();
		$('#travelinfo-athens').show();

		switchTravel(this.id);
			
		event.preventDefault();
	});
});