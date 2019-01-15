var requestURL = 'https://hannahker.github.io/web-development/header.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var json_data = request.response;
	var header_list = json_data.Header;
	var body_list = json_data.Body; 
	var dropdown_list = json_data.Dropdown; 

	function fillContent(data){
		//fill in title
		document.getElementById("title").innerHTML = data.Title; 
		//fill in nav bar
		document.getElementById("header-1").innerHTML = data.Header[0];
    	document.getElementById("header-2").innerHTML = data.Header[1];
    	document.getElementById("header-3").innerHTML = data.Header[2];
    	document.getElementById("header-4").innerHTML = data.Header[3];	
    	//fill in dropdown
    	document.getElementById("dropdown-1").innerHTML = data.Dropdown[0];
    	document.getElementById("dropdown-2").innerHTML = data.Dropdown[1];
    	document.getElementById("dropdown-3").innerHTML = data.Dropdown[2];
    	//fill in body
		document.getElementById("body1-title").innerHTML = data.Body[0].title;
		document.getElementById("body1-content").innerHTML = data.Body[0].Content;
		document.getElementById("body2-title").innerHTML = data.Body[1].title;
		document.getElementById("body2-content").innerHTML = data.Body[1].Content;
		//fill in modal
		document.getElementById("modal-button").innerHTML = data.Modal.button;
		document.getElementById("modal-title").innerHTML = data.Modal.title;
		document.getElementById("modal-content").innerHTML = data.Modal.content;
		document.getElementById("modal-close").innerHTML = data.Modal.close;
		//fill in cards
		document.getElementById("card1-header").innerHTML = data.Card[0].header; 
		document.getElementById("card1-title").innerHTML = data.Card[0].title; 
		document.getElementById("card1-content").innerHTML = data.Card[0].content; 
		document.getElementById("card2-header").innerHTML = data.Card[1].header; 
		document.getElementById("card2-title").innerHTML = data.Card[1].title; 
		document.getElementById("card2-content").innerHTML = data.Card[1].content; 
	}
	fillContent(json_data);

}