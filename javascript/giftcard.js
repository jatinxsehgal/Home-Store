//changes images

let bigImg = document.querySelector('.main-image img');
function showImg(pic) {
  bigImg.src = pic;
}

// price change in js

document.getElementById('changeButton1').addEventListener('click', function () {
  var image = document.getElementById('changeImg');
  var text = document.getElementById('outputPrice');

  // Change image source
  if (image.src.endsWith('../assets/image/Giftcard/image1.png')) {
    image.src = './assets/image/Giftcard/image1.png';
    text.innerText = '₹ 5,000';
  } else {
    image.src = '../assets/image/Giftcard/image1.png';
    text.innerText = '₹ 5,000';
  }
});


// button 2
document.getElementById('changeButton2').addEventListener('click', function () {
  var image = document.getElementById('changeImg');
  var text = document.getElementById('outputPrice');

  // Change image source
  if (image.src.endsWith('../assets/image/Giftcard/image2.png')) {
    image.src = './assets/image/Giftcard/image2.png';
    text.innerText = '₹ 10,000';
  } else {
    image.src = '../assets/image/Giftcard/image2.png';
    text.innerText = '₹ 10,000';
  }
});

// button 3
document.getElementById('changeButton3').addEventListener('click', function () {
  var image = document.getElementById('changeImg');
  var text = document.getElementById('outputPrice');

  // Change image source
  if (image.src.endsWith('image1.jpg')) {
    image.src = './assets/image/Giftcard/image3.png';
    text.innerText = '₹ 15,000';
  } else {
    image.src = '../assets/image/Giftcard/image3.png';
    text.innerText = '₹ 15,000';
  }
});

// button 4
document.getElementById('changeButton4').addEventListener('click', function () {
  var image = document.getElementById('changeImg');
  var text = document.getElementById('outputPrice');

  // Change image source
  if (image.src.endsWith('image1.jpg')) {
    image.src = './assets/image/Giftcard/image4.png';
    text.innerText = '₹ 20,000';
  } else {
    image.src = '../assets/image/Giftcard/image4.png';
    text.innerText = '₹ 20,000';
  }
});