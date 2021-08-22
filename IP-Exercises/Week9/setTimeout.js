/*function function_name(argument) {
	
}();

function updateScore(){
	setTimeout(function(){

	},100);


	setTimeout(showContents,100);

}();


function myContents()
{
	setTimeout(function(){

		$.ajax({
			url: "scores.json",
			type : "GET",
			dataType: "json",
			success: function(response){

				//some process
				myContents();
			},
			error: function(){

				// error message
			}

		});

	}, 500);

}();*/



(function updateScore()
{
	setTimeout(function(){
		$.ajax({
			url: "match.json",
			type: "GET",
			dataType: "json",
			success: function(response){
				let stxt = "";
				$("#score").html("");
				$.each(response.matches,function(i){
					stxt += "<thead><tr></th>" + "Home Team" + "</th></th>" +

						"Score" + "</th></th>" + 
					"Away Team" + "</th></th>" +
					"Home Team Scorers" + "</th></th>" + 
					"Away Team Scorers" + "</th></th>" +
					"Minutes" + "</th></th>" +
					"</tr>/thead>";

					stxt += "<tr><td class = 'score'>" + response.matches[i].homeTeam + "</td><td>" +
										response.matches[i].score + "</td><td>" + 
										response.matches[i].awayTeam + "</td><td>" +
										response.matches[i].homeTeamScorers + "</td><td>" + 
										response.matches[i].awayTeamScorers + "</td><td>" +
										response.matches[i].minute + "</td><tr>";
				
				
				});
				$("#score").append(stxt);
				$("#mydata").html("<p>The above table is created</p>");
				updateScore();
			},
			error: function(){
				$("#mydata").html("<p>An error has occurred</p>");
			}

		});
	},500);
})();



















