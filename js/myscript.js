// Visibility of boxes
$(function() {
  $(".element-box2").on("mouseenter", function(event) {
    $(this).find("h5").css("visibility", "visible");
  });
  $(".element-box2").on("mouseleave", function(event) {
    $(this).find("h5").css("visibility", "hidden");
  });
});

$(function() {
  $(".element-box2b").on("mouseenter", function(event) {
    $(this).find("h5").css("visibility", "visible");
  });
  $(".element-box2b").on("mouseleave", function(event) {
    $(this).find("h5").css("visibility", "hidden");
  });
});

// Animation of grids
$(function() {
  $(".grid-item").on("mouseenter", function(event) {
    $(this).find(".blog-det").fadeIn();
    $(this).find(".blog-button").fadeIn();
    $(this).find(".blog-bg2").fadeIn();
  });
  $(".grid-item").on("mouseleave", function(event) {
    $(this).find(".blog-det").fadeOut();
    $(this).find(".blog-button").fadeOut();
    $(this).find(".blog-bg2").fadeOut();
  });
});

//filtering of grids
$(function() {
  $(".filterSelection.cat-all").on("click", function(event) {
    filterSelection('cat-all');
  });
});

$(function() {
  $(".filterSelection.cat-application").on("click", function(event) {
    filterSelection('cat-application');
  });
});

$(function() {
  $(".filterSelection.cat-data").on("click", function(event) {
    filterSelection('cat-data');
  });
});

$(function() {
  $(".filterSelection.cat-web").on("click", function(event) {
    filterSelection('cat-web');
  });
});

$(function() {
  $(".filterSelection.cat-games").on("click", function(event) {
    filterSelection('cat-games');
  });
});

//filtering of grids
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "cat-all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  setActive();
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
      console.log(arr1);
    }
  }
  element.className = arr1.join(" ");
}

function setActive() {
  var selectionContainer = document.getElementsByClassName("filterSelectionContainer")[0];
  var btns = selectionContainer.getElementsByClassName("filterSelection");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
