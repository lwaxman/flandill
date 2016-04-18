/*
* www.flandill.net
* reset.js: when called, resets the json file.
* !!! must be called seperately from flandill.js
*/


function reset(){
	ecosystem.points = 100;
	ecosystem.visitors = 0;
	ecosystem.lastVisit = "16/4/2016";
	ecosystem.archive = 0; 
	ecosystem.critters = [];
	var names = ["Buffy", "Willow", "Xander", "Giles", "Angel", "Spike", "Cordelia", "Oz", "Tara", "Dawn", "Anya", "Joyce", "Jonathan", "Glory", "Malcolm", "Kaylee", "Zoe", "Wash", "Jayne", "Inara", "Simon", "River", "Shepherd", "Paul", "John", "Ringo", "George", "Lorelai", "Rory", "Jess", "Dean", "Luke", "Max", "Paris", "Sookie", "Ms. Patty", "Lane", "Michel", "Kirk", "Digger", "Taylor", "Marty", "Logan", "Christopher", "Emily", "Richard", "Maxmilian", "Benji", "Jon", "Keith", "Milena", "Andre", "Little Max", "Talia", "Eric", "Melissa", "Eloise", "Mark", "Tom", "Travis", "Dan", "Phil", "Julian", "Nikolai", "Fabrizio", "Nick", "Albert", "James Tiberius", "Spock", "McCoy", "Uhura", "Scotty", "Sulu", "Chekov", "Bartlet", "Leo", "Josh", "Toby", "Donna", "Charlie", "CJ", "Mandy", "Amy", "JD", "Turk", "Elliot", "Carla", "Kelso", "Perry", "Janitor", "Laverne", "Rose", "Mickey", "Jack", "Donna", "Martha", "River Song", "Amy ", "Rory", "Clara Oswin", "The Doctor", "Ten", "Eleven", "Twelve", "Thirteen", "Frodo", "Sam", "Merry", "Pippin", "Aragorn", "Boromir", "Faramir", "Legolas", "Eowyn", "Arwen", "Gimli", "Gandalf", "Elrond", "Galadriel", "Bombadil", "Saruman", "Bilbo", "Fëanor", "Lúthien", "Eru", "Ilúvatar", "Fingolfin", "Beren", "Luthien", "Thingol", "Elendil", "Elwing", "Isildur", "Glorfindel", "Sauran", "Harry ", "Ron", "Hermione", "Neville", "Drako", "Volde", "Rachel", "Bucky", "Elizabeth", "McKibben", "Lanier", "Rushkoff", "Walden", "Mars", "Jupiter", "Pluto", "Neptune", "Uranus", "Mercury", "Saturn", "Venus", "Galifrey", "Moon Moon", "Idgy Dean", "Debbie", "Black", "Biersack", "Tommy", "Joey", "Dee Dee", "Marky", "Johnny", "Richie", "Clem", "Jack", "Meg", "Mercer", "Brian", "Brandon", "Win", "Will", "Billy", "Regine", "Pink", "Ariel", "Mayberry", "Clif", "Colin", "Bowie", "Donnie", "Zach", "Elton", "Marshall", "Stevie", "Fleetwood", "Monty", "Zilla", "Zubin", "Muska", "Lee", "Wolfgang", "Lesley", "Jesusita", "Layne", "Efren", "Daron", "Jennell", "Sheridan", "Letisha", "Demetria", "Etha", "Eva", "Hee", "Annett", "Janella", "Tynisha", "Cathrine", "Terisa", "Jesusa", "Jeane", "Yvone", "Carmelina", "Isaias", "Gertude", "April", "Lisabeth", "Sook", "Kayce", "Edythe", "Otto", "Lelah", "Latrina", "Klara", "Anderson", "Signe", "Kathrin", "Leoma", "Raul", "Katherina", "Andree", "Nelida", "Maryann", "Kamilah", "Celine", "Cathern", "Nohemi", "Ethelyn", "Manie", "Donovan", "Elayne", "Kathlyn", "Laima", "Elena", "Linnea", "Kanisha", "Vita", "Ruthann", "Thaddeus", "Joanna", "Glennis", "Zena", "Dagny", "Rosita", "Jadwiga", "Debi", "Terence", "Willy", "Kymberly", "Jacinto", "Raelene", "Renata", "Rebekah", "Myrtice", "Delmer", "Lakenya", "Martina", "Leighann", "Elinor", "Nan", "Anastasia", "Kiley", "Akilah", "Hugh", "Lincoln", "Jestine", "Quentin", "Darrell", "Vicenta", "Dustin", "Candra", "Shea", "Agatha", "Cordia", "Henriette", "Jade", "Alberto", "Dotty", "Effie", "Macie", "Timmy", "Roxanna", "Karl", "Chana", "Mana", "Bette", "Hosea", "Ona", "Kitty", "Marnie", "Abby", "Greg", "Senaida", "Matha", "Laree", "Desiree", "Roderick", "Loyce", "Rossie", "Thersa", "Karoline", "Annie", "Socorro", "Weldon", "Antoinette", "Freeman", "Harvey", "Pamula", "Pura", "Lucrecia", "Corina", "Jaye", "Lashay", "Kyle", "Alyssa", "Dawn", "Dedra", "Syble", "Ashlyn", "Sarah", "Judy", "Pok", "Geth", "Ismael", "Vern", "Werner", "Elvira", "Charline", "Jarvis", "Becky", "Carlo", "Hiedi", "Vance", "Juliette", "Marylin", "Rosena", "Tinisha", "Camilla", "Aiko", "Jacquie", "Jone", "Roonie", "Leatrice", "Emilie", "Spring", "Teodoro", "Tai", "Normand", "Cristin", "Euna", "Lester", "Ashanti", "Booker", "Margo", "Lyman", "Yetta", "Audrey", "Kellee", "Daria", "Pennie", "Bryanna", "Lulu", "Marcelo", "Kelley", "Gerda", "Ricky", "Nenita", "Kathlene", "Geoffrey", "Laureen", "Kit", "Maxie", "Hollis", "Weston", "Janey", "Randy", "Pat", "Lisha", "Ginette", "Dane", "Temple", "Hermina", "Sherill", "Chris", "Shannon", "Bluvband"];

	var i;
	for(i = 0; i < 400; i++) {
		// console.log("creating deeb", i);
		var d = new Deeb(random(0,width), random(0,height,false), random(120, 170), random(120,160));
		d.name = names[i];
		d.index = i; 
		console.log(d.name, d.index);
		ecosystem.critters.push(d);
	}	
	// return ecosystem;

	var xmlhttp = new XMLHttpRequest();
  	var data = "data="+JSON.stringify(ecosystem);
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
}

var ecosystem = {};
reset();