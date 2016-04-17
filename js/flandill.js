
var critters = []; 
var deebs = [];
var ecosystem = {};
ecosystem.points = 100; 

window.onload = function(){
  console.log("loading flandill");

  var i;
  for(i = 0; i < 10; i++) {
    var b = new Deeb(random(0,width), random(0,height), random(120, 170), random(120,180));
    critters.push(b);
    deebs.push(b);
  }

  for(i = 0; i < 10; i++) {
    var r = new Rock(random(0,width), random(0,height), random(100,160), random(80,150));
    critters.push(r);
  }

};

setInterval(function(){
  background("#deebee");

  critters.sort(function(obj1, obj2){
    return obj1.y - obj2.y;
  });

  critters.forEach( function(critter) {
    critter.update();
  });

  critters.forEach( function(critter) {
    critter.draw();
  });
}, 50);
