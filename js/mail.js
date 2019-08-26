$(document).ready(function () {

   $("#form").bind("submit", function(){
      $.ajax({
           type: "POST",
           url: "../ajax/mail.php",
           data: $(this).serialize(),
           dataType: "dataType",
           success: function () {
               alert('Данные отправлены')
           },
           error: function(){
            alert('Данные не отправлены')
           }
       });
   })
});