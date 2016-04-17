
//////////////////////////////////////////////////////////////////// ROCK

function Rock(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "rock";
}

Rock.prototype = Object.create(Component.prototype);

Rock.prototype.draw = function(){
	fill("#8933FF");
	stroke("#C55EFF");
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};

//////////////////////////////////////////////////////////////////// BUSH

function Bush(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "bush";
}

Bush.prototype = Object.create(Component.prototype);

Bush.prototype.draw = function(){
	fill("#FF2D00");
	stroke("#FF7C1F");
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};

//////////////////////////////////////////////////////////////////// FLOWER

function Flower(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "bush";
}

Flower.prototype = Object.create(Component.prototype);

Flower.prototype.draw = function(){
	fill("#FF0600");
	stroke("#FF9696");
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};

//////////////////////////////////////////////////////////////////// PLANT

function Plant(x, y, w, h){
	Component.call(this, x, y, w, h);
	this.type = "bush";
}

Plant.prototype = Object.create(Component.prototype);

Plant.prototype.draw = function(){
	fill("#FFF300");
	stroke("#FFC100");
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};
