$(document).ready(function () {
	"use strict";
	var i = 0,
		myTimer,
		images = ['3a.jpg', '1.jpg', '5.jpg', '2.jpg'],
		image = $('.div1'),
		ImgPath = "images/bg/" //The file path to your images
                //Initial Background image setup
	image.css('background-image', 'url(images/bg/4.jpg)');

                //Change image at regular intervals
    myTimer = setInterval(changeBackground, 6000);

   function changeBackground() {
         image.fadeOut(1000, function () {
            image.css('background-image', 'url('+ ImgPath + images[i++] +')');
            image.fadeIn(1000);
         });
         if(i == images.length) {
            i = 0;
         }
   }

	  // Optional code to hide all divs
        $(".content").hide();
          // Show chosen div, and hide all others
       $(".one, .two, .three").click(function (e) {
         e.preventDefault();
         if($(this).is(".one") || $(this).is(".two")) {
            if (myTimer) {
               clearInterval(myTimer);
            }
         }
         else {
            $(".content").hide();
            myTimer = setInterval(changeBackground, 6000);
         }
         $("#" + $(this).attr("class")).removeClass("hide").fadeIn("slow").siblings('.content').hide();
   });

});
