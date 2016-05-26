$(function() {
	$("#1").on("click",function() {
	$("html body").animate({"scrollTop":$(".parts1").offset().top},500);
	return false;
	});

	$("#2").on("click",function() {
	$("html body").animate({"scrollTop":$(".parts2").offset().top},500);
	return false;
	});

	$("#3").on("click",function() {
	$("html body").animate({"scrollTop":$(".parts3").offset().top},500);
	return false;
	});

	$("#4").on("click",function() {
	$("html body").animate({"scrollTop":$(".parts4").offset().top},500);
	return false;
	});


});