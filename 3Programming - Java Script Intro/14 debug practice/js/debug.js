//error thrown example
$("body").append("<h1>Hi world!</h1>");

//console.log example, log each of the pies and the index before the switch 
var pies=["Cherry","Pumpkin","Banana","a","Rhubarb"];

$("body").append("There are "+pies.length+" total pies.<br>");

for (i=0; i<pies.length; i++) {
	console.log(`Pie index: ${i}, Pie name: ${pies[i]}`);
}

pies.forEach(function(element,index){
	switch(element){
		case "Cherry": $("body").append(index+1+") "+element+": Yum!<br>");
		break;
		case "a": $("body").append(index+1+") "+element+": ehhhh<br>");
		break;
		case "Rhubarb": $("body").append(index+1+") "+element+": Yuck<br>");
		break;
		case "Banana": $("body").append(index+1+") "+element+": bleh<br>");
		break;
		case "Pumpkin": $("body").append(index+1+") "+element+": meh<br>");
		break;
	}
});

//breakpoint example, put inside the function
function doSomething(){
	$("body").append("<p>Paragraph</p>");
	console.log(myThing);
}

doSomething();