//declares that game is able to start as soon as its loaded
$(document).ready(function() {
	
	var $randomNumber = $("#randomNumber");

//generate random number at the start of the game
$(document).ready(function(){
	var $randomNumber=Math.floor(Math.random() * 40) + 1;
	$('#result').html($randomNumber); 
	return false;
	});

//generate a number for each gem that when pressed gets 
//added to the total score variable
	
	var $totalScore =$("#score");
	var score = 0;
	var $redGem = $("#redGem");
	var $blueGem = $("#blueGem");
	var $yellowGem =$("#yellowGem");
	var $greenGem =$("#greenGem");
	
$(document).ready(function() {
	$("#redGem").mousedown(function() {
		$("#redGem").height(+200);
		$score= (score + 10).html;



	});
		$("#redGem").mouseup(function(){
			$("#redGem").height(+100);
	});
	});

////generate a number for each gem that when pressed gets 
//added to the total score variable









	});












	//4 functions; each for individual gems


	//random number generater 

	//when clicked, each crystal will generate and display a
	//unique number added to the total score display box 



