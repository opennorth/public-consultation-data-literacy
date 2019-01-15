url1 = "https://hannahker.github.io/web-development/data.json";
url2 = "https://hannahker.github.io/web-development/header.json"
url3 = "https://hannahker.github.io/web-development/data2.json";
url4 = "https://hannahker.github.io/web-development/data3.json";


function getData(source, type){
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
				
				//creates the HTML to create a table with the JSON data
				function fillTable(){
					columns=Object.keys(data[0]).length;			
					rows=data.length;
					table = "<table class = \"table table-hover\"><thread><tr>";
					//add table headers with content in the first JSON object
					for(i=0; i<columns; i++){
						attribute = Object.keys(data[0])[i];
						header = "<th scope=\"col\">" + data[0][attribute] + "</th>";
						table += header; 
					}
					table += "</tr></thread><tbody>"; 
					//add content to the table
					for(i=1; i<rows; i++){
						table+="<tr><th scope=\"row\"></th>";
						for(j=0; j<columns; j++){
							attribute = Object.keys(data[i])[j]
							entry = "<td>" + data[i][attribute] + "</td>";
							table+=entry;
						}
						table+="</tr>"; 
					}
					table += "</tbody></table> ";
					document.getElementById("table1").innerHTML = table;
				}
				//end of function 

				//fills text content on the page 
				function fillTextContent(){
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

			    	document.getElementById("body1-title").innerHTML = data.Body[0].title;
				}

				//determine which 
				if(type>0){
					fillTable();
				}
				if(type<0){
					fillTextContent(); 
				}
				//fillTable(); 

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}

//acceptable values for "type" variable: 
//1 (for filling the table)
//-1 (for filling the text content)

getData(url1,1);
getData(url2,-1);