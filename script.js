//setting the slideshow state as paused or not paused
var paused = false;

function initializeSlideshow(){
	console.log("init slides");

	// clicking on thumbnail and it sets that image to the big image
	$(".crop-img").click(function(){
		$("#bigImage").attr('src',
			$(this).attr('src'));
	});

	var counter = 1;
	$("#image" + counter).click();

	//backward slide button action
	$("#backward").click(function(){
		counter = counter - 1;
		if(counter < 1){
			counter = 4;
		}
		//loading that thumbnail to big image
		$("#image" +counter).click();
	});

	//forward slide show button action
	$("#forward").click(function(){
		counter = counter + 1;
		if(counter > 4){
			counter = 1;
		}
		//loading that thumbnail to big image
		$("#image" +counter).click();
	});

	//unpauses slideshow
	$("#bigImage").click(function(){
		paused = !paused;
	});

	setInterval(function(){
		if(!paused){
			$("#forward").click();
		};
	}, 5000);

};

//takes code from body and pulls into

$("body").ready(function(ev){
	console.log("body ready");

	initializeSlideshow();
});

