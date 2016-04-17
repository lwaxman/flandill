function Component(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w; 
  this.h = h; 
  this.hover = false;
}

Component.prototype.update = function(){};

Component.prototype.draw = function(){};

Component.prototype.checkHover = function(){
	if(mouseX>this.x-(this.w/2) && mouseX<this.x+(this.w/2) && mouseY<this.y && mouseY>this.y-this.h){
		// if(this.type=="deeb") console.log(this.name);
		return true; 
	}else{
		return false;
	}
};
