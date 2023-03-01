
// Detecing button pressed
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll("button")[index].addEventListener("click",function(){
        var key = this.innerHTML;
        soundListener(key);
        btnAnimation(key);
    });

}

// Detecing keyboard pressed

document.addEventListener("keypress",function(event){
    soundListener(event.key);
    btnAnimation(event.key);
});


function soundListener(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break; 
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;  
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;  
        default : console.log("error");
    }
}

function btnAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();