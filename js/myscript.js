// Visibility of boxes
$(function(){
  $(".element-box2").on("mouseenter", function (event) {
    $(this).find("h5").css("visibility", "visible");
  });
  $(".element-box2").on("mouseleave", function (event) {
    $(this).find("h5").css("visibility", "hidden");
  });
});

$(function(){
  $(".element-box2b").on("mouseenter", function (event) {
    $(this).find("h5").css("visibility", "visible");
  });
  $(".element-box2b").on("mouseleave", function (event) {
    $(this).find("h5").css("visibility", "hidden");
  });
});
