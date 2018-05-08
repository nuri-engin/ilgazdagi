/* Loader */
//LOADER/SPINNER
$(window).bind("load", function() {

    "use strict";

    $(".spn_hol").fadeOut(2000);
});
/* Loader Ends */

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector(".navbar button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Durduruldu";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Vidyo <br> Duraklat";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Vidyo <br> Oynat";
  }
})
