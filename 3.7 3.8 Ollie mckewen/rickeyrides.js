// JavaScript Document
alert("JS is attached") ;

function updateCar() {
	alert("Update pick up function");
	var carModel = this.dataset.name;
	alert(carModel);
	document.getElementById("carOutput").innerHTML=carModel;	
}

