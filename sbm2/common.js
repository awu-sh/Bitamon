<!--

//////////////////////////////////////////////
//リンク時にフェードアウトしてから、画面遷移//
//////////////////////////////////////////////

$(function() {
$('a.linkFO').click(function(){
// URLを取得する

// URLを取得する
var url = $(this).attr('href');
 
// URLが空ではない場合
if (url != '') {
    // フェードアウトしてから、取得したURLにリンクする
    $('#fade').fadeIn(500,"easeInCubic");
    setTimeout(function(){
location.href = url;
    }, 700);
}
return false;
});
});


-->