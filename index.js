$(function(){

// ----------------------------------------    COMMON   -----------------------------------

	// Navigation 

	var url = new URL(window.location.href);
	url = url.pathname;
	console.log("URL : ",url);
	var filename = url.replace("/","").replace(".html","").replace(".pdf","");
    console.log("filename : ",filename);


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

	// -------------------------- CS Section ----------------------

	$('.parallel').click(function(){

		var project_num = $(this).attr("class").split(' ')[1].slice(-1);
		
		$(".project1").css("display","none");
		$(".project2").css("display","none");
		$(".project3").css("display","none");
		$(".project4").css("	display","none");
		$(".project5").css("display","none");

		$(".parallel1").css("background-color","#372f44");
		$(".parallel2").css("background-color","#372f44");
		$(".parallel3").css("background-color","#372f44");
		$(".parallel4").css("background-color","#372f44");
		$(".parallel5").css("background-color","#372f44");

		$(`.parallel${project_num}`).css("background-color","#f3e600");
		$(`.project${project_num}`).css("display","block");



	});

    
	// -------------------------  ART Section ----------------------


    // Kathputli/Puppet animation

    var colors = ['#000000', "#00b8a9","#e84545" ,"#f6416c" ,"#ffde7d"]


    $('.color').click(function(){



    	// Puppet controller animation


    		$(".pasa2").addClass("pasa2rotate");
    		$(".pasa4").addClass("pasa4rotate");

    		setTimeout(function () {
                $(".pasa2").removeClass("pasa2rotate");
                $(".pasa4").removeClass("pasa4rotate");
            }, 2000);


    	// Puppet string animation

    		

    		$(".line1").addClass("slantline");
    		$(".line5").addClass("slantline");
    		$(".line4").addClass("straightline");
    		$(".line8").addClass("straightline");	

    		setTimeout(function () {
               	$(".line1").removeClass("slantline");
	    		$(".line5").removeClass("slantline");
	    		$(".line4").removeClass("straightline");
	    		$(".line8").removeClass("straightline");
            }, 2000);


    	// Puppet Hand animation



    		$(".hand5").addClass("handanimate");
    		$(".hand8").addClass("handanimate1");

    		setTimeout(function () {
	    		$(".hand5").removeClass("handanimate");
	    		$(".hand8").removeClass("handanimate1");                
            }, 2000)


    	// Artboard drop animation

    		$(".artboard").removeClass("artdrop");

    		//----------------------------------------------------------------------SYNTAX-------------------------------------
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

