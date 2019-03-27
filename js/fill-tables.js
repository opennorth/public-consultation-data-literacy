header = "https://hannahker.github.io/web-development/data/header.json";
table13 = "https://hannahker.github.io/web-development/data/parks-consultation.json";
table14 = "https://hannahker.github.io/web-development/data/gen-eng-subset.json";
text = "https://hannahker.github.io/web-development/data/text.json";
table24 = "https://hannahker.github.io/web-development/data/ntnl-scrt-sub-email.json";
table22 = "https://hannahker.github.io/web-development/data/ntnl-scrt-sub-online.json"; 
homepage = 'https://hannahker.github.io/web-development/data/home.json'; 

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
				function fillTable13(){
					var colHeaders = Object.keys(data[0]); 
					
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#example-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	data:data, //assign data to table
					 	//layout:"fitColumns", //fit columns to width of table (optional)
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 40, headerSort:false, formatter: "textarea"},
					 		//{title:colHeaders[0], field: colHeaders[0], width: 40, headerSort:false, cellClick:function(e,cell){reveal('a');}},
						 	{title:colHeaders[1], field:colHeaders[1], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[2], field:colHeaders[2], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[3], field:colHeaders[3], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[4], field:colHeaders[4], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[5], field:colHeaders[5], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[6], field:colHeaders[6], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[7], field:colHeaders[7], width: 120, headerSort:false, formatter: "textarea"},
					 	],

					});
					//function to highlight a column based on the column index
					//index = array of integers with column indices to highight 
					//color = highlight color 
					function highlightColumn(index, color){
						//select the columns components
						var colList = table.getColumns();
						//get the total number of columns 
						var x = colList.length; 
						//get the total number of rows - ASSUMES THE DATASET IS SYMMETRICAL	
						var y = colList[0].getCells().length; 
						//get length of input index array 
						var z = index.length;

						//remove all colours 
						for(var i=0; i<x; i++){
							var cur_col = colList[i].getCells(); 
							for(var j=0; j<y; j++){
								var cur_cell = cur_col[j]; 
								cur_cell.getElement().style.backgroundColor = 'white'; 
							}
						}
						//add colours to the right cells 
						for(var i=0; i<z; i++){
							var col_highlight = colList[index[i]].getCells(); 
							for(var j=0; j<y; j++){
								var cur_cell = col_highlight[j]; 
								cur_cell.getElement().style.backgroundColor = color;  
							} 
						}
					}
					//row indices for each type of data 
					var metadata = [0, 1, 2]; 
					var quantd = [0,3]; 
					var quantc = [1,7]; 
					var qualn = [2,5,6]; 
					var qualo = [4]; 

					document.getElementById("M1S3Button5").addEventListener("click", function(){
							highlightColumn(metadata, "#dee3ea"); 
						});	
					document.getElementById("M1S3Button1").addEventListener("click", function(){
							highlightColumn(quantd, "#dee3ea"); 
						});	
					document.getElementById("M1S3Button2").addEventListener("click", function(){
							highlightColumn(quantc, "#dee3ea"); 
						});	
					document.getElementById("M1S3Button3").addEventListener("click", function(){
							highlightColumn(qualn, "#dee3ea"); 
						});	
					document.getElementById("M1S3Button4").addEventListener("click", function(){
							highlightColumn(qualo, "#dee3ea"); 
						});	
				}
				//end of function 

				//creates tabulator table for section 1.4
				function fillTable14(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#quiz1-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[1], field:colHeaders[1], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[2], field:colHeaders[2], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[3], field:colHeaders[3], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[4], field:colHeaders[4], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[6], field:colHeaders[6], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[7], field:colHeaders[7], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[8], field:colHeaders[8], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[9], field:colHeaders[9], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[10], field:colHeaders[10], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[11], field:colHeaders[11], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[12], field:colHeaders[12], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[13], field:colHeaders[13], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[14], field:colHeaders[14], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[15], field:colHeaders[15], width: 120, headerSort:false, formatter: "textarea"}
					 	],

					});	
				}

				function fillTable24(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#quiz2-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[1], field:colHeaders[1], width: 300, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[2], field:colHeaders[2], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[3], field:colHeaders[3], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[4], field:colHeaders[4], width: 80, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[6], field:colHeaders[6], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[7], field:colHeaders[7], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[8], field:colHeaders[8], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[9], field:colHeaders[9], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[10], field:colHeaders[10], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[11], field:colHeaders[11], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[12], field:colHeaders[12], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[13], field:colHeaders[13], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[14], field:colHeaders[14], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[15], field:colHeaders[15], width: 120, headerSort:false, formatter: "textarea"}, 
						 	{title:colHeaders[16], field:colHeaders[16], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[17], field:colHeaders[17], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[18], field:colHeaders[18], width: 120, headerSort:false, formatter: "textarea"},
						 	{title:colHeaders[19], field:colHeaders[19], width: 120, headerSort:false, formatter: "textarea"}
					 	],

					});	
				}

				function fillTable22(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#m2-example-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 80,  formatter: "textarea"},
						 	{title:colHeaders[1], field:colHeaders[1], width: 80, formatter: "textarea"},
						 	{title:colHeaders[2], field:colHeaders[2], width: 80, formatter: "textarea"},
						 	{title:colHeaders[3], field:colHeaders[3], width: 200, formatter: "textarea"},
						 	{title:colHeaders[4], field:colHeaders[4], width: 200, formatter: "textarea"},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200, formatter: "textarea"},
						 	{title:colHeaders[6], field:colHeaders[6], width: 200, formatter: "textarea"},
						 	{title:colHeaders[7], field:colHeaders[7], width: 200, formatter: "textarea"},
						 	{title:colHeaders[8], field:colHeaders[8], width: 200, formatter: "textarea"},
						 	{title:colHeaders[9], field:colHeaders[9], width: 200, formatter: "textarea"},
						 	{title:colHeaders[10], field:colHeaders[10], width: 200, formatter: "textarea"},
						 	{title:colHeaders[11], field:colHeaders[11], width: 200, formatter: "textarea"},
						 	{title:colHeaders[12], field:colHeaders[12], width: 200, formatter: "textarea"},
						 	{title:colHeaders[13], field:colHeaders[13], width: 200, formatter: "textarea"},
						 	{title:colHeaders[14], field:colHeaders[14], width: 200, formatter: "textarea"},
						 	{title:colHeaders[15], field:colHeaders[15], width: 200, formatter: "textarea"}, 
						 	{title:colHeaders[16], field:colHeaders[16], width: 200, formatter: "textarea"},
						 	{title:colHeaders[17], field:colHeaders[17], width: 200, formatter: "textarea"},
						 	{title:colHeaders[18], field:colHeaders[18], width: 200, formatter: "textarea"},
						 	{title:colHeaders[19], field:colHeaders[19], width: 200, formatter: "textarea"}
					 	],

					});	
				}

				//fills standard text across all pages 
				function fillHeader(){
					//fill in title
					document.getElementById("title").innerHTML = data.Title; 
					//fill in nav bar
					document.getElementById("header-1").innerHTML = data.Header[0];
			    	document.getElementById("header-2").innerHTML = data.Header[1];
			    	document.getElementById("header-3").innerHTML = data.Header[2];	
			    	//fill in dropdown
			    	document.getElementById("dropdown-1").innerHTML = data.Dropdown[0];
			    	document.getElementById("dropdown-2").innerHTML = data.Dropdown[1];
			    	document.getElementById("dropdown-3").innerHTML = data.Dropdown[2];
			    	//fill in footer
				}

				//fill in the content for module 1
				//ONGOING !!!
				function fillm1(){

					//content for Section 1
					document.getElementById("m1-s1-title").innerHTML = "<h4>" + data.Module1.Section1.Title.EN + "</h4>"; 
					document.getElementById("m1-s1-text1").innerHTML = data.Module1.Section1.Text1.EN; 
					document.getElementById("m1-s1-text2").innerHTML = data.Module1.Section1.Text2.EN;
					document.getElementById("m1-s1-text3").innerHTML = data.Module1.Section1.Text3.EN;
					document.getElementById("m1-s1-text4").innerHTML = data.Module1.Section1.Text4.EN;  
					document.getElementById("m1-s1-text5").innerHTML = data.Module1.Section1.Text5.EN; 
					document.getElementById("m1-s1-text6").innerHTML = data.Module1.Section1.Text6.EN; 
					document.getElementById("m1-s1-text7").innerHTML = data.Module1.Section1.Text7.EN; 

					//text content for buttons 
					document.getElementById("m1-s1-button1").innerHTML = data.Module1.Section1.Button1.EN;
					document.getElementById("m1-s1-button2").innerHTML = data.Module1.Section1.Button2.EN;
					document.getElementById("m1-s1-button3").innerHTML = data.Module1.Section1.Button3.EN;
				}

				//determine which type of content to fill
				if(source == "https://hannahker.github.io/web-development/data/header.json"){
					fillHeader();
				}
				if(source == "https://hannahker.github.io/web-development/data/parks-consultation.json"){
					fillTable13(); 
				}
				if(source == "https://hannahker.github.io/web-development/data/gen-eng-subset.json"){
					fillTable14(); 
				}
				if(source == "https://hannahker.github.io/web-development/data/text.json"){
					fillm1();
				}
				if(source == "https://hannahker.github.io/web-development/data/ntnl-scrt-sub-email.json"){
					fillTable24();
				}
				if(source == "https://hannahker.github.io/web-development/data/ntnl-scrt-sub-online.json"){
					fillTable22();
				}

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}
getData(header);
getData(table13); 
getData(table14);
getData(text); 
getData(table24);
getData(table22);