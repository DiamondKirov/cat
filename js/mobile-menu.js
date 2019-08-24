$(document).ready(function () {
    $('.no-js').removeClass();

    $('.burger').on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('nav__item-burger--close')){
            $(this).removeClass('nav__item-burger--close');
            $(this).addClass('nav__item-burger');
            $('.header__navigation').css({
                opacity: '0'
            })
        } else {
            $(this).removeClass('nav__item-burger');
            $(this).addClass('nav__item-burger--close');
            $('.header__navigation').css({
                opacity: '1'
            })
        }
       
       
    })

   
});