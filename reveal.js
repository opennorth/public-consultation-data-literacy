//reveal/hide a div - function used on button click in Module 1
//need to add functionality to remove other divs
function reveal(divID) {
  var x = document.getElementById(divID);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

