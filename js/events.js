$(document).ready(function(){

	// Global Variables
	var buttonImages = document.getElementsByClassName('friend');
	var startButton = document.getElementById("start");
	var counter = 0;
  var secondsLeft = 20;

	//Begins Game on Click of Start Button

	startButton.addEventListener("click", beginGame);

	function beginGame(){
		startButton.style.visibility = 'hidden';

		setTimeout(function(){resetGame();}, 20000);

    secondsLeft = 20;
    id = setInterval(function() {
      secondsLeft--;
      if(secondsLeft < 0) {
      } else {
        document.getElementById("timer").innerHTML = secondsLeft;
        for(var i = 0; i < buttonImages.length; i++){
          buttonImages[i].disabled = false;
          buttonImages[i].addEventListener("click", clickCounter);
        }
      }

    }, 1000);

	}

	//Function to Counts Number of Clicks

	function clickCounter(){
		if(event.currentTarget.value === "unclicked"){
			counter = counter + 1;
			event.currentTarget.value = "clicked";
      document.getElementById("clickTotalDisplay").innerHTML = counter;
		 }
	}

	//Function to Show Results and to reset Game

	function resetGame(){
		document.getElementById("clickTotal").innerHTML = counter;

    $('#myModal').modal({
      backdrop: 'static',
      keyboard: true
    });

    $('#play-again').on('click', function(){
      location.reload();
    });
	}
});