console.log('hey');


$(document).ready(function(){
	// console.log('hi');


	// Start Back to Top
	$(".btn-backtotops").hide();

	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 370){
			$(".btn-backtotops").show();
		}else{
			$(".btn-backtotops").fadeOut(1000);
		}
	});
	// End Back to Top


	// Start Header

	// Start nav
      
      // for bugger
	  $(".navbuttons").click(function(){

	  	 $(".navbuttons").toggleClass("crossxs");
	  });


	  // for nav
	  $(window).scroll(function(){

	  	let getscrolltop = $(this).scrollTop();
	  	// console.log(getscrolltop);

	  	if(getscrolltop >= 200){
	  		$(".navbar").addClass("navmenus");
	  	}else{
	  		$(".navbar").removeClass("navmenus");
	  	}

	  });


   // End nav

	// End Header


	// Start Properties

	$(".propertylists").click(function(){
        
       // for active items
       // $(this).addClass("activeitems");
       // $(this).siblings().removeClass("activeitems");

       $(this).addClass("activeitems").siblings().removeClass("activeitems");


       // for filter

       let getattvalue = $(this).attr("data-filter");
       // console.log(getattvalue);

       // if(getattvalue == "all"){
       // 	$(".filters").show();
       // }else if(){

       // }

       if(getattvalue === "all"){

       	$(".filters").show("slide",500);
       }else{

       	 $(".filters").hide();

       	 $(".filters").not("."+getattvalue).hide("slide",500);

       	 $(".filters").filter("."+getattvalue).show("slide",500);
       }

	});

	// FOr Image overlay (or) lightbox2
	lightbox.option({
		showImageNumberLabel:false
	})

	// End Properties


	// Start Adv Section

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	})

	// End Adv Section


	// Start Footer Section

	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);

	// End Footer Section





});






