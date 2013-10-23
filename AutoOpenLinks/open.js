$(function(){	
	$("#links").focus();	

	document.execCommand('paste');

	$("#OpenLinks").click(function(){

 		var links = $("#links").val();
	
		var lb = links.replace(/\n|\r/g, "~");
		var linkArray = lb.split("~");

		for(var i=0; i<linkArray.length; i++){
			chrome.tabs.create({'url': linkArray[i]});
		}
	});
});