// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const hearts = document.querySelectorAll(".like-glyph");
for (const heart of hearts) {
  heart.addEventListener("click", heartClicked)
}

function heartClicked(e) {
  let heartnode = e.target
  mimicServerCall("URL")
    .then (function(serverMessage) {
      changeHeart(heartnode)
      return serverMessage
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
      console.log(error.message);
    });
}

function changeHeart(targetNode) {
  let h = targetNode.textContent;

  if (h === FULL_HEART) {
    targetNode.textContent = EMPTY_HEART;
    targetNode.style.color = "";
  } else {
    targetNode.textContent = FULL_HEART;
    targetNode.style.color = "red";
  }
}









//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
