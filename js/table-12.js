//script to generate the example table in Section 1.2 and add functionality to highlight certain columns on button click 

//load json data
		var url = "https://hannahker.github.io/web-development/data/modernization-labour-mod-short.json";
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
				 	//{title:colHeaders[7], field:colHeaders[7], headerSort:false, formatter: "textarea"},
			 	],

			});			

			//function to highlight a column based on the column index
			function highlightColumn(index, color){
				//select the columns components
				var colList = table.getColumns();
				//get all the cells in a single column
				var col = colList[index].getCells(); 
				//20 is the number of elements in each page
				//go through each cell in the column and make it red to highlight 
				for(var i=0; i<20; i++){
					//check to see if it's already highlighted 
					if(col[i].getElement().style.color == color){
						col[i].getElement().style.color = 'black';
				}else{
					col[i].getElement().style.color = color;
					}
				}
			}

			//add the function to the right buttons
			document.getElementById("metadata").addEventListener("click", function(){
			    highlightColumn(0, 'red');
			    highlightColumn(1, 'red');
			    highlightColumn(2, 'red');
			    //highlightColumn(3, 'red');
			});
			document.getElementById("quant-c").addEventListener("click", function(){
			    highlightColumn(0, 'green');
			});
			document.getElementById("quant-d").addEventListener("click", function(){
			    highlightColumn(6, 'orange');
			});
			document.getElementById("qual-n").addEventListener("click", function(){
			    highlightColumn(1, 'pink');
			    highlightColumn(2, 'pink');
			    highlightColumn(3, 'pink');
			    highlightColumn(4, 'pink');
			   // highlightColumn(5, 'pink');
			});
			document.getElementById("qual-o").addEventListener("click", function(){
			    highlightColumn(5, 'blue');
			});

		}