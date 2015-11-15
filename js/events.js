var buttonImages = document.getElementsByTagName('button');
var counter = 0;

for(var i = 0; i < buttonImages.length; i++) {
  buttonImages[i].addEventListener("click", function(event) {
  		if(event.currentTarget.value == "unclicked"){
  			counter = counter + 1;
  			event.currentTarget.value = "clicked"
  		}else{
  			console.log(counter);
  		}
  });  
}