//script to generate the example table in Section 1.4 
//load json data
		var url = "https://hannahker.github.io/web-development/data/gen-eng-subset.json";
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'json';
		request.send();
		
		request.onload = function() {

			var data = request.response;
			var colHeaders = Object.keys(data[0])
			//create Tabulator on DOM element with id "example-table"
			var table = new Tabulator("#quiz-table", {
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
				 	{title:colHeaders[8], field:colHeaders[8], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[9], field:colHeaders[9], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[10], field:colHeaders[10], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[11], field:colHeaders[11], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[12], field:colHeaders[12], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[13], field:colHeaders[13], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[14], field:colHeaders[14], headerSort:false, formatter: "textarea"},
				 	{title:colHeaders[15], field:colHeaders[15], headerSort:false, formatter: "textarea"}
			 	],

			});			
			
		}