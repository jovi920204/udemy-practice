var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio;
        var key = this.textContent;
        if (key === "w"){
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }
        if (key === "a"){
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
        }
    });
}
