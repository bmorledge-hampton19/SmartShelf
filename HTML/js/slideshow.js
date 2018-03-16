
var $frame = $("#slideshow");     // Container for slideshow
var $buttons = $(".button");	// The two buttons
var $ssPictures = $(".ss");             // all the images for the slideshow
var currentPicture;
currentPicture = 0;

$(document).on("click", ".button", function(e){ // Handle the click on a hyperlink

  e.preventDefault();                 // Stop default link behavior

  var button = this.href;                  // Store path to the image of the button

  if (src == ($buttons[0].href)) {		// Determine which button was pressed and change the current picture variable.
    currentPicture = currentPicture - 1;
  } else {
    currentPicture = currentPicture + 1;
  }

  if (currentPicture < 0) {			// Make sure the value for currentPicture is not out of bounds.
    currentPicture = 2;
  } else if (currentPicture > 2) {
    currentPicture = 0;
  }

  var $img;
  var src;
  src = $ssPictures[currentPicture].href;  // Get the reference to the image based on currentPicture.
  $img = $("<img/>");                 // Store empty <img/> element in $img
  
  $ssPictures.removeClass("active");      // Remove active from all thumbs
  $(this).addClass('active');         // Add active to clicked thumb

  $img.attr({                         // Set attributes on <img> element
    'src': src                       // Add src attribute to load image
  });

  $img.on('load',function() {
    $img.css({
      marginLeft: ($(window).width()/1.9 - $img.width()/2),
    });    
  });

  $frame.empty().append($img);
});

$(".button").eq(0).click();