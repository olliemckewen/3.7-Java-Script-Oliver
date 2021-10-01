// JavaScript Document
alert("JS is attached");
var dailyPrice = 0, carModel;
var totalCost = 0;

function updateCar() {
	alert("Update pick up function");
	carModel = this.dataset.name;
	alert(carModel);
	dailyPrice = this.dataset.price;
	alert("$" + dailyPrice);
	document.getElementById("carOutput").innerHTML = carModel;
	document.getElementById("pricePerDayOutput").innerHTML = dailyPrice;
}

function updateBooking() {
	var addItems = document.getElementsByClassName("addCheck");
	var checkedAddItems = [];
	var addCost = 0
	for (var i = 0; i < addItems.length; i++) {
		if (addItems[i].checked) {
			checkedAddItems.push(' ' + addItems[i].value);
			alert(checkedAddItems);
			addCost += Number(addItems[i].dataset.price);
			alert(addCost);
		}
	}
	var pickUpDate = document.getElementById("pickUpDates").value;
	var drivingDay = document.getElementById("drivingDays").value;
	alert(pickUpDate);
	alert(drivingDay);
	document.getElementById("pickUpDate").innerHTML = pickUpDate;
	document.getElementById("drivingDayOutput").innerHTML = drivingDay;
	totalCost = addCost + dailyPrice * drivingDay;
	alert("Total Cost: "+totalCost)
	document.getElementById("extrasOutput").innerHTML = checkedAddItems;
	document.getElementById("priceOutput").innerHTML = totalCost;
	if (pickUpAirport.checked) {
		var pickUp = document.getElementById("pickUpAirport").value;
		alert(pickUp);
		document.getElementById("pickUpLocation").innerHTML = pickUp;
	}
	if (pickUpDepot.checked) {
		var pickUp2 = document.getElementById("pickUpDepot").value;
		alert(pickUp2);
		document.getElementById("pickUpLocation").innerHTML = pickUp2;
	}	
}

function userInfoInputs(){
	alert("in the checkInputs function");
	var firstName = document.getElementById("firstNameInput").value;
	var lastName = document.getElementById("lastNameInput").value;
	var age = document.getElementById("ageInput").value;
	var emailAddress = document.getElementById("emailInput").value;
	var cellPhone = document.getElementById("cellphoneInput").value;
	var license = document.getElementById("driversLicenseInput").value;
	var extraInfo = document.getElementById("additionalInfo").value;
	alert(firstName);
	alert(lastName);
	alert(age);
	alert(emailAddress);
	alert(cellPhone);
	alert(license);
	alert(extraInfo);
	document.getElementById("userInfoOutput").innerHTML = firstName +" "+ lastName +" "+ age +" "+ cellPhone +" "+ emailAddress;
	document.getElementById("licenseOutput").innerHTML = license;
	document.getElementById("extraInformationOutput").innerHTML = extraInfo;
}

var carInputs = document.getElementsByClassName("carCard");
for (i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click', updateCar);
}
var bookingInputs = document.getElementsByClassName('addCheck');
for (i = 0; i < bookingInputs.length; i++) {
	bookingInputs[i].addEventListener('input', updateBooking);
}