/**
 *	This function demonstrates how an AJAX request
 *  using the jQuery API can be sent. The request
 *  uses Basic Authentication and the exchanged data 
 *  are in application/x-www-form-urlencoded format.
 *  The Mendeley OAuth Service is used for the purposes
 *  of the example.
 */
function retrieveToken() {
	
	// 0. Prepare the parameters
	var data = {
		"grant_type":"authorization_code",
		"code":code,
		"redirect_uri":"http://localhost:8080/MendeleyInsights/"
	};
	
	// 1. Serialize the parameters of the request
	var params = $.param(data);
	console.log(params);
	
	// 2. Send the request to Mendeley OAuth API
	$.ajax
	({
	  type: "POST",
	  url: "https://api.mendeley.com/oauth/token",
	  async: false,
	  headers: {
		"Authorization": "Basic " + btoa("4567" + ":" + "Ue3y2UxrtKNnRDQj"),
		"Content-Type": "application/x-www-form-urlencoded"
	  },
	  data: params,
	  success: function (response){
		alert('The access token was successfully received!!'); 
		token = response["access_token"];
	  }
	});
}