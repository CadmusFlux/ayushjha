$(function(){

	var url = new URL(window.location.href);
	url = url.pathname;
	// console.log(url);
	var filename = url.replace("/","").replace(".html","");
    // console.log(filename);


	var old_class = $('#'+filename).attr('class');
	// console.log(old_class);

	var div1 = $('.order3').attr('id');
	// console.log(div1);

	$('#'+filename).removeClass(old_class);
	$('#'+filename).addClass("order3");

	$("#"+div1).removeClass("order3");
	$("#"+div1).addClass(old_class);


	$('.art').click(function (){

		var curr_class = $(this).attr('class').split(' ')[1];
		window.location.href = `/images/${curr_class}.png`;
	});

	$('.mobile-number').click(function (){
      	copyToClipboard("+91 997507387");
	});

    function copyToClipboard(str) {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    $('.img-click').click(function(){

    	var host_name = $(this).attr('href');
    	window.location.href = host_name;
    });
});

