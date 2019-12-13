// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("click", function(event) {
  if(event.target.classList.contains("like-glyph")) {
    mimicServerCall()
    .catch(function(error) {
      displayErrorModal(error)
    })
    if (event.target.textContent === EMPTY_HEART) {
      event.target.textContent = FULL_HEART
      event.target.classList.add('activated-heart')
    } else if (event.target.textContent === FULL_HEART) {
      event.target.textContent = EMPTY_HEART
      event.target.classList.remove('activated-heart')
    }
  }
})

function displayErrorModal(error) {
  const errorModal = document.querySelector("#modal")
  errorModal.classList.remove("hidden")
  errorModal.textContent = error
  setTimeout(function() {
    errorModal.classList.add("hidden")
  }, 5000)
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
