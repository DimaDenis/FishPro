/**
 * Created by Denis on 20.06.2016.
 */
$(".tabs input").click(function(){
    $(".tabs input").removeClass('tab-active');
    // $(".tabs input").addClass('tab-active');
    $('.tabs-text div').addClass('hidden');
    $($(this).attr('data-id') + '-text').removeClass('hidden');
    $(this).addClass('tab-active');
});


// $(".nav-header li").click(function(){
//     $(".nav-header>li>ul").removeClass('hidden');
// });
//
// $(".nav-header li>ul>li>a").click(function(){
//     $(".nav-header>li>ul").addClass('hidden');
// });