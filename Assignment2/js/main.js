$(document).ready(function() {
    $("#prospect").click(function() {
       $("#content").css("background-color",  "violet" );
      $('div#content').load("prospect.html").hide().fadeToggle("slow");
      });

    $("#convert").click(function () {
    $("#content").css("background-color", "Violet");
    $('div#content').load("convert.html").hide().fadeToggle("slow");
      });

    $("#retain").click(function() {
    $("#content").css("background-color", "violet");
    $('div#content').load("retain.html").hide().fadeToggle("slow");
      });

});