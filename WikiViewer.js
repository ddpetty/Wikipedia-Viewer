$(function() {
 /* https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages
 |extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=dionne&callback=? */
 //Todos: Hover affects. Media queries. Link random article button. Keycode enter button for searches. Implement continuous searches.

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
			let articles = data.query.pages;


			for (let key in articles) {
				let title = articles[key].title,
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



 		
 		
 
//press enter on keyboard to search
});