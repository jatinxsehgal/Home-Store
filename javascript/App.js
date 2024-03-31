
// swiper 

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        loop: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// neon slider

var swiper = new Swiper(".Neon-container ", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        668: {
            slidesPerView: 4,
        },
        778: {
            slidesPerView: 5,
        },
    }
});


// search pop up 

function openSearch() {
    document.getElementById("searchOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("searchOverlay").style.display = "none";
}





//Get the button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//slider arrivals

var swiper = new Swiper(".Arrival-container ", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        868: {
            slidesPerView: 3,
        },
    }
});


// preloader

setTimeout(function () {
    $('#loader').fadeToggle();
  }, 1000);
  