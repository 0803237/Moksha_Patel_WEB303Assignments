$(function(){
$.ajax({
    type: "Get",
    url: 'interstellar.json',
    dataType: 'json',
    
    success: function(e) 
    {
         for (var i=0; i<e.length; i++) 
         {
           var row = $('<tr><td>'
            + e[i].ID_Number + '</td><td>'
            + e[i].FirstName + '</td><td>' 
            + e[i].LastName + '</td><td>' 
            + e[i].Role + '</td><td>' 
            + e[i].Genre + '</td></tr>'
            );

           $('#characters').append(row);
         }

         var $tr = $('tr td: first-child');
         $tr.addClass("name");
    },

    error: function(jqXHR, textStatus, errorThrown)
    {
         alert('Error found: ' + textStatus + ' ' + errorThrown);
    }
});

$(document).ready(function()
{  
    $('#search').keyup(function()
    {  
         search_table($(this).val());  
    });  
          
    function search_table(value)
    {  
         $('#characters tr').each(function()
         {  
              var found = 'false';  
                    
              $(this).each(function()
              {  
                   if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                   {  
                        found = 'true';  
                        $(this).css('bgcolor', 'green'); 
                        $(this).css('color', 'white');
                   } 

                   else
                   {
                        $(this).css('background', 'green'); 
                        $(this).css('color', 'black');
                   }
              });  
                   
         });  
    }  
});  


$(document).ready(function()
{  
    $('#firstbtn').keyup(function()
    {  
         search_table($(this).val());  
    });  
          
    function search_table(value)
    {
         $('#characters tr').each(function()
         {  
              var found = 'false';  
              
              $(this).each(function()
              {  
                   if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                   {  
                        found = 'true';  
                        $(this).css('bgcolor', 'green'); 
                        $(this).css('color', 'white');
                   }  
                   else
                   {
                        $(this).css('background', 'white'); 
                        $(this).css('color', 'black');
                   }
              });  
         });  
    }  
})
});  

