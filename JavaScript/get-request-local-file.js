// 0. Define the global variable that corresponds to the desired file
var obj = {};

// 1. Define the function that reads the content of the desired file
function readTextFile(file) { 

    // 1. Define the XML Parser
    var rawFile = new XMLHttpRequest();
  
    // 2. Define that you want to execute a GET Request
    rawFile.open("GET", file, false);
  
    // 3. Define what should be done when the file is loaded
    rawFile.onreadystatechange = function () {
		
		// Check if the response is received
        if(rawFile.readyState === 4) {
			// Check if the communication was successful
            if(rawFile.status === 200 || rawFile.status == 0) {
				
				// 1. Read the response content in text form
                var allText = rawFile.responseText;
				
				// 2. Parse the content as a JSON String
                obj = JSON.parse(rawFile.responseText);
				
				// 3. Print the content to the user's screen
                alert(allText);
            }
        }
    }
    
    // 4. Send the GET request
    rawFile.send(null);
}

// 2. Execute the function to read the desired file
readTextFile("data.txt");