$(function() {

	$(".popup").magnificPopup();

	//E-mail Ajax Send
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо мы с вами свяжемся в течении 2 минут!");
			setTimeout(function() {
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
		debugger;
	//E-mail Ajax Send
	$("#formal").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо мы с вами свяжемся в течении 5 минут!");
			setTimeout(function() {
				$.magnificPopup.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
