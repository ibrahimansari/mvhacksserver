var firebase = new Firebase("https://mvhacks.firebaseio.com/");
var eventid = 12270965789;
var token = "YW3XQMES4NXNC4ETYWHS";
var $p = $("#log");

setInterval(function() {
	$p.html($p.html() + "T Im e  r");
	$.getJSON("https://www.eventbriteapi.com/v3/events/"+eventid+"/attendees/?token="+token, function(data) {
		$p.html($p.html() + "  ev e e nt  b r I  te");
		firebase.on('value', function(firedata) {
			$p.html($p.html() + " fI r  e ba  s ee ");
			var formatted = firedata.val();
			var i;
			$p.html($p.html() + data.attendees.length + "  " + (Object.keys(formatted).length - 1) + " ");
			if (data.attendees.length != (Object.keys(formatted).length - 1))
			{
				for (i = 0; i < data.attendees.length; ++i) {
					var attendee = data.attendees[i];
					var id = attendee.id;
					$p.html($p.html() + id + " ");
					if (formatted[id] === undefined) {
						formatted[id] = {};
						formatted[id].firstname = attendee.profile.first_name;
						formatted[id].lastname = attendee.profile.last_name;
						formatted[id].email = attendee.profile.email;
						formatted[id].age = attendee.profile.age;
						formatted[id].gender = attendee.profile.gender;
						formatted[id].website = attendee.profile.website;
						formatted[id].school = attendee.answers[0].answer;
						formatted[id].year = attendee.answers[1].answer;
						formatted[id].size = attendee.answers[2].answer;
						formatted[id].food = attendee.answers[3].answer;
						formatted[id].experience = attendee.answers[4].answer;
						formatted[id].passphrase = attendee.answers[5].answer;
						formatted[id].image = "";
						$p.html($p.html() + formatted[id].firstname + "  " + formatted[id].age + " " + formatted[id].lastname + " ");
						for (var key in formatted[id]) {
							if (formatted[id].hasOwnProperty(key) && formatted[id][key] === undefined)
								formatted[id][key] = "";
						}
						$p.html($p.html() + " u p da  tI n g ");
					}
				}
				firebase.update(formatted);
				$p.html($p.html() + " up d a t ed ");
			}
			$p.html($p.html() + " ag a In! ");
		});
	});
},17280);