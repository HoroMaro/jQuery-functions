jQuery(document).ready(function($){
    // .add()
    $('.add').find('a').click(function(){
        $('.add > p').add('.add > a').css({'font-size': '50px' , 'color': 'green' });
    });
    // .addClass() 
    $('.addclass').find('a').click(function(){
        $('.addclass > p').addClass('addclass-example');
    });
    // .after() 
    $('.after').find('a').click(function(){
        $('.after > p').after('<div class="after-example"></div>');
    });
    // .andSelf()
    $('.andself').find('a').click(function(){
        $(this).andSelf().addClass('test');
    });
    // .animate()
    $('.animate').find('a').click(function(){
        $('.animate > p').animate({'height': 'toggle', 'padding': 'toggle', 'margin': 'toggle'} , 4000, function(){

        });
    });
    // .append()
    $('.append').find('a').click(function(){
        $('.append > p').append(" It`s working!!! It`s working!!!");
    });
    // .before()
    $('.before').find('a').click(function(){
        $('.before > p').before('<div class="after-example"></div>');
    });
    // .dblclick()
    $('.dblclick').find('a').dblclick(function(){
        alert(".dblclick() called.");
    });
    // .empty()
    $('.empty').find('a').click(function(){
        $('.empty > p').empty();
    });
    // .has()
    $('.has').find('a').click(function(){
        $('.has').has('p').css({'border': '1px solid red', 'border-radius': '50px'});
    });
    // .hide() and .show()
    $('.hide').find('a').click(function(){
        if ($('.hide > p').hasClass('hidden')) {
            $('.hide > p').show();
            $('.hide > p').removeClass('hidden');
        } else {
            $('.hide > p').hide();
            $('.hide > p').addClass('hidden');
        }
    });
    // .length ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
    $('.length').find('a').click(function(){
        let $l = $('.length > p').length;
        alert($l);
    });
    // .mouseenter()
    $('.mouseenter').find('p').mouseenter(function(){
        $('.mouseenter > p').css('color', 'magenta');
    });
    // .mouseleave()
    $('.mouseleave').find('p').mouseleave(function(){
        $('.mouseleave > p').css('color', 'magenta');
    });
    // .parent()
    $('.parent').find('a').click(function(){
        $('.parent > div > p').parent().css('background-color', '#83d7fb');
    });
    // .prependTo() ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
    $('.prependto').find('a').click(function(){
        $('.prependto > p').prependTo('<div class="after-example"></div>');
    });
    // .remove()
    $('.remove').find('a').click(function(){
        $('.remove > p').remove('.remove > p');
    });
    // .scroll()
    $(window).scroll(function(){
        $('.d-none').css('display', 'inline').fadeOut("slow");
    });
    // .toggle()
    $('.toggle').find('a').click(function(){
        $('.toggle > p').toggle();
    });
    // event.pageX and event.pageY ??????????????????????????????????????????????????????????????????????????????????????????????????????????
    $('.eventpage').find('a').click(function(){
        $('.pagelog').text("pageX: " + e.pageX + ", pageY: " + e.pageY);
    });
    // console.log();
    let $a = 0;
    $('.consolelog').find('a').click(function(){
        $a += 1;
        console.log($a);
    });
});