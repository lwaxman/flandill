
function Deeb(x, y, w, h) {
	Component.call(this, x, y, w, h);
	var neg; 
	if(random(0,1)<1){ neg = -1; }else{ neg = 1; }
	this.speed = random( map(ecosystem.points, 0, 400, 3, 1), map(ecosystem.points, 0, 400, 6, 3), false)*neg;
	// this.speed = random(2, 5)*neg;
	this.height = h; 
	if(random(0,1,false)<0.3){
		this.deathPoint = random(250, 400);
	}else{
		this.deathPoint = random(350, 400);
	}
	this.health = random( map(ecosystem.points, 0, 400, 0, 300), map(ecosystem.points, 0, 400, 30, 400) );
	// this.death = this.health;
	this.mouth = random(20, 40);
	this.slugLength =  random(40,70);
	this.slugCount = random(0,10);
	this.state = 1; 
	if(ecosystem.points>=this.deathPoint || this.health>=this.deathPoint){
		this.state = 0; 
	}
	// this.health = this.health
	this.fill1 = deebTexture(this.deathPoint-this.health, 5);
	this.fill2 = deebTexture(this.deathPoint-this.health, 0);
	this.stroke = deebStroke(this.deathPoint-this.health);
	this.type = "deeb";
	this.index = 0;
	this.name = "debby";
	this.hoverText = random(0,3);
	this.eyeSize = random(20,30, false);
}

Deeb.prototype = Object.create(Component.prototype);

Deeb.prototype.update = function() {
  	if(this.state!==0){	
	  	this.slug();
	  	if(this.hover){
	  		this.shakeWithFear();
	  		document.getElementById("alertBox").innerHTML = this.displayHoverText(this.name);
	  	}else{
		  	this.moveDeeb();
	  	}
  	}
};

Deeb.prototype.moveDeeb = function(){
	if(this.speed>0){
		if(this.x>width+this.w){
			this.x = -100; 
			this.y = random(0, height);
		}
	}else if(this.speed<0 ){
		if(this.x<0-this.w){
			this.x = width+100; 
			this.y = random(0, height);
		}
	}
	this.x += this.speed;
};

Deeb.prototype.shakeWithFear = function(){
	this.health += 1;
	if(random(0,1)<1){
		this.x+=3; 
	}else{
		this.x-=3;
	}
	if(mouseClicked){ this.health+=20; }
	if(this.health >= this.deathPoint){
		this.state = 0;
		this.fill1 = deebTexture(this.deathPoint-this.health, 5);
		this.fill2 = deebTexture(this.deathPoint-this.health, 0);
		this.stroke = deebStroke(this.deathPoint-this.health);
	}
	console.log("hover",this.health);
};

Deeb.prototype.displayHoverText = function(name) {
	var text; 
	if(this.hoverText===0){
		text = "Stop that! You're scaring "+name+".";
	}else if(this.hoverText===1){
		text = "Enough! You'll scare "+name+" to death!";
	}else{
		text = "Leave "+name+" alone, you oaf.";
	}
	return text; 
};

Deeb.prototype.slug = function(){
	this.slugCount++;
	var amplitude = 7;
	var y = Math.sin( (this.slugCount/this.slugLength*2*Math.PI)+Math.PI ) * amplitude;
	this.h = this.height+y;
};

Deeb.prototype.draw = function() {
	fill("#00FFEE");
	stroke("#4FE8FF");

	var bodyWidth = this.w + map(this.health, 0, this.deathPoint, 50, -90);
	var eyeSize = map(this.health, 0, this.deathPoint, this.eyeSize, this.eyeSize*0.6);
	var eyeHeight = map(this.health, 100, this.deathPoint, this.h*0.95, this.h*0.75);
	var smile = map(this.health, 100, this.deathPoint, 20, -20);
	var smileWidth = map(this.health, 100, this.deathPoint, this.mouth, this.mouth*0.6);

	stroke(this.stroke);
	fill(this.fill1);
	lump( this.x , this.y, bodyWidth, this.h);
	noStroke();
	fill(this.fill2);
	lump( this.x, this.y-3, bodyWidth*0.75, this.h*0.95);

	//eyes
	for(var i=-2; i<3; i+=4){
		fill("#fff");
		ellipse(this.x+(i*10), this.y-eyeHeight, this.eyeSize, this.eyeSize, 0, 360);
		noStroke();
		fill("#000");
		if(this.state!==0){	
			if(this.hover){
				simpleEllipse(this.x+(i*10), this.y-eyeHeight, this.eyeSize*0.3, this.eyeSize*0.3, 0, 360);
			}else{
				simpleEllipse(this.x+(i*10), this.y-eyeHeight, 3, 3, Math.PI, 2*Math.PI);
			}
		}else{
			var centerX = this.x+(i*10);
			var centerY = this.y-eyeHeight;
			stroke("#666");
			line(centerX-4, centerY-4, centerX+4, centerY+4);
			line(centerX-4, centerY+4, centerX+4, centerY-4);
			noStroke();
		}
	}

	//mouth
	if(this.state!==0){
		noFill();
		stroke("#468287");
		if(!this.hover){			
			if(smile>=-3 && smile<=3){
				line(this.x-(smileWidth/2), this.y-eyeHeight+25, this.x+(smileWidth/2), this.y-eyeHeight+25 );
			}else{
				arc(this.x, this.y-eyeHeight+25, smileWidth, smile, 0, 190);
			}
		}else{
			line(this.x-5, this.y-eyeHeight+25, this.x+5, this.y-eyeHeight+25 );
		}
	}
};
