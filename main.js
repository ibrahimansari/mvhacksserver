setInterval(updateFB(),600);

function updateFB() {
	var $p = $("#log");
	$p.innerText($p.innerText()+"LOG1");
}
/*
var timer = $.timer(function() {
	$('#counter').html(++count);
});
timer.set({ time : 1000, autostart : true });