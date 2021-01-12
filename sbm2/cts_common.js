<!--


////////////////////////
//ロードでフェードイン//
////////////////////////

$('head').append(
	'<style type="text/css">#container { display: none; } #fade { display: block; } #loader { display: block; }</style>'
);

jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
    $("#container").css("display", "block");
    $("#cts").css("display", "block").css("opacity", 0);
	headImageSize();
	headImagesSet();
	downNavi();
	$("#loader").fadeOut(500);
    $("#fade").delay(1000).fadeOut(1000,"easeOutExpo",function(){ownAppend();headImagesAnimation();});
});


////////////////////////
//ヘッド画像サイズ調整//
////////////////////////

function headImageSize(){
	var w = $(window).width();
	var h = Math.floor($(window).width()*1.5625);
	$("#headImages img,#headImages_stay img").css({"width":w,"height":h});
}
var timer = false;
$(window).resize(function() {
    if (timer !== false) {clearTimeout(timer);}
    timer = setTimeout(headImageSize());
});

////////////////////
//ヘッド画像アニメ//
////////////////////

function headImagesSet(){
    $('#headImages img:gt(0)').hide();
}
function headImagesAnimation(){
	setInterval(function() {
		$('#headImages :first-child').fadeOut(2000).next('img').fadeIn().end().appendTo('#headImages');
	},3500);
}

//////////////////
//スクロール促す//
//////////////////
function downNavi(){
$("#downNavi img").animate({bottom:"+=7px"},300,'easeInCubic').animate({bottom:"-=7px"}, 300,'easeOutCubic');
setTimeout("downNavi()",1000);
}

-->