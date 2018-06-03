var main = function() {

	"use strict";

	$(".welcome").hide();
	setTimeout(function() { $(".welcome").fadeIn();}, 1000);

	var canvas = document.getElementById("MyLine");
	var context = canvas.getContex("2d"); /*indicates canvas is 2d **Protocol** */

}

$(document).ready(main);