$(document).ready(function() {
  detectSvgSupport();
  setupScrolling();
  detectOSForDownloads();
  initializeChineseConversion();
  initializeGitterSidecar();
});

function detectSvgSupport() {
  if (!Modernizr.svg) {
    var images = $('img[data-png-fallback]');
    images.each(function(i) {
      $(this).attr('src', $(this).data('png-fallback'));
    });
  }
}

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
  if (navigator.userAgent.match(/Android/i)) os = "android";
  else if (navigator.userAgent.match(/BlackBerry/i)) os = "blackberry";
  else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) os = "ios";
  else if (navigator.userAgent.match(/webOS/i)) os = "webos";
  else if (navigator.userAgent.match(/Windows Phone/i)) os = "windows-phone";
  else if (~navigator.appVersion.indexOf("Win")) os = "windows";
  else if (~navigator.appVersion.indexOf("Mac")) os = "mac";
  else if (~navigator.appVersion.indexOf("Linux")) os = "linux";
  else if (~navigator.appVersion.indexOf("X11")) os = "unix";
  return os;
}

var rimeSupportedOS = {
  mac: true,
  linux: true,
  windows: true,
};

function detectOSForDownloads() {
  var os = getOSName();
  console.log('os: ' + os);
  if (rimeSupportedOS[os]) {
    $('.os-unknown').addClass('hidden');
    $('.os-' + os).removeClass('hidden');
    $('.downloads .footnote span.hidden').removeClass('hidden');
  }
  // iRimeWithFool
  var today = new Date();
  if (today.getMonth() == 3 && today.getDate() == 1) {
    $('.os-ios').removeClass('hidden');
  }
}

function simplifyTextInPage(simplified) {
  if (simplified) {
    $(document.body).t2s();
    $('#btn-simplify').addClass('simplified');
  } else {
    $(document.body).s2t();
    $('#btn-simplify').removeClass('simplified');
  }
}

function initializeChineseConversion() {
  var simplified = +$.cookie('simplified');
  // ?lang=zh-Hans, ?lang=zh-Hant
  var scriptCode = /[?&;]lang=[^&;]*(Han[st])/i.exec(window.location.search);
  if (scriptCode) {
    simplified = +(scriptCode[1].match(/Hans/i) != null);
    $.cookie('simplified', simplified, {expires: 365, path: '/'});
  }
  simplifyTextInPage(simplified);

  $('#btn-simplify').click(function() {
    simplified = +!simplified;
    $.cookie('simplified', simplified, {expires: 365, path: '/'});
    simplifyTextInPage(simplified);
    $(this).blur();
  });
}

function initializeGitterSidecar() {
  ((window.gitter = {}).chat = {}).options = {
    room: 'rime/home'
  };
}
