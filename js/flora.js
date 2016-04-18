
//////////////////////////////////////////////////////////////////// ROCK

function Rock(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "rock";

	var sat = map(ecosystem.points, 200, 400, 65, 10);
	var bri = map(ecosystem.points, 200, 400, 45, 45);
	if(ecosystem.points<=200){ sat = 65; bri = 45; }
	else if(ecosystem.points>=400){ sat = 10; bri = 45; }
	this.fill = "hsla(290, "+sat+"%, "+bri+"%, 1)";
	this.stroke = "hsla(290, "+sat+"%, "+(bri-5)+"%, 1)";

}

Rock.prototype = Object.create(Component.prototype);

Rock.prototype.draw = function(){
	if(this.hover){
		alertBox.innerHTML = "Just a rock.";
	} 
	fill(this.fill);
	stroke(this.stroke);
	ellipse(this.x, this.y, this.w, this.h*2, 180, 360);
	ellipse(this.x, this.y, this.w, this.h*2, 180, 360);
	ellipse(this.x, this.y, this.w, this.h*2, 180, 360);
};

//////////////////////////////////////////////////////////////////// BUSH

function Bush(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "bush";
	var bri = map(ecosystem.points, 200, 400, 60, 40);
	var sat = map(ecosystem.points, 200, 400, 100, 40);
	if(ecosystem.points<=200){ bri = 60; sat = 100; }
	else if(ecosystem.points>=400){ bri = 40; sat = 40; }
	this.fill = "hsla(360, "+sat+"%, "+bri+"%, 1)";
	this.stroke =  "hsla(368, "+sat+"%, "+(bri+10)+"%, 1)";
}

Bush.prototype = Object.create(Component.prototype);

Bush.prototype.draw = function(){
	fill(this.fill);
	stroke(this.stroke);
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};

//////////////////////////////////////////////////////////////////// FLOWER

function Flower(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "flower";
	var hue = 27+random(-20,20);
	var sat = map(ecosystem.points, 200, 400, 100, 40);
	var bri = map(ecosystem.points, 200, 400, 70, 50) + random(-10, 10);
	if(ecosystem.points<=200){ bri = 60; sat = 100; }
	else if(ecosystem.points>=400){ bri = 40; sat = 40; }
	this.fill = "hsla("+hue+", "+sat+"%, "+bri+"%, 1)";
	this.stroke =  "hsla(358, "+sat+"%, "+(bri+10)+"%, 1)";
	this.picked = false;

	this.flowerCount = random(3,5);
	this.stemLengths = [];
	this.stemOffsets = [];
	this.flowerSizes = [];
	for(var i=0; i<this.flowerCount; i++){
		this.stemLengths[i] = random(30,100);
		this.stemOffsets[i] = random(-45,45);
		this.flowerSizes[i] = random(15,30);
	}
}

Flower.prototype = Object.create(Component.prototype);

Flower.prototype.update = function(){
	if(this.hover){
		if(mouseClicked){ 
			this.picked = true; 
			ecosystem.flowers -= 1;
		}
		if(!this.picked){
			alertBox.innerHTML = "Please don't pick the flowers!";
		}else{
			alertBox.innerHTML = "This <span class='italic'>used</span> to be a flower.";
		}
	} 
};

Flower.prototype.draw = function(){
	for(var i=0; i<this.flowerCount; i++){
		this.drawStem(this.x, this.y, this.x+this.stemOffsets[i], this.y-this.stemLengths[i], this.flowerSizes[i]);
	}
};

Flower.prototype.drawStem = function(x1, y1, x2, y2, r){
	stroke(this.stroke);
	noFill();
	if(!this.picked){
		line(x1, y1, x2, y2);
		fill(this.fill);
		ellipse(x2, y2, r, r, 0, 360);
	}else{
		var a = (x2-x1)/2;
		var b = (y1-y2)/2;
		line(x1, y1, x1+a, y2+b);
	}
};
//////////////////////////////////////////////////////////////////// PLANT

function Plant(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "plant";
	var bri = map(ecosystem.points, 200, 400, 60, 40);
	var sat = map(ecosystem.points, 200, 400, 100, 80);
	var hue = map(ecosystem.points, 200, 400, 60, 40);
	if(ecosystem.points<=200){ bri = 60; sat = 100; hue = 60; }
	else if(ecosystem.points>=400){ bri = 40; sat = 80; hue = 40; }
	this.fill = "hsla("+hue+", 100%, "+bri+"%, 1)";
	this.stroke =  "hsla("+(hue-5)+", 100%, "+bri+"%, 1)";
}

Plant.prototype = Object.create(Component.prototype);

Plant.prototype.draw = function(){
	stroke(this.stroke);
	line(this.x+this.w/2, this.y, this.x+this.w/2, this.y-this.h);
	fill(this.fill);
	ellipse(this.x+this.w/2, this.y-this.h+30, 25, 25, 0, 360);
	ellipse(this.x+this.w/2, this.y-this.h+15, 18, 18, 0, 360);
	ellipse(this.x+this.w/2, this.y-this.h+5, 10, 10, 0, 360);
};


//////////////////////////////////////////////////////////////////// GRASS

function Grass(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "grass";

	var sat = map(ecosystem.points, 200, 400, 100, 10);
	if(ecosystem.points<=100){ sat = 100; }
	else if(ecosystem.points>=400){ sat = 10; }
	this.stroke =  "hsla(290, "+sat+"%, 30%, 1)";

	this.bladeCount = random(2,5);
	this.bladeLengths = [];
	for(var i=0; i<this.bladeCount; i++){
		this.bladeLengths[i] = random(5,20);
	}
}

Grass.prototype = Object.create(Component.prototype);

Grass.prototype.draw = function(){
	stroke(this.stroke);
	for(var i=0; i<this.bladeCount; i++){
		line(this.x-(i*7), this.y, this.x-(i*7), this.y-this.bladeLengths[i]);
	}
};
