$(document).ready(function(){

	// Global Variables
	var buttonImages = document.getElementsByClassName('friend');
	var startButton = document.getElementById("start");
	var counter = 0;

	//Begins Game on Click of Start Button

	startButton.addEventListener("click", beginGame);

	function beginGame(){
		startButton.style.visibility = 'hidden';
		setTimeout(function(){resetGame();}, 20000);

		for(var i = 0; i < buttonImages.length; i++){
			buttonImages[i].disabled = false;
	  	buttonImages[i].addEventListener("click", clickCounter);  
		}
	}

	//Function to Counts Number of Clicks

	function clickCounter(){
		if(event.currentTarget.value == "unclicked"){
			counter = counter + 1;
			event.currentTarget.value = "clicked";
		 }
	}

	//Function to Show Results and to reset Game

	function resetGame(){
		document.getElementById("clickTotal").innerHTML = counter;
		$('#myModal').modal('show');
		
		startButton.style.visibility = 'visible';
		counter = 0;

		for(var i = 0; i < buttonImages.length; i++){
			if(buttonImages[i].id != "start"){
	  		buttonImages[i].value = "unclicked";  
	  		buttonImages[i].disabled = "disabled";
	  	}
		}
	}
});