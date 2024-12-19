
const allButton = document.querySelectorAll("button")



function keySelector(key){
    switch(key){
        case "w":
            playAudio("tom-1");
        break;
        case "a":
            playAudio("tom-2");
        break;
        case "s":
            playAudio("tom-3");
        break;
        case "d":
            playAudio("tom-4");
        break;
        case "j":
            playAudio("snare");
        break;
        case "k":
            playAudio("crash");
        break;
        case "l":
            playAudio("kick-bass");
        break;
        default:
            console.log("Wrong key")
        break;

    }
}

//Plays the correct audio on a certain action
function playAudio(instName){
    let audio = new Audio("./sounds/"+instName+".mp3");
    audio.play();
}
//Play animation on passed key
function buttonAnimation(key){
    let activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(()=>{activeButton.classList.remove("pressed")},100);
}

//Key press event
document.addEventListener("keydown", function(event) {
    keySelector(event.key);
    buttonAnimation(event.key);
    
});

//click event
for(items in allButton){
    allButton[items].addEventListener("click", function() {
        keySelector(this.innerHTML);
        buttonAnimation(this.innerHTML);

});

}



