function readSingleFile(fileName) {
	var theFile = new XMLHttpRequest();
	theFile.open("GET", fileName, false);
	theFile = theFile.responseXML;

	if (theFile){
		var r = new FileReader();
		r.onload = function(e) { 
			var contents = e.target.result;
			alert( "Got the file.n" 
				+"name: " + theFile.name + "n"
				+"type: " + theFile.type + "n"
				+"size: " + theFile.size + " bytesn"
				+ "starts with: " + contents.substr(1, contents.indexOf("n"))
			);  
		}
		r.readAsText(theFile);
	} 
	else{ 
		alert("Failed to load file");
	}
}

function loadXMLDoc(fileName){
	if (window.DOMParser)
	{
		parser=new DOMParser();
		
		xmlDoc=parser.parseFromString(fileName, "text/xml");
	}
	else // Internet Explorer
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(fileName);
	}
	
	return xmlDoc;
}