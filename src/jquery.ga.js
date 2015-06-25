
;(function( $ ){

	// bind ga event on target object with data-attribute.
	$.fn.bindGaEvent = function() {
	    return this.each(function() {

	    	var evt = $(this).attr("data-ga-event") || "click",
		    	cate = $(this).attr("data-ga-category") || "button",
		    	action = $(this).attr("data-ga-action") || "click",
		    	label = $(this).attr("data-ga-label") || "none";

	    	$(this).on( evt , function() {
	            event.preventDefault();
	            ga(
	                'send',
	                'event',
	                cate,
	                action,
	                label
	            );
	            if ($(this).is("[href]")) {
	                if ($(this).attr("href") !== "#" && $(this).attr("target") !== "_blank") {
	                    var href = $(this).attr("href");
	                    setTimeout(function() {
	                        window.location = href;
	                    }, 300);
	                }
	            }
	        });

	    });
	};

})(jQuery);
