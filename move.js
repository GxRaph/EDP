const square = document.getElementById('square'); //Gets my square element ID from html and sets it as a constant 


let positionX = 0; //Sets the variables for the position of the X direction. left and right
let positionY = 0; //Sets the position of the Y direction, up and down
let speedX = 5; // Sets variable for the speed in the X direction
let speedY = 5; // Sets variable for the speed in the Y direction
let animationId; //Sets the variable for my animation

function animateSquare() {          // Instructions to move my square up and down, left and right at my set speed and direction as the function animateSquare
    positionX += speedX;            //This updates the horizontal position    
    positionY += speedY;            //Updates vertical position     
    square.style.left = positionX + "px";   //Moves square left and right in pixel units. Sets CSS "left" property to enter the squares new position X in pixel units.
    square.style.top = positionY + "px";    //Moves square up and down. Sets CSS top property to equal the squares new position "positionY"
    
    // These get the dimensions of the square and the viewport. Basically setting my barriers so my square doesnt move out of the users viewpoint.
    const squareWidth = square.offsetWidth;
    const squareHeight = square.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (positionX <= 0 || positionX + squareWidth >= viewportWidth) { //Checks if the square collides with the side edges. X measures horizontal movement, like a graph.
        speedX = -speedX;                                          // Reverses the X direction if the square hits the barrier 
    }

    if (positionY <= 0 || positionY + squareHeight >= viewportHeight) {  // Checks if the square hits the top or bottom edge. Y measures vertical movement.
        speedY = -speedY;                                   // Reverses the Y direction if square collides with top or bottom.
    }
    
    animationId = requestAnimationFrame(animateSquare);     //The ID to call for the request to animate the square. 
}
requestAnimationFrame(animateSquare);                          //Request to make the square move with the function animateSquare

animateSquare();                                            //Updates the squares position

const stop = document.getElementById("stopButton");         //This gets the ID for my stop button
stopButton.addEventListener("click", function(){            //When the stop button is clicked, start the function vvv
    cancelAnimationFrame(animationId);                      //Cancels the request animation frame to animate the square. slows it down/stops

});
const startButton = document.getElementById("startButton"); //This gets my button ID
startButton.addEventListener("click", function(){           //When the start button is clicked, function
    animateSquare();                                        //Starts animation, increases speed 
});
