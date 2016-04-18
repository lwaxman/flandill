
function addToEcosystem(eco, ecosystem){
  var points = ecosystem.points;
  var density = Math.round( (width*height/22500) );
  var rockCount = Math.round( density*0.2 );  
  var grassCount = Math.round( density );  
  var flowerCount = Math.round( density*map(points, 400, 0, 0.3, 1.5) );
  var plantCount = Math.round( flowerCount*0.8 );  
  var bushCount = Math.round( density*map(points, 400, 0, 0.2, 0.6) );
  var deebCount = Math.round( density*map(points, 400, 0, 0.2, 0.6) ); 
  for(var i=0; i<deebCount; i++){
    var thisDeeb = eco.critters[ random(0,eco.critters.length-1) ];
    var d = new Deeb(thisDeeb.x, thisDeeb.y, thisDeeb.w, thisDeeb.height);
    d.name = thisDeeb.name;
    d.index = thisDeeb.index; 
    // d.health = thisDeeb.health; 
    ecosystem.critters.push(d);
  }
  for(var b=0; b<bushCount; b++){
    tempBush = new Bush( random(0,width), random(0,height,false), random(100,150), random(100,150) );
    ecosystem.critters.push( tempBush );
  }
  for(var f=0; f<flowerCount; f++){
    var tempFlower = new Flower( random(0,width), random(0,height,false), random(20,50), random(50,150) );
    ecosystem.critters.push( tempFlower );
  }
  for(var p=0; p<plantCount; p++){
    var tempPlant = new Plant( random(0,width), random(0,height,false), random(20,50), random(70,135) );
    ecosystem.critters.push( tempPlant );
  }
  for(var r=0; r<rockCount; r++){
    var tempRock = new Rock( random(0,width), random(0,height,false), random(100,150), random(100,150) );
    ecosystem.critters.push( tempRock );
  }
  for(var g=0; g<grassCount; g++){
    var tempGrass = new Grass( random(0,width), random(0,height), 15, 10 );
    ecosystem.critters.push( tempGrass );
  }
}