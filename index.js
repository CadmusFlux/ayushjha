$(function(){

	var url = new URL(window.location.href);
	url = url.pathname;
	console.log(url);
	var filename = url.replace("/","").replace(".html","");
    console.log(filename);


	var old_class = $('#'+filename).attr('class');
	console.log(old_class);

	var div1 = $('.order3').attr('id');
	console.log(div1);

	$('#'+filename).removeClass(old_class);
	$('#'+filename).addClass("order3");

	$("#"+div1).removeClass("order3");
	$("#"+div1).addClass(old_class);


	// $("nav ul li").click( function() {

	// var old_class = $(this).attr('class');
	// // console.log(old_class);

	// var div1 = $(this).siblings(".order3").attr("id");
	// // console.log(div1);	

	// $(this).removeClass(old_class);
	// $(this).addClass("order3");

	// $("#"+div1).removeClass("order3");
	// $("#"+div1).addClass(old_class);

	// });

});

