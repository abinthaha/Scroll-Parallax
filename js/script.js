var TopPosArray = [];
$(document).ready(function () {

	setTimeout(function(){
		$('#loader-wrapper').addClass('displayNone');
	}, 3000);

	var winHeight = $(window).height(),
		body = $("html, body"),
		st = $(document).scrollTop(),
		flag = true,
		oldPos = 0,
		scrollFlag = true;

/*Setting window Height to all the sections in the content**/
	$('.contents section').css('height', winHeight+'px');

/* Creating the side buttons **/
	$('.contents section').each(function(item) {
		$('#navigator').append('<li></li>');
	});
	$('#navigator li:first-child').addClass('active');


	$('.contents section').each(function(item) {
		TopPosArray.push($(this).offset().top);
		body.animate({scrollTop:1}, 'slow');
	});

	$(document).scroll(function (event) {
		var current = $('#navigator .active'),
			index = current.index(),
			st = $(document).scrollTop();
			
		if (st > oldPos) {
			oldPos = st;
			if (st%winHeight < winHeight/2) {
				scrollFlag = true;
			}
			else if((st%winHeight > winHeight/2) && (scrollFlag)) {
				body.animate({scrollTop:TopPosArray[index+1]+1}, 'slow');
				current.removeClass('active');
				current.next().addClass("active");
				scrollFlag = false;
			}
		}
		else {
			oldPos = st;
			if (st%winHeight > winHeight/2) {
				scrollFlag = true;
			}
			else if((st%winHeight < (winHeight/4)*3) && (scrollFlag)) {
				body.animate({scrollTop:TopPosArray[index-1]+1}, 'slow');
				current.removeClass('active');
				current.prev().addClass("active");
				scrollFlag = false;
			}
		}
	});

	$('#navigator').on('click', 'li', function (ev) {
		var index = $(this).index();
		var top = TopPosArray[index];
		body.animate({scrollTop:top+1}, 'slow');
	});
});