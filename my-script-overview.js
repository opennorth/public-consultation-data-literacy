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
    		 
	}
	fillContent(json_data);

	function changeTable1(){
		console.log("table 1");
	}
	changeTable1();

	function changeTable2(){
		console.log("table 2");
	}

	function changeTable3(){
		console.log("table 3");
	}

}