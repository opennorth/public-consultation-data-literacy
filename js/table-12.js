//script to generate the example table in Section 1.2 and add functionality to highlight certain columns on button click 

//load json data
		var url = "https://hannahker.github.io/web-development/data/parks-consultation.json";
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'json';
		request.send();
		
		request.onload = function() {

			var data = request.response;
			var colHeaders = Object.keys(data[0])
			//create Tabulator on DOM element with id "example-table"
			var table = new Tabulator("#example-table", {
			 	height:500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
			 	data:data, //assign data to table
			 	layout:"fitColumns", //fit columns to width of table (optional)
			 	//resizableRows:true,
			 	//pagination: "local",
			 	//paginationSize: 20,
			 	columns:[ //Define Table Columns
			 		{title:colHeaders[0], field: colHeaders[0], headerSort:false, formatter: "textarea"},
			 		//{title:colHeaders[0], field: colHeaders[0], headerSort:false, cellClick:function(e,cell){reveal('a');}},
				 	{title:colHeaders[1], field:colHeaders[1], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[2], field:colHeaders[2], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[3], field:colHeaders[3], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[4], field:colHeaders[4], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[5], field:colHeaders[5], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[6], field:colHeaders[6], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[7], field:colHeaders[7], headerSort:false, formatter: "textarea"},
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

			document.getElementById("metadata").addEventListener("click", function(){
					highlightColumn(metadata, "#dee3ea"); 
				});	
			document.getElementById("quant-d").addEventListener("click", function(){
					highlightColumn(quantd, "#dee3ea"); 
				});	
			document.getElementById("quant-c").addEventListener("click", function(){
					highlightColumn(quantc, "#dee3ea"); 
				});	
			document.getElementById("qual-n").addEventListener("click", function(){
					highlightColumn(qualn, "#dee3ea"); 
				});	
			document.getElementById("qual-o").addEventListener("click", function(){
					highlightColumn(qualo, "#dee3ea"); 
				});	
		}