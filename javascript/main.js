function InputOut() {
  const input = document.getElementById('CustumUpdate');
  const inputText = document.getElementById('inputText');
  inputText.textContent = input.value || 'Hello';
}

//============ FONTS CHANGE ========
function homeFont(fontStyle) {
  var textElement = document.getElementById('inputText');
  textElement.style.fontFamily = fontStyle;
}

// change images 

let bigImg = document.querySelector('.main-image img');
function showImg(pic) {
  bigImg.src = pic;
}

// drag text

let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false;

//Events Object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

//Detech touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

//Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  //Start movement
  moveElement = true;
});

//Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

//mouse up / touch end
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});



// chnage color in js

function whiteColor() {
  var textElement = document.getElementById('outputText');
  textElement.style.color = 'rgb(255, 255, 255)';
}

function goldenColor() {
  var textElement = document.getElementById('outputText');
  textElement.style.color = 'rgb(223, 181, 54)';
}

function silverColor() {
  var textElement = document.getElementById('outputText');
  textElement.style.color = 'rgb(186, 186, 186)';
}

function blackColor() {
  var textElement = document.getElementById('outputText');
  textElement.style.color = 'rgb(0, 0, 0)';
}



// swiper testomonials

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});