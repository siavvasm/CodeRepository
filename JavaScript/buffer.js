window.onload = function() { 

	// 1. Load the locally stored data
	var reloaded = sessionStorage.getItem("reloaded");
	var current_obj = sessionStorage.getItem("current_obj);

	// 2. Check if the page is loaded after a refresh
	if (reloaded == "true") {
		
		// 3. Parsethe previously stored JSON string
		obj = JSON.parse(current_obj);

		// 4. Update the HTML page view based on the reloaded data

	}
}

window.onbeforeunload = function() {

	// 1. Define that a page reload has been asked
	sessionStorage.setItem("reloaded", "true");

	// 2. Store the desired object locally in the current session
	var current_obj = JSON.stringify(obj);
	sessionStorage.setItem("current_obj", current_obj);

}
