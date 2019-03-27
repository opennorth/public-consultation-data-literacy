//SOURCE = url for the JSON
//LANG = "EN" or "FR"
function getText(source, lang){
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
				//get the name of the object **assumes that the JSON only has one object**
				var name = Object.keys(data)[0];
				//get the attributes of the JSON object	as an ARRAY		
				attributes = Object.keys(data[name][lang]);
				//loop through each attribute in the ARRAY and find the corresponding HTML elements 
				attributes.forEach(function(attribute){
					//divid to search for
					var divid = attribute; 
					//get HTML element with the right divid
					var div = document.getElementById(divid);
					//catch error in case the json includes text for a div that isn't on the page
					//happens for the bottom nav buttons on 1st and last pages (ie. when there is not Prev button or Next button) 
					if(div==null){
						console.log("div is null: " + divid);
					}
					else{
						//append the text to the HTML element
						div.innerHTML = data[name][lang][divid];
					}
					
				});

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}

