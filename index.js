// Get the number of drum buttons
var numOfDrumBtns = document.querySelectorAll("button").length;

// Add click event listeners to drum buttons
for (var i = 0; i < numOfDrumBtns; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // Get the text content of the clicked button
        var buttonText = this.textContent;

        // Call functions to handle button click
        detectDrumLetter(buttonText);
        buttonAnimation(buttonText);
    });
}

// Add keydown event listener to the document
document.addEventListener("keydown", function (keyboardLetter) {
    // Extract the pressed key from the event object
    var letter = keyboardLetter.key;

    // Call functions to handle key press
    detectDrumLetter(letter);
    buttonAnimation(letter);
});

// Function to handle drum letter detection
function detectDrumLetter(keyPar) {
    switch (keyPar) {
        case 'w':
            // Play corresponding audio for 'w'
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case 'l':
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(buttonText);
    }
}

// Function to handle button animation
function buttonAnimation(currentKey) {
    // Get the active button by its class
    var activeBtn = document.querySelector("." + currentKey);

    // Add 'pressed' class for animation
    activeBtn.classList.add("pressed");

    // Remove 'pressed' class after a delay
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 400);

    // Check if all buttons are pressed
    var allBtnsPressed = true;
    for (var i = 0; i < numOfDrumBtns; i++) {
        if (!document.querySelectorAll("button")[i].classList.contains("pressed")) {
            allBtnsPressed = false;
        }
    }

    // If all buttons are pressed
    if (allBtnsPressed) {
        // Add 'game-over' class to the last child of the document
        document.documentElement.lastElementChild.classList.add("game-over");

        // Hide all drum buttons
        for (var i = 0; i < numOfDrumBtns; i++) {
            document.querySelectorAll("button")[i].style.display = "none";
        }

        // Hide additional elements
        document.querySelector("p").style.display = "none";
        document.querySelector("footer").style.cssText = "display: none !important;";

        // Display a message
        document.querySelector("h1").innerHTML = "Incredible speed! 🚀 <br />You're nailing it!";
        document.querySelector("h1").classList.add("newH1");

        // Create a restart button
        var restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart";
        restartBtn.classList.add("restart");
        
        // Insert the restart button after the h1 element
        document.body.insertBefore(restartBtn, document.querySelector("h1").nextSibling);

        // Add click event listener to the restart button
        document.querySelector(".restart").addEventListener("click", function () {
            // Remove additional classes and elements
            document.querySelector("h1").classList.remove("newH1");
            document.querySelector(".restart").remove();

            //change h1 back
            document.querySelector("h1").innerHTML = "Drum 🥁 Kit";

            // Show all drum buttons
            for (var i = 0; i < numOfDrumBtns; i++) {
                document.querySelectorAll("button")[i].style.display = "inline-block";
            }

            // Show additional elements
            document.querySelector("p").style.display = "block";
            document.querySelector("footer").style.cssText = "display: flex !important";

            // Remove the 'game-over' class
            document.body.classList.remove("game-over");
        });
    }
}



