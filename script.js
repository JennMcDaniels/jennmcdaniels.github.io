/* 
Student Name: Jennifer McDaniels
File Name: script.js
Date: April 19, 2024
*/

//Hamburger menu Function

function hamburger() {
var menu = document.getElementById("menu-links");
/* var logo = document.getElementById("ffc-logo"); */

if (menu.style.display === "block" && logo.style.display === "none") {
	menu.style.display = "none";
	logo.style.display = "block";
} 
else {
	menu.style.display = "block";
	logo.style.display = "none";
}
}

//Function to display a promo code on Contact Us page
function discount() {
	var promo = document.getElementById("special");
	promo.firstChild.nodeValue = "Promo Code: 15PERCENT";
	promo.style.color = "#ff0000";
	promo.style.fontSize = "2em";
}


