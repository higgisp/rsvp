// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });
var sum = 0;
// iterate through each td based on class and add the values
$(".party").each(function() {
  var value = $(this).text();
  // add only if the value is number
  if(!isNaN(value) && value.length != 0) {
      sum += parseFloat(value);
  }
});
function toggle_response(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
      e.style.display = 'block';
    else
      e.style.display = 'none';
};
