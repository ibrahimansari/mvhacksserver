var firebase = new Firebase("https://mvhacks.firebaseio.com/");
var eventid = 12270965789;

setInterval(function() {
	$.getJSON("https://www.eventbriteapi.com/v3/events/"+eventid+"/attendees/?token=YW3XQMES4NXNC4ETYWHS", function(data) {
		firebase.on('value', function(firedata) {
			var formatted = firedata;
			var i;
			for (i = 0; i < data.attendees.length; ++i) {
				var attendee = data.attendees[i];
				var id = attendee.id;
				if (formatted[id] === undefined) {
					formatted[id] = {};
					formatted[id].name = attendee.profile.first_name + " " + attendee.profile.last_name;
					formatted[id].email = attendee.profile.email;
					formatted[id].url = attendee.profile.website;
					formatted[id].school = attendee.answers[0].answer;
					formatted[id].year = attendee.answers[1].answer;
					formatted[id].size = attendee.answers[2].answer;
					formatted[id].food = attendee.answers[3].answer;
					formatted[id].experience = attendee.answers[4].answer;
					formatted[id].passphrase = attendee.answers[5].answer;
					formatted[id].image = "";
					for (var key in formatted[id]) {
						if (formatted[id].hasOwnProperty(key) && formatted[id][key] === undefined)
							formatted[id][key] = "";
					}
				}
				$("#log").html($("#log").html() + " " + id + " " + formatted[id].name + " " + formatted[id].email + " " + formatted[id].url + " " + formatted[id].school + " " + formatted[id].year + " " + formatted[id].size + " " + formatted[id].food + " " + formatted[id].experience + " " + formatted[id].passphrase + " " + formatted[id].image);
			}
			firebase.update(formatted);
		});
	});
},20000);