var strVar="";
strVar += " <div id=\"ird\" style=\"position:fixed; opacity:1; width:100%; top:0; left:0; background-color:rgba(72, 155, 219, 1); color:white; box-shadow:5px 5px 50px #efefef;   z-index:99999999999999; height:55px; font-family:tahoma;  \">";
strVar += "  <span id=\"donate\">  </span>  <h2 style=\"text-align:center; color:white; font-size:18px; font-weight:500; margin:0; margin-top:17px;\">  Facebook Messages Cleaner <small> ( <span id='num'> ........... </span>  )</small>";
strVar += "	  <\/h2>";
strVar += "  <button id=\"btnclose\" style=\"float:right; margin-right:40px; cursor:pointer; background-color:#d9534f; color:white; border:1px solid maroon; margin-top:-25px; border-radius:5px; padding:4px; font-size:15px;\"> Close </button>";
strVar += "  <\/div>";
var dm = 0;
var tt = 0;
if($("#ird").length<1){
	$("html").prepend(strVar);
}
$("#btnclose").on("click",function(){
	window.location.reload();
})

var ssm = setInterval(function(){
	tt++;
	var pt = document.querySelectorAll('[data-pagelet="MWThreadList"]')[0];
	$(pt).scrollTop(pt.scrollHeight);
	$("#num").text("Gettting "+$('[data-testid="mwthreadlist-item-open"]').length+" Messages. Please wait.");
	if(tt==5){
		deletefbmessage();
		clearInterval(ssm);
	}
},500);

function deletefbmessage(){
	var elms = $('[data-testid="mwthreadlist-item-open"]').eq(0);
	var button = elms.find(".hu5pjgll.m6k467ps").next();
	if(button.length){
		button.eq(0).trigger("click");
		var s2 = setInterval(function(){
			var deleteBtn = $('.qzhwtbm6.knvmm38d:contains("Delete conversation"),.qzhwtbm6.knvmm38d:contains("Delete")').eq(0);
			if(deleteBtn.length){
				deleteBtn.trigger("click");
				clearInterval(s2);
				var s3 = setInterval(function(){
					var b3 = $('.lrazzd5p.bwm1u5wc:contains("Delete Conversation"),.lrazzd5p.bwm1u5wc:contains("Delete")');
					if(b3.length){
						clearInterval(s3);
						elms.attr("dfmsgs",true);
						b3.trigger("click");
						dm++;
						setTimeout(function(){
							deletefbmessage();
						},1000);
						$("#num").text(dm+" Messages Deleted.");
					}
				},100);
			}
		},100);
	} else {
		$("#num").text("Delete Finished. "+dm+" Messages were Deleted.");
	}
}
