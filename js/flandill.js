/*
*
*
*
*
* TO DO:
* - map deeb fills to deebs own health, rather than ecosystem
* - save to server properly
* - archive
*
*
*
*/


var critters = []; 
var deebs = [];
var ecosystem = {};
var bgFill; 
var jsonData = {};

//on page load, get data from server.
window.onload = function(){
  console.log("loading flandill");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', '../php/creatures.json');
  xmlhttp.onreadystatechange = function(){

    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var eco = JSON.parse(xmlhttp.responseText);
      jsonData = eco; 

      ecosystem.points = eco.points+20; 
      ecosystem.points = 50; 
      ecosystem.visitors = eco.visitors+1; 
      var today = new Date();
      ecosystem.lastVisit = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear(); 
      if(ecosystem.points<100){ ecosystem.points = 100; }

      ecosystem.critters = [];
      addToEcosystem(eco, ecosystem);

      bgFill = bgTexture(ecosystem.points);
      document.getElementById("loading").style.opacity = "0";

      console.log("points", ecosystem.points);

    }

  };

  xmlhttp.send();

};

//draw
setInterval(function(){
  background(bgFill);

  //sort all critters front-to-back.
  ecosystem.critters.sort(function(obj1, obj2){
    return obj1.y - obj2.y;
  });

  //set all hovers back to false, then
  //set hover to foremost critter.
  ecosystem.critters.forEach( function(critter){ 
    critter.hover = false;
  });
  for(var i=ecosystem.critters.length-1; i>=0; i--){
    var creature = ecosystem.critters[i];
    if(creature.checkHover()) {
      creature.hover = true;
      break;
    }
  }

  //update and draw critters.
  ecosystem.critters.forEach( function(critter) {
    critter.update();
    critter.draw();
  });
}, 50);

// before leaving page, save data back to server. 
window.onbeforeunload = function(){
  for(var c=0; c<ecosystem.critters.length; c++){
    if(ecosystem.critters[c].type == "deeb"){
      var thisIndex = ecosystem.critters[c].index;
      jsonData.critters[ thisIndex ] = critterArray[c];
    }
  } 

  var xmlhttp = new XMLHttpRequest();
  var data = "test="+JSON.stringify(ecosystem);
  // var data = "data="+JSON.stringify(ecosystem);
  xmlhttp.open("POST", "../php/save.php", false);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.setRequestHeader("Content-length", data.length);
  xmlhttp.setRequestHeader("Connection", "close");
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log("done");
    }
  };
  xmlhttp.send(data);
  return null;
};

