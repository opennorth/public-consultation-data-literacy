//reveal/hide a div - function used on button click in Module 1
//used in section 1.1
function reveal(divID) {
  var x = document.getElementById(divID);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//pretty much the same function, except this one changes the text on the button
//used in section 1.2
function seemore(divID, buttonID){
	var x = document.getElementById(divID);
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById(buttonID).innerHTML = "See more";
  } else {
    x.style.display = "block";
    document.getElementById(buttonID).innerHTML = "See less";
  }
}



