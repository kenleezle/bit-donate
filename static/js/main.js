$(function(){
	//alert("working");
	$('#donate').click(function(){
		$('#cc-info').stop().animate({
			right:"0"
		},400);
		$('#donate').hide();
		$('#submit').show();
	});
});