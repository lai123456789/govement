$(document).on("click",".all img",function (e) { //.siblings().removeClass("left02_active")
    let index = $(this).attr('data-index')
    console.log(index)
    $(this).addClass("left02_active").siblings().removeClass("left02_active")
    $(this).addClass("left02_active").parent().siblings().find("img").removeClass("left02_active")
    $(".showContentRight > div").eq(index).removeClass("active_show").siblings().addClass("active_show")
})
// $(document).on("click",".diyi",function (e) { //.siblings().removeClass("left02_active")
//     $(this).addClass("left02_active")
//     $(".shahu").removeClass("left02_active")
//     $(".tangkeng").removeClass("left02_active")
//     $(".dier").removeClass("left02_active")
//     $(".bilin").removeClass("left02_active")
//     $(".eft02_right2").show()
//     $(".eft02_right3").hide()
//     $(".eft02_right_shahu").hide()
//     $(".eft02_right_bilin").hide()
//     $(".eft02_right_tangkeng").hide()
// })
// $(document).on("click",".shahu",function (e) {
//     $(this).addClass("left02_active")
//     $(".diyi").removeClass("left02_active")
//     $(".tangkeng").removeClass("left02_active")
//     $(".dier").removeClass("left02_active")
//     $(".bilin").removeClass("left02_active")
//     $(".eft02_right2").hide()
//     $(".eft02_right3").hide()
//     $(".eft02_right_shahu").show()
//     $(".eft02_right_bilin").hide()
//     $(".eft02_right_tangkeng").hide()
// })
// $(document).on("click",".tangkeng",function (e) {
//     $(this).addClass("left02_active")
//     $(".diyi").removeClass("left02_active")
//     $(".shahu").removeClass("left02_active")
//     $(".dier").removeClass("left02_active")
//     $(".bilin").removeClass("left02_active")
//     $(".eft02_right2").hide()
//     $(".eft02_right3").hide()
//     $(".eft02_right_shahu").hide()
//     $(".eft02_right_bilin").hide()
//     $(".eft02_right_tangkeng").show()
// })
// $(document).on("click",".dier",function (e) {
//     $(this).addClass("left02_active")
//     $(".diyi").removeClass("left02_active")
//     $(".shahu").removeClass("left02_active")
//     $(".tangkeng").removeClass("left02_active")
//     $(".bilin").removeClass("left02_active")
//     $(".eft02_right2").hide()
//     $(".eft02_right3").show()
//     $(".eft02_right_shahu").hide()
//     $(".eft02_right_bilin").hide()
//     $(".eft02_right_tangkeng").hide()
// })
// $(document).on("click",".bilin",function (e) {
//     $(this).addClass("left02_active")
//     $(".diyi").removeClass("left02_active")
//     $(".shahu").removeClass("left02_active")
//     $(".tangkeng").removeClass("left02_active")
//     $(".dier").removeClass("left02_active")
//     $(".eft02_right2").hide()
//     $(".eft02_right3").hide()
//     $(".eft02_right_shahu").hide()
//     $(".eft02_right_bilin").show()
//     $(".eft02_right_tangkeng").hide()
// })

$(function(){
    var slideHeight = 210; // px
    var defHeight = $('.text').height();
    if(defHeight >= slideHeight){
        $('.text').css('height' , slideHeight + 'px');
        $('.read-more').append('<span>展开...</span>');
        $('.read-more span').click(function(){
            var curHeight = $('.text').height();
            if(curHeight == slideHeight){
                $('.text').animate({
                    height: defHeight
                }, "normal");
                $('.read-more span').html('收起');
            }else{
                $('.text').animate({
                    height: slideHeight
                }, "normal");
                $('.read-more span').html('展开...');
            }
            return false;
        });
    }
}); //展开显示更多
