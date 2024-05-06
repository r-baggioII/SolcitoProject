var anim;
var heartInterval; // Variable to store the interval ID

const messages = ["I love you so much <3 ", "You're amazing!!!", "You make me so happy", "You're such a golden friend", "You deserve the best. ALWAYS","Drink lots of water :)", "You're so beautiful and I can't even...", "YOU'RE SO GORGEUOUS I CAN'T SAY ANYTHING TO YOUR FACE"];
const messageContainer = document.getElementById('message');

let currentMessageIndex = 0;
let index = 0;

function displayNextLetter() {
    const currentMessage = messages[currentMessageIndex];
    if (index < currentMessage.length) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = currentMessage[index];
        letterSpan.style.fontWeight = 'bold'; // Make the letter bold
        messageContainer.appendChild(letterSpan);
        index++;
        setTimeout(displayNextLetter, 200); // Adjust the speed here (milliseconds)
    } else {
        setTimeout(resetMessage, 3000); // Repeat every 5 seconds
    }
}

function resetMessage() {
    messageContainer.textContent = ''; // Clear the message
    index = 0;
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Move to the next message
    displayNextLetter(); // Display the next message
}

displayNextLetter();


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
          // Once the HTML content is loaded, load associated resources
          loadAssociatedResources(page);
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

function loadAssociatedResources(page) {
  if (page === 'memories') {
      loadCSS('memoriesStyles.css');
      loadScript('memoriesScript.js');
  } else if (page === 'positivity'){
      loadCSS('positivityStyles.css'); 
      loadScript('positivityScript.js');
  }
    else if (page == 'music'){
      loadCSS('musicStyles.css'); 
      loadScript('musicScript.js');
  }
}

function loadCSS(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function loadScript(src) {
  var script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
}

function goHome() {
  // Reload the page to go back to the home page
  location.reload();
}

