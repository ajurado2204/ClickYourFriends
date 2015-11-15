var buttonImages = document.getElementsByTagName('button');
var startButton = document.getElementById("start");
var counter = 0;

startButton.addEventListener("click", beginGame);

function beginGame(){
	startButton.style.visibility = 'hidden';
	setTimeout(disableFunc, 20000);

	for(var i = 0; i < buttonImages.length; i++){
  	buttonImages[i].addEventListener("click", clickCounter);  
	}
}

function clickCounter(){
	if(event.currentTarget.value == "unclicked"){
				counter = counter + 1;
				event.currentTarget.value = "clicked"
	 		}else{
	 			console.log(counter);		  		
	 		}
}

function disableFunc(){
	alert("You clicked " + counter + " of your friends!!");
	startButton.style.visibility = 'visible';
	counter = 0;

	for(var i = 0; i < buttonImages.length; i++){
		if(buttonImages[i].id != "start"){
  		buttonImages[i].value = "unclicked";  
  	}
	}
}
