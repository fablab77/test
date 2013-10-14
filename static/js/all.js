$(document).ready(function(){
	

	$('#filter-1 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})




	$("input[type=file]").nicefileinput();




});