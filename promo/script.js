// $(document).ready(function(){
// 	// Set the interval to be 5 seconds
// 	var t = setInterval(function(){
// 		$("#carousel ul").animate({marginLeft:-320},900,function(){
// 			$(this).find("li:last").after($(this).find("li:first"));
// 			$(this).css({marginLeft:0});
// 		})
// 	},3000);
// });

/*
This is the visible area of you carousel.
Set a width here to define how much items are visible.
The width can be either fixed in px or flexible in %.
Position must be relative!
*/
$(function() {
    $(".rslides").responsiveSlides();
  });
$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: true,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});