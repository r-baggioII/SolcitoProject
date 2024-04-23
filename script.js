// Get a reference to the container element
var container = document.getElementById('animationContainer');

// Specify the path to your JSON file
var animationData = 'animation.json';

// Load the animation
var anim = lottie.loadAnimation({
  container: container, // Specify the container for the animation
  renderer: 'svg', // Specify the renderer
  loop: true, // Set loop to true if you want the animation to loop
  autoplay: true, // Set autoplay to true to start the animation immediately
  path: animationData // Specify the path to the animation JSON file
});

const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)