// JavaScript Document
alert("JS is attached") ;

function updateCar() {
	alert("Update pick up function");
	var carModel = this.dataset.name;
	alert(carModel);	
	var dailyPrice = this.dataset.price;
	alert("$"+ dailyPrice);
	document.getElementById("carOutput").innerHTML=carModel;
	document.getElementById("pricePerDayOutput").innerHTML=dailyPrice;	
	
}

function updateBooking() {
	var pickUpDate = document.getElementById("pickUpDates").value;
	alert(pickUpDate);
	document.getElementById("pickUpDate").innerHTML=pickUpDate;	
	if (pickUpAirport.checked)	{ 
		var pickUp = document.getElementById("pickUpAirport").value;
	}
	if (pickUpDepot.checked)	{
		var pickUp = document.getElementById("pickUpDepot").value;
		alert(pickUp);
	}
}

var carInputs = document.getElementsByClassName("carCard");
for (i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click', updateCar);
}

var bookingInputs = document.getElementsByClassName('addCheck');
for (i = 0; i < bookingInputs.length; i++) {
	bookingInputs[i].addEventListener('input', updateBooking);
}