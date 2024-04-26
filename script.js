var anim;
var heartInterval; // Variable to store the interval ID

function loadAnimation() {
  // Get a reference to the container element
  var container = document.getElementById('animationContainer')
  // Specify the path to your JSON file
  var animationData = 'animation.json';

  // Load the animation 
  anim = lottie.loadAnimation({
    container: container, // Specify the container for the animation
    renderer: 'svg', // Specify the renderer
    loop: true, // Set loop to true if you want the animation to loop
    autoplay: true, // Set autoplay to true to start the animation immediately
    path: animationData // Specify the path to the animation JSON file
  });
}

loadAnimation();

const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}

// Start the interval and store the interval ID
heartInterval = setInterval(createHeart,100);

// Function to stop the heart interval
function stopHeartInterval() {
  clearInterval(heartInterval);
}

setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)

function stopAnimation() {
  if (anim) {
    anim.stop(); // Stop the animation
  }
  // Stop the heart interval
  stopHeartInterval();
}

function showPage(page) {
  var animationContainer = document.getElementById("animationContainer");
  var goBackButton = document.getElementById("goBackButton");

  // Clear previous content and stop animation
  animationContainer.innerHTML = "";
  stopAnimation();
  
  // Show the "Go Back Home" button
  goBackButton.style.display = "inline-block";

  // Load content of each page using AJAX
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          animationContainer.innerHTML = xhr.responseText;
      }
  };
  
  if (page === 'memories') {
      xhr.open("GET", "memories.html", true);
  } else if (page === 'positivity') {
      xhr.open("GET", "positivity.html", true);
  } else if (page === 'music') {
      xhr.open("GET", "music.html", true);
  }
  xhr.send();
}

function goHome() {
  // Reload the page to go back to the home page
  location.reload();
}

