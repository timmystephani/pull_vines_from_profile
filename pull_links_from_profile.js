var urls = [];
$('a').each(function(el) { 
    var href = $(this).attr('href'); 
    try { 
        if (href.indexOf('vine.co/v/') >= 0 && urls.indexOf(href) == -1) { 
	    urls.push(href);
	    console.log(href); 
	} 
    } catch (ex) {} 
});