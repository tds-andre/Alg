function Spinner(div,imgURL){
	var Self = this;
	this.div = div;
	this.url = imgURL || "/kmeans/app/resources/spinner.gif";
	
	//var imgHtml = "<div id='_Spinner' class='Spinner' style='display:none; width:100%;height:100%; position:absolute;z-index:100000;left:0;top:0;background-color:white;opacity:0.5;'><img src=''/></div>";
    var imgHtml = "<div id='_Spinner' class='Spinner' style='display:none; position:absolute;z-index:100000;left:0;top:0;background-color:white;opacity:0.5;'><img src=''/></div>";
	
	
	this.spin = function(){
		var h = $(Self.div).height();
		var w = $(Self.div).width();
		var size = h > w ? w/3:h/3;
		var html = imgHtml.replace("src=''", "src='"+Self.url+"'");
		$(Self.div).append(html);
        var $SpinnerDiv = $("#_Spinner",Self.div);
        $SpinnerDiv.prop("id",Self.div.id+"-spinner");
        $SpinnerDiv.css("width",$(Self.div).width());
        $SpinnerDiv.css("height",$(Self.div).height());
        $SpinnerDiv.css("left",$(Self.div).position().left);
        $SpinnerDiv.css("top",$(Self.div).position().top);
		$img = $("div.Spinner > img",div);
		$img.css("height",size);
		$img.css("width",size);
		$img.css("display","block");		
		$img.css("position", "absolute");
		$img.css("left", w/2 - size/2);
		$img.css("top", h/2 - size/2);
		
		$("div.Spinner",Self.div).css("display","block");
		
	}
	this.stop = function(){
		$("div.Spinner",Self.div).remove();
	}
}
Spinner.prototype.fuck ="";