function autoNotice(obj) {
    
    var h = $(obj).find("ul:first li:first").height();

    $(obj).find("ul:first").animate({marginTop: -h+"px"},300,
    function() {
        $(this).css({marginTop: "0px"}).find("li:first").appendTo(this);
    });
}

var myar = setInterval('autoNotice("#scrollDiv")', 2000);