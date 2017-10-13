$(function() {
 //https://en.wikipedia.org/w/api.php?action=opensearch&search=dionne&callback=?"

 	$('#search-button').click(function(){
 		let searchBar = $('#search-bar').val();

 		$.ajax({
			type: 'GET',
			//ES2015 template strings. Test to see if it works with jQuery properly
			url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchBar}&callback=?`,
			async: false,
			dataType: 'json',
			success: function(data) {
				console.log(data);




			},
			error: function(error) {
				alert("This is not working properly.");
			}



 		})
 		
 	});
//press enter on keyboard to search
});