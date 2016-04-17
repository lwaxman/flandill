/*
* www.flandill.net
* texture.js: functions to draw the fill patterns of deebs and background.
*/

var deebTexture = function(p, l){
	// p = 400; 
	var can = document.createElement("canvas");
	var cx = can.getContext("2d");
	can.width = canvas.width;
	can.height = canvas.height;

	var sat = map(p, 400, 100, 10, 60);
	var lit = map(p, 400, 100, 70+l, 50+l);

	cx.fillStyle = "hsla(180,"+sat+"%,"+lit+"%,1)";
	cx.fillRect(0, 0, can.width, can.height);

	var count = width*height/200;
	for(var i=0; i<count; i++){
		cx.fillStyle = "hsla(180,"+sat+"%,"+random(40,60)+"%,0.1)";
		cx.beginPath();
		cx.arc(random(0,width), random(0,height), random(2,5) ,0, 2*Math.PI);
		cx.fill();
		cx.closePath();
	}

	var deebFill = c.createPattern(can, "repeat");
	return deebFill; 
};


var deebStroke = function(p){
	var sat = map(p, 400, 100, 10, 60);
	var lit = map(p, 400, 100, 65, 45);
	return "hsla(180,"+sat+"%,"+lit+"%,1)";
};

var bgTexture = function(p){
	var can = document.createElement("canvas");
	var cx = can.getContext("2d");
	can.width = canvas.width;
	can.height = canvas.height;

	var hue;
	var sat;
	if(p > 400){
		hue = 290;
		sat = 10;
	}else{
		hue = 290; 
		sat = map(p, 400, 100, 10, 60);
	}
	cx.fillStyle = "hsla("+hue+","+sat+"%,50%,1)";
	cx.fillRect(0, 0, can.width, can.height);

	var count = width*height/200;
	for(var i=0; i<count; i++){
		cx.fillStyle = "hsla("+hue+","+sat+"%,"+random(40,60)+"%,0.3)";
		cx.beginPath();
		cx.arc(random(0,width), random(0,height), random(5,10), random(5,10), 0, 2*Math.PI);
		cx.fill();
		cx.closePath();
	}

	var bgFill = c.createPattern(can, "repeat");
	return bgFill; 

};