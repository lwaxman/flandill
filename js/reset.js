function reset(eco){
	eco.points = 100;
	eco.visitors = 0;
	eco.lastVisit = "16/4/2016";
	eco.archive = 0; 
	eco.critters = [];
	var i;
	for(i = 0; i < 10; i++) {
		var d = new Deeb(random(0,width), random(0,height), random(120, 170), random(120,160));
		eco.critters.push(d);
	}
	for(i = 0; i < 10; i++) {
		var r = new Rock(random(0,width), random(0,height), random(100,160), random(80,150));
		eco.critters.push(r);
	}	

	return eco;
}