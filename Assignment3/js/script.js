$(document).ready(function(){
	let getJsonMethod= $.getJSON("team.json", function(data) {  //.getJson method
		console.log("Data from getJson", data);
		
		let item = '';
		$.each(data.members, function(key, val){
			item += '<h2>'+ val.name + '</h2>';
			item += '<h5>' + val.position + '</h5>';            //displaying output
			item += '<p>' + val.bio + '</p>';	
		});
		$('div#team').html(item);
	});
});


$(document).ready(function () {                         //.ajax method
	$.ajax({
		url: 'team.json',
		type: 'GET',
		dataType:'json',
		async:false,

		beforeSend:function(){
			$('div#team').append('<p>Loading...</p>'); // displaying loading message 
		},

		timeout:3000,
		error: function(err, exception){
			if(err.status === 3000){
				alert("Error");
			}
		},

		success:(function(data){
			$('div#team').html('');
			$.each(data.members, function(key, val){

				$('div#team').append(`<h2>${val.name}</h2>
									   <h5>${val.position}</h5>
									   <p>${val.bio}</p>`);
				$('.load').hide();
			});
		})
	})
	
});