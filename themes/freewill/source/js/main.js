$(document).ready(function() {
  setupScrolling();
  detectOSForDownloads();
});

function setupScrolling() {
  $(window).scroll(function(){  //As long as the window to scroll to trigger the code below
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //Get height after rolling
    if( scrollt > 40 ){  //Height exceeds the judgment scroll, on display
      $("#gotop").fadeIn(333); //Fade
      $(".navbar").stop().fadeTo(333, 0.2);
    }else{
      $("#gotop").fadeOut(333); //If the return or does not exceed, on a fade. Must add stop () stops before the movie, there would be flashing
      $(".navbar").stop().fadeTo(0, 1);
    }
  });
  $("#gotop").click(function(){ //When you click on the label when using animate within 200 milliseconds, rolled top
    $("html,body").animate({scrollTop:"0px"},200);
  });
  $(".navbar").mouseenter(function(){
    $(".navbar").fadeTo(100, 1);
  });
  $(".navbar").mouseleave(function(){
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
    if ( scrollt > 200) {
      $(".navbar").fadeTo(100, 0.2);
    }
  });
}

function getOSName() {
  var os = "unknown";
  if (~navigator.appVersion.indexOf("Win")) os = "windows";
  else if (~navigator.appVersion.indexOf("Mac")) os = "mac";
  else if (~navigator.appVersion.indexOf("Linux")) os = "linux";
  //else if (~navigator.appVersion.indexOf("X11")) os = "unix";
  return os;
}

function detectOSForDownloads() {
  var os = getOSName();
  if (os != 'unknown') {
    $('.os-unknown').addClass('hidden');
    $('.os-' + os).removeClass('hidden');
  }
}
