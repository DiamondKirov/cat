$(document).ready(function () {
    console.log($('.slider__range').val());
    $('.slider__range').on("change mousemove", function(){
        $val1 = $('.slider__range').val()/100;
        $val2 = 1-$('.slider__range').val()/100;
        $('.before').css({
            opacity: $val1
        })
        $('.after').css({
            opacity: $val2
        })
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