//Functionality = toggle between div hide or reveal - eg. implemented on a button click
//DIVID = id of the div that you want to hide/reveal

function reveal(divID) {
  //select the div that you want to hide or reveal
  var x = document.getElementById(divID);
  //if the div is already displayed, then hide it
  if (x.style.display === "block") {
    x.style.display = "none";
    //if the div is already hidden, then display it
  } else {
    x.style.display = "block";
  }
}




