$(document).ready(function(){
    $(".bookbtn").click(function(){
      $(".book-main").show();
      $(".manage-main").hide();
      $(".checkin-main").hide();
      $(".flightstatus-main").hide();
    });
  });

  $(document).ready(function(){
    $(".managebtn").click(function(){
      $(".manage-main").show();
      $(".book-main").hide();
      $(".checkin-main").hide();
      $(".flightstatus-main").hide();
    });
  });

  $(document).ready(function(){
    $(".checkinbtn").click(function(){
      $(".manage-main").hide();
      $(".book-main").hide();
      $(".checkin-main").show();
      $(".flightstatus-main").hide();
    });
  });
  $(document).ready(function(){
    $(".flightstatusbtn").click(function(){
      $(".manage-main").hide();
      $(".book-main").hide();
      $(".checkin-main").hide();
      $(".flightstatus-main").show();
    });
  });


$(document).ready(function(){
    $(".bookbtnmob").click(function(){
        $(".bookingmob").toggle();
    })
})
$(document).ready(function(){
    $(".managebtnmob").click(function(){
        $(".managemob").toggle();
    })
})
$(document).ready(function(){
    $(".checkinbtnmob").click(function(){
        $(".checkmob").toggle();
    })
})
$(document).ready(function(){
    $(".flightstatusbtnmob").click(function(){
        $(".fltstatusmob").toggle();
    })
})

$(document).ready(function(){
    $("#btnnav").click(function(){
        $(".carouselmob").hide();
    })
})

$(document).ready(function(){
    $("#btnclose").click(function(){
        $(".carouselmob").show();
    })
})



document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('nav-mob');

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 0);
    });
});





// -----------------------------------------carousel autoplay------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider li');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('current', 'prev');
            if (i === index) {
                slide.classList.add('current');
            } else if (i === index - 1 || (index === 0 && i === totalSlides - 1)) {
                slide.classList.add('prev');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 6000);
});

// -----------------------------------------------textbox transition------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const textBox = document.getElementById('text-box');

    const texts = ['falcon', 'baggage', 'Information', 'Transit'];
    let index = 0;

    function animateText() {
      const currentText = texts[index];
      typeText(' You can search for ', textBox, currentText, 0, () => {
        setTimeout(() => {
          backspace(textBox, currentText.length, () => {
            index = (index + 1) % texts.length;
            animateText(); // Call the function recursively
          });
        }, 2000);
      });
    }

    function typeText(prefix, element, text, index, callback) {
      let value = prefix;
      const intervalId = setInterval(() => {
        value += text[index];
        element.value = value;
        index++;
        if (index === text.length) {
          clearInterval(intervalId);
          if (callback) callback();
        }
      }, 150); // Adjusted speed to 150ms
    }

    function backspace(element, count, callback) {
      let value = element.value;
      const intervalId = setInterval(() => {
        value = value.slice(0, -1);
        element.value = value;
        count--;
        if (count === 0) {
          clearInterval(intervalId);
          if (callback) callback();
        }
      }, 100); // Original speed maintained at 100ms
    }

    // Start the animation loop
    animateText();
  });



