// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('div#modal');
errorModal.className = "hidden";

document.addEventListener('click', (event) => {

  // console.log(event.path[1].innerText.split('').pop());
  let currentHeart = event.path[1].innerText.split('').pop();

  if (currentHeart == '♡') {
    event.activatedHeart = '♥';
  }
  else if (currentHeart == '♥') {
    event.classList.remove("activateHeart");
  }
})

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
