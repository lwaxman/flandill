/*
* www.flandill.net
* component.js: the base object for all critters, etc.
*/

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
		return true; 
	}else{
		return false;
	}
};

window.onmousedown = function(){
  mouseClicked = true;
};
window.onmouseup = function(){
  mouseClicked = false;
};

window.onresize = function(){
	document.getElementById("info").style.width = window.innerWidth-200+"px"; 
	document.getElementById("info").style.height = window.innerHeight-200+"px"; 
};