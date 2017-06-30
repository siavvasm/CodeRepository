// Step 1: Create a request object
var myRequest;

// Check if this object exists in your browser
if (window.XMLHttpRequest) {  // Chrome, Firefox, Safari etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // Internet Explorer
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// Step 2: Create a handler for the request
myRequest.onreadystatechange = function(){
    
    // Check the state of the request
    if (myRequest.readyState === 4) {
      // Process the data retrieved by the request
      var p = document.createElement("p");
      var t = document.createTextNode(myRequest.responseText);
      p.appendChild(t);
      document.getElementById("mainContent").appendChild(p);
    }
};

// Step 3: Send the request to the server
myRequest.open('GET', 'simple.txt', true);
myRequest.send(null);