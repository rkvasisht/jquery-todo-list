
console.log("javescript connected")

function addComment(e){
	e.preventDefault();
	console.log('submit')
    var formData = $('form').serializeArray();
    $('.comment-insert').append("<li> "+formData[0].value+"<button type='button' value='delete' class = 'buttonTwo'>Complete</button></li>")

	$(".buttonTwo").click(buttonTest);
	$('input')[0].value = '';
	$('.toDoList').focus();


	
}
function buttonTest(){
		console.log('buttonTwo clicked');
		console.log($(this).parent());
		$('.toDoList').focus();
		$(this).parent().remove();


		
}
$(document).ready(function(){

	
	$('.submitB').click(addComment);
	



})




