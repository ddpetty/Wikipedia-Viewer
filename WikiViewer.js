$(function() {
 /* https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages
 |extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=dionne&callback=? */
 //Todos: Hover affects. Make this functional in IE. 
 	
 	$('#search-button').click(function(){
 		const searchBar = $('#search-bar').val();
 		$.ajax({
			type: 'GET',
			url: `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages
			|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchBar}&callback=?`,
			async: false,
			dataType: 'json',
			success: function(data) {
			//console.log(data.query.pages);

			//Start off with empty slate for each request
			$('.search-results').empty();
			const articles = data.query.pages;
			//Looping through json
				for (let key in articles) {
					const title = articles[key].title,
					description = articles[key].extract,
					pageid = articles[key].pageid,
					link = "https://en.wikipedia.org/?curid=" +pageid;

					$('.search-results').append('<div class="result-title">'+ '<a href="'+link+'" target="_blank">'+title+'</a>'
					+ '</br>' + '<div class="result-p">' +description+ '</div></div>');	
				}	
			},
			error: function(error) {
				alert("This is an error.");
			}
 		})
 	});


 	$('#search-bar').keydown(function(event) {
            if (event.keyCode == 13) {  //  enter button pressed
                 $('#search-button').click(); //run click function
            }
        })

});