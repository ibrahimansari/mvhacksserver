var push = new Firebase("https://mvhacks.firebaseio.com/");
var eventid = 12270965789;

setInterval(function() {
	$.getJSON("https://www.eventbriteapi.com/v3/events/"+eventid+"/attendees/?token=YW3XQMES4NXNC4ETYWHS", function(data) {
		data.attendees[0].forEach(function(entry) {
			$("#log").html($("#log").html()+entry.id+" ");
		});

	});
	//push.set(data);
},20000);


//push.on("value", function(data) {
//	var name = data.val() ? data.val().name : "";
//	alert("My name is " + name);
//});