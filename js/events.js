$(document).ready(function(){

	// GLobal Variable
	var buttonImages = document.getElementsByTagName('button');
	var startButton = document.getElementById("start");
	var counter = 0;

	//Begins Game on Click of Start Button

	startButton.addEventListener("click", beginGame);

	function beginGame(){
		startButton.style.visibility = 'hidden';
		setTimeout(function(){disableFunc();}, 20000);

		for(var i = 0; i < buttonImages.length; i++){
			buttonImages[i].disabled = false;
	  	buttonImages[i].addEventListener("click", clickCounter);  
		};
	};

	//Function to Counts Number of Clicks

	function clickCounter(){
		if(event.currentTarget.value == "unclicked"){
			counter = counter + 1;
			event.currentTarget.value = "clicked"
		 }else{
		 		console.log(counter);		  		
		 	};
	};

	//Function to Show Results and to reset Game

	function disableFunc(){
		$('#myModal').modal('show');
		//alert("You clicked " + counter + " of your friends!!");
		startButton.style.visibility = 'visible';
		counter = 0;

		for(var i = 0; i < buttonImages.length; i++){
			if(buttonImages[i].id != "start"){
	  		buttonImages[i].value = "unclicked";  
	  		buttonImages[i].disabled = "disabled";
	  	};
		};
	};


});