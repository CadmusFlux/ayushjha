$(function(){

// ----------------------------------------    COMMON   -----------------------------------

	// Navigation 

	var url = new URL(window.location.href);
	url = url.pathname;
	
	var filename = url.replace("/","").replace(".html","");
    


	var old_class = $('#'+filename).attr('class');

	var div1 = $('.order3').attr('id');

	$('#'+filename).removeClass(old_class);
	$('#'+filename).addClass("order3");

	$("#"+div1).removeClass("order3");
	$("#"+div1).addClass(old_class);

// ----------------------------------------    ART SECTION   -----------------------------------


	// Show PNG file 

	$('.art').click(function (){

		var curr_class = $(this).attr('class').split(' ')[1];
		window.location.href = `/images/${curr_class}.png`;
	});



// ---------------------------------------    ABOUT ME  -------------------------------------------

	// Copying mobile number to clipboard

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

    // Redirecting to scoial accounts

    $('.img-click').click(function(){

    	var host_name = $(this).attr('href');
    	window.location.href = host_name;
    });

// ---------------------------------------    Projects  -------------------------------------------

    // Kathputli/Puppet animation

    var colors = ['#000000', "#00b8a9","#e84545" ,"#f6416c" ,"#ffde7d"]


    $('.color').click(function(){


    		$(".artboard").removeClass("artdrop");

    		var curr_color = $(".artboard-back").css("background-color");

    		$('.artboard').css("background-color",curr_color);
    		var opac = $(".artboard").css("opacity");
    		$('.artboard').css("opacity",opac);
    		


    		var color_name = $(this).attr("class").split(' ')[1];
    		var index  = colors[color_name.slice(5)];

    		$(".artboard-back").css("background-color",index);
    		
    		$(".artboard").addClass("artdrop");

    });


});

