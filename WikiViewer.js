$(function() {
 /* https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages
 |extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=dionne&callback=? */

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
				description = articles[key].extract;
			$('.search-results').append('<div class="result-title">'+ '<a href="#">'+title+'<a>'+ '</br>' +description+ '</div>');
				
			}

			

			

	
			
			

			},
			error: function(error) {
				alert("This is an error.");
			}
 		
 		})
 	});



 		
 		
 
//press enter on keyboard to search
});