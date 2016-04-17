function Rock(x, y, w, h){
	Component.call(this, x, y, w, h);
}

Rock.prototype = Object.create(Component.prototype);

Rock.prototype.draw = function(){
	fill("#8933FF");
	stroke("#C55EFF");
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};



function Bush(x, y, w, h){
	Component.call(this, x, y, w, h);
}

Bush.prototype = Object.create(Component.prototype);

Bush.prototype.draw = function(){
	fill("#8933FF");
	stroke("#C55EFF");
	ellipse(this.x, this.y, this.w, this.h, 180, 360);
};
