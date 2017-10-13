$(function() {
 //https://en.wikipedia.org/w/api.php?action=opensearch&search=dionne&callback=?"

 	$('#search-button').click(function(){
 		let searchBar = $('#search-bar').val();

 		$.ajax({
			type: 'GET',
			url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchBar}&format=json&callback=?`,
			async: false,
			dataType: 'json',
			success: function(data) {
			//console.log(data[2][1]);

			for(let i = 0; i <= 10; i++) {
				$('.search-results').append(data[3][i]);	
			}




			},
			error: function(error) {
				alert("This is an error.");
			}



 		})
 		
 	});
//press enter on keyboard to search
});