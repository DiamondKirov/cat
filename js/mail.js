$(document).ready(function () {

   $("#form").bind("submit", function(e){
      
      e.preventDefault();
        $.ajax({
           type: "POST",
           url: "./ajax/mail.php",
           dateType: "text",
           data: $(this).serialize(),
           success: function () {
               alert('Данные отправлены')
           },
           error: function(){
            alert('Данные не отправлены')
           }
       });
   })
});
