
function Deeb(x, y, w, h) {
	Component.call(this, x, y, w, h);
	var neg; 
	if(random(0,1)<1){ neg = -1; }else{ neg = 1; }
	this.speed = random(2, 5)*neg;
	this.height = h; 
	if(random(0,1,false)<0.3){
		this.health = random(250, 400);
	}else{
		this.health = random(350, 400);
	}
	this.mouth = random(10, 30);
	this.slugLength =  random(40,70);
	this.slugCount = random(0,10);
	this.fill1 = deebTexture(ecosystem.points, 0);
	this.fill2 = deebTexture(ecosystem.points, 5);
	this.stroke = deebStroke(ecosystem.points);
	this.type = "deeb";
	this.index = 0;
	this.name = "debby";
	this.hoverText = random(0,3);
}

Deeb.prototype = Object.create(Component.prototype);

Deeb.prototype.update = function() {
  	this.moveDeeb();
  	this.slug();
  	if(this.hover){
  		this.shakeWithFear();
  		console.log( this.displayHoverText(this.name) );
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
	if(!this.hover){
		this.x += this.speed;
	}
};

Deeb.prototype.shakeWithFear = function(){
	if(random(0,1)<1){
		this.x+=3; 
	}else{
		this.x-=3;
	}
};

Deeb.prototype.displayHoverText = function(name) {
	var text; 
	if(this.hoverText===0){
		text = "Stop that! You're scaring "+name+".";
	}else if(this.hoverText===1){
		text = "You'll scare "+name+" to death!";
	}else{
		text = "Blah blah stop it blah.";
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

	var bodyWidth = map(ecosystem.points, 400, 100, this.w*0.3, this.w*0.8);
	var eyeHeight = map(ecosystem.points, 400, 100, this.h*0.75, this.h*0.95);
	var smile = map(ecosystem.points, 400, 0, -20, 20);
	var smileWidth = map(ecosystem.points, 400, 0, this.mouth*0.8, this.mouth);

	stroke(this.stroke);
	fill(this.fill1);
	lump( this.x , this.y, bodyWidth, this.h);
	noStroke();
	fill(this.fill2);
	lump( this.x, this.y-3, bodyWidth*0.75, this.h*0.95);

	//eyes
	for(var i=-2; i<3; i+=4){
		fill("#fff");
		ellipse(this.x+(i*10), this.y-eyeHeight, 30, 30, 0, 360);
		noStroke();
		fill("#000");
		if(this.hover){
			simpleEllipse(this.x+(i*10), this.y-eyeHeight, 8, 8, 0, 360);
		}else{
			simpleEllipse(this.x+(i*10), this.y-eyeHeight, 3, 3, Math.PI, 2*Math.PI);
		}
	}

	//mouth
	noFill();
	stroke("#468287");
	if(smile>=-3 && smile<=3){
		line(this.x-(smileWidth/2), this.y-eyeHeight+25, this.x+(smileWidth/2), this.y-eyeHeight+25 );
	}else{
		arc(this.x, this.y-eyeHeight+25, smileWidth, smile, 0, 190);
	}
};
