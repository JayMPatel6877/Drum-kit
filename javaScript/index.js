// Select all elements with the class "key" and store them in a NodeList
var buttonList = document.querySelectorAll(".key");

// Create audio objects for each sound file
const tom1 = new Audio('sounds/tom-1.mp3');
const tom2 = new Audio('sounds/tom-2.mp3');
const tom3 = new Audio('sounds/tom-3.mp3');
const tom4 = new Audio('sounds/tom-4.mp3');
const crash = new Audio('sounds/crash.mp3');
const kickBass = new Audio('sounds/kick-bass.mp3');
const snare = new Audio('sounds/snare.mp3');

// Add a click event listener to each button in the NodeList
for(let i = 0; i < buttonList.length ; i++){
    buttonList[i].addEventListener("click", handleClick);
}

// Function to handle button clicks
function handleClick(){
    // Get the inner HTML of the clicked button
    var buttonInnerHTML = this.innerHTML;

    // Play the corresponding audio and add animation
    audioPlay(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// Add a keydown event listener to the document
document.addEventListener("keydown", (e) => {
    // Play the corresponding audio and add animation based on the key pressed
    audioPlay(e.key);
    buttonAnimation(e.key);
});

// Function to play the audio based on the input value
function audioPlay (value) {
    // Determine which audio to play based on the value
    switch(value){
        case "w":
            tom1.play();
        break;

        case "a":
            tom2.play();
        break;

        case "s":
            tom3.play();
        break;

        case "d":
            tom4.play();
        break;
        
        case "j":
            crash.play();
        break;

        case "k":
            kickBass.play();
        break;

        case "l":
            snare.play();
        break;

        default:
            // Do nothing if the key/button does not match any case
    }
}

// Function to add animation to the button
function buttonAnimation(currentKey){
    // Select the button element with the id matching the currentKey
    var activeButton = document.querySelector("#" + currentKey);
    if(activeButton){
        // Add the "pressed" class to the button
        activeButton.classList.add("pressed");
        // Remove the "pressed" class after 100 milliseconds
        setTimeout(()=>{
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
