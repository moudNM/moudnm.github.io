// on click menu appears
$(function() {
  $(".hamburger").on("click", function(event) {
    showMenu();
  });
});


//filtering of grids
function showMenu() {
  showClass("header-links-list", "show");
}

//remove show class

//add show class
function showClass(element, name) {
  var x = document.getElementsByClassName("hamburger")[0];
  var y = x.getElementsByClassName(element)[0];
  console.log(y);
  //if it doesnt contain,
  if(y.className.includes(name)){
    console.log("includes");
    console.log(y.className);
    y.className = element;
  }else{
    console.log("does not include");
  y.className += " " + name;
  }
  console.log(y);
  console.log("reached");
}
//
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//       console.log(arr1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
