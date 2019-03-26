function getData(source){
	var XMLHttpRequestObject = false; 
	if(window.XMLHttpRequest){
		XMLHttpRequestObject = new XMLHttpRequest();
		XMLHttpRequestObject.responseType = 'json';

	} else if(window.ActiveXObject){
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(XMLHttpRequestObject){
		XMLHttpRequestObject.open("GET", source);

		XMLHttpRequestObject.onreadystatechange = function(){
			if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
				data=XMLHttpRequestObject.response;
				//creates tabulator table for section 1.3
				console.log("hi");
				
				console.log(source);
				console.log(data); 

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}

getData('https://hannahker.github.io/web-development/data/index.json');
getData("https://hannahker.github.io/web-development/data/overview.json");