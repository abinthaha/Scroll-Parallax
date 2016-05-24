var TopPosArray = [];
$(document).ready(function () {

	var winHeight = $(window).height();
	$('.contents section').css('height', winHeight+'px');


	var body = $("html, body"),
		st = $(document).scrollTop(),
		flag = true;

	$('.contents section').each(function(item) {
		TopPosArray.push($(this).offset().top);
		body.animate({scrollTop:1}, '2000', 'swing', function() {});
	});

	$(document).scroll(function (event) {
		var current = $('#navigator .active'),
			index = current.index(),
			st = $(document).scrollTop();

		console.log(st);
		if (st >= TopPosArray[index+1]) {
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
		body.animate({scrollTop:top+1}, '2000', 'swing', function() {});
	});
});