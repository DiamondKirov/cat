$(document).ready(function () {
    $('.slider__range').on("change mousemove", function(){
        $val1 = $('.slider__range').val()/100;
        $val2 = 1-$('.slider__range').val()/100;
        $('.img__before').css({
            opacity: $val1
        })
        $('.img__after').css({
            opacity: $val2
        })
    })
    $(window).resize( function(){
        if ($(window).width()<=650){
            $('.img__before').css({
                opacity: 1
            })
            $('.img__after').css({
                opacity: 1
            })
        } else {
            $('.img__before').css({
                display: 'block'
            })
            $('.img__after').css({
                display: 'block'
            })
        }
    })
    
    $(document).bind('scroll', function(){
        console.log($(document).scrollTop())
        if ($(document).scrollTop() > 200){

            $('.categories__item').css({
              transfrom: 'scale(1)'  
            })
        }
    })

    $('.switch__left').on('click', function(){
        $('.img__before').css({
            display: 'block'
        })
        $('.img__after').css({
            display: 'none'
        })
    })

    $('.switch__right').on('click', function(){
        $('.img__before').css({
            display: 'none'
        })
        $('.img__after').css({
            display: 'block'
        })
    })
});
