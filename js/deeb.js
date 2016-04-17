
function Deeb(x, y, w, h) {
	Component.call(this, x, y, w, h);
	var neg; 
	if(random(0,1)<1){ neg = -1; }else{ neg = 1; }
	this.speed = random(2, 5)*neg;
	this.height = h; 
	this.mouth = random(10, 30);
	this.slugLength =  random(40,70);
	this.slugCount = random(0,10);
	console.log(this.height);
}

Deeb.prototype = Object.create(Component.prototype);

Deeb.prototype.update = function() {
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
	// if(!this.hover){
	// 	console.log(this.hover);
	// 	this.x += this.speed;
	// }

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
};
