/*
* Laurie Waxman
* 2016.04.17 
*
* www.flandill.net
* flandill.js: reads from the server, iterates, saves back to server.
* !!! must be called seperately from reset.js
*/


var critters = []; 
var deebs = [];
var ecosystem = {};
var bgFill; 
var jsonData = {};
var mouseClicked = false;

var alertBox = document.getElementById("alertBox");

//on page load, get data from server.
window.onload = function(){
  console.log("loading flandill");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', '../php/creatures.json');
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var eco = JSON.parse(xmlhttp.responseText);
      jsonData = JSON.parse(xmlhttp.responseText);
      //set
      ecosystem.points = eco.points+20; 
      ecosystem.points = 400; 
      ecosystem.flowers = 100; 
      ecosystem.visitors = eco.visitors+1; 
      ecosystem.archive = 0;
      var today = new Date();
      ecosystem.lastVisit = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear(); 
      if(ecosystem.points<=0){ ecosystem.points = 0; }

      ecosystem.critters = [];
      addToEcosystem(eco, ecosystem);

      bgFill = bgTexture(ecosystem.points);
      console.log("points", ecosystem.points);
      console.log("lastVisit", ecosystem.lastVisit);
      console.log("archive", ecosystem.archive);
      console.log("visitors", ecosystem.visitors);

      document.getElementById("loading").style.opacity = "0";
    }
  };
  xmlhttp.send();
};

window.onmousedown = function(){
  mouseClicked = true;
};
window.onmouseup = function(){
  mouseClicked = false;
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
    }else{
      document.getElementById("alertBox").innerHTML = "...";
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
  jsonData.points = ecosystem.points; 
  jsonData.visitors = ecosystem.visitors; 
  jsonData.lastVisit = ecosystem.lastVisit; 
  jsonData.archive = ecosystem.archive; 
  jsonData.flowers = ecosystem.flowers; 

  for(var c=0; c<ecosystem.critters.length; c++){
    if(ecosystem.critters[c].type == "deeb"){
      var thisIndex = ecosystem.critters[c].index;
      jsonData.critters[thisIndex] = ecosystem.critters[c];
    }
  } 
  //save back to server
  var xmlhttp = new XMLHttpRequest();
  // var data = "test="+JSON.stringify(jsonData);
  var data = "data="+JSON.stringify(jsonData);
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

