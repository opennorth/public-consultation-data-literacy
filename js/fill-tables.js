//Functionality = fills in the example tables based on JSON data, also includes function to highlight the specific cells from Section 1.3
//Note = each table has a specific function that will fill it (b/c depends on the number of columns)
//SOURCE = url to one of the example datasets - needs to be one of the four specified below
//TABLE_NAME = "S13" (table in section 1.3) or "S14" (table in section 1.4) or "S22" or "S24"
function getData(source, table_name){
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
					 	layout: 'fitColumns',
					 	tooltipsHeader: true,
					 	resizableColumns:false,
					 	tooltips: true,
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], headerSort:false},
						 	{title:colHeaders[1], field:colHeaders[1], headerSort:false},
						 	{title:colHeaders[2], field:colHeaders[2], headerSort:false},
						 	{title:colHeaders[3], field:colHeaders[3], headerSort:false},
						 	{title:colHeaders[4], field:colHeaders[4],  headerSort:false},
						 	{title:colHeaders[5], field:colHeaders[5],  headerSort:false},
						 	{title:colHeaders[6], field:colHeaders[6], headerSort:false},
						 	{title:colHeaders[7], field:colHeaders[7],  headerSort:false},
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

					//add event listeners to the buttons so that the appropriate columns are highlighted on click
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

				//fill table in Module 1 Quiz
				function fillTable14(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#quiz1-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	tooltipsHeader: true,
					 	resizableColumns:false,
					 	tooltips: true,
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 80, headerSort:false},
						 	{title:colHeaders[1], field:colHeaders[1], width: 120, headerSort:false},
						 	{title:colHeaders[2], field:colHeaders[2], width: 120, headerSort:false},
						 	{title:colHeaders[3], field:colHeaders[3], width: 120, headerSort:false},
						 	{title:colHeaders[4], field:colHeaders[4], width: 80, headerSort:false},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200, headerSort:false},
						 	{title:colHeaders[6], field:colHeaders[6], width: 120, headerSort:false},
						 	{title:colHeaders[7], field:colHeaders[7], width: 120, headerSort:false},
						 	{title:colHeaders[8], field:colHeaders[8], width: 120, headerSort:false},
						 	{title:colHeaders[9], field:colHeaders[9], width: 120, headerSort:false},
						 	{title:colHeaders[10], field:colHeaders[10], width: 120, headerSort:false},
						 	{title:colHeaders[11], field:colHeaders[11], width: 120, headerSort:false},
						 	{title:colHeaders[12], field:colHeaders[12], width: 120, headerSort:false},
						 	{title:colHeaders[13], field:colHeaders[13], width: 120, headerSort:false},
						 	{title:colHeaders[14], field:colHeaders[14], width: 120, headerSort:false},
						 	{title:colHeaders[15], field:colHeaders[15], width: 120, headerSort:false}
					 	],

					});	
				}
				//fill table in Module 2 Quiz
				function fillTable24(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#quiz2-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	tooltipsHeader: true,
					 	resizableColumns:false, 
					 	tooltips: true,
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 120, headerSort:false},
						 	{title:colHeaders[1], field:colHeaders[1], width: 300, headerSort:false},
						 	{title:colHeaders[2], field:colHeaders[2], width: 120, headerSort:false},
						 	{title:colHeaders[3], field:colHeaders[3], width: 120, headerSort:false},
						 	{title:colHeaders[4], field:colHeaders[4], width: 80, headerSort:false},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200, headerSort:false},
						 	{title:colHeaders[6], field:colHeaders[6], width: 120, headerSort:false},
						 	{title:colHeaders[7], field:colHeaders[7], width: 120, headerSort:false},
						 	{title:colHeaders[8], field:colHeaders[8], width: 120, headerSort:false},
						 	{title:colHeaders[9], field:colHeaders[9], width: 120, headerSort:false},
						 	{title:colHeaders[10], field:colHeaders[10], width: 120, headerSort:false},
						 	{title:colHeaders[11], field:colHeaders[11], width: 120, headerSort:false},
						 	{title:colHeaders[12], field:colHeaders[12], width: 120, headerSort:false},
						 	{title:colHeaders[13], field:colHeaders[13], width: 120, headerSort:false},
						 	{title:colHeaders[14], field:colHeaders[14], width: 120, headerSort:false},
						 	{title:colHeaders[15], field:colHeaders[15], width: 120, headerSort:false}, 
						 	{title:colHeaders[16], field:colHeaders[16], width: 120, headerSort:false},
						 	{title:colHeaders[17], field:colHeaders[17], width: 120, headerSort:false},
						 	{title:colHeaders[18], field:colHeaders[18], width: 120, headerSort:false},
						 	{title:colHeaders[19], field:colHeaders[19], width: 120, headerSort:false}
					 	],

					});	
				}
				//fill table in Section 2.2
				function fillTable22(){
					var colHeaders = Object.keys(data[0])
					//create Tabulator on DOM element with id "example-table"
					var table = new Tabulator("#m2-example-table", {
					 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
					 	tooltipsHeader: true,
					 	tooltips: true,
					 	resizableColumns:false, 
					 	data:data, //assign data to table
					 	columns:[ //Define Table Columns
					 		{title:colHeaders[0], field: colHeaders[0], width: 80},
						 	{title:colHeaders[1], field:colHeaders[1], width: 80},
						 	{title:colHeaders[2], field:colHeaders[2], width: 80},
						 	{title:colHeaders[3], field:colHeaders[3], width: 200},
						 	{title:colHeaders[4], field:colHeaders[4], width: 200},
						 	{title:colHeaders[5], field:colHeaders[5], width: 200},
						 	{title:colHeaders[6], field:colHeaders[6], width: 200},
						 	{title:colHeaders[7], field:colHeaders[7], width: 200},
						 	{title:colHeaders[8], field:colHeaders[8], width: 200},
						 	{title:colHeaders[9], field:colHeaders[9], width: 200},
						 	{title:colHeaders[10], field:colHeaders[10], width: 200},
						 	{title:colHeaders[11], field:colHeaders[11], width: 200},
						 	{title:colHeaders[12], field:colHeaders[12], width: 200},
						 	{title:colHeaders[13], field:colHeaders[13], width: 200},
						 	{title:colHeaders[14], field:colHeaders[14], width: 200},
						 	{title:colHeaders[15], field:colHeaders[15], width: 200}, 
						 	{title:colHeaders[16], field:colHeaders[16], width: 200},
						 	{title:colHeaders[17], field:colHeaders[17], width: 200},
						 	{title:colHeaders[18], field:colHeaders[18], width: 200},
						 	{title:colHeaders[19], field:colHeaders[19], width: 200}
					 	],

					});	
				}

				//determine which table to fill, based on the function (getData()) input
				if(table_name == "S13"){
					fillTable13(); 
				}
				if(table_name == "S14"){
					fillTable14();
				}
				if(table_name == "S24"){
					fillTable24();
				}
				if(table_name == "S22"){
					fillTable22();
				}

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}
