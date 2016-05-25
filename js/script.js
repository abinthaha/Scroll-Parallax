var TopPosArray = [];
$(document).ready(function () {
	var body = $("body"),
		st = $(document).scrollTop(),
		flag = true,
		oldPos = 0;

	$('.contents section').each(function(item) {
		TopPosArray.push($(this).offset().top);
		body.animate({scrollTop:1}, function() {});
	});

	$(document).scroll(function (event) {
		var current = $('#navigator .active'),
			index = current.index(),
			st = $(document).scrollTop();

		// if (st > oldPos) {
		// 	oldPos = st;
		// 	if (st%768 > 192) {
		// 		var topVal = TopPosArray[index+1];
		// 		body.animate({scrollTop:topVal+1}, function() {});
		// 	}
		// }
		// else {
		// 	oldPos = st;
		// 	if (st%768 > 192) {
		// 		var topVal = TopPosArray[index];
		// 		body.animate({scrollTop:topVal+1}, function() {});
		// 	}
		// }

		if (st > TopPosArray[index+1]) {
			current.removeClass('active');
			current.next().addClass("active");
		}
		else if (st < TopPosArray[index]) {
			current.removeClass('active');
			current.prev().addClass("active");
		}		
	});

	$('#navigator').on('click', 'li', function (ev) {
		var index = $(this).index();
		var top = TopPosArray[index];
		body.animate({scrollTop:top+1}, function() {});
	});
});