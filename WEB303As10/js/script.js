$(function () {

    var submit = $('#submit');

    submit.attr('disabled', 'disabled');

    submit.click(function (e) {
        e.preventDefault();
        $('body').append(`Welcome ${$('#username').val()}! The country code you selected is ${$('#countries').find(":selected").attr('value')}`);
        submit.removeClass("enable");
        submit.addClass("disable");
        submit.attr('disabled', 'disabled');
    });

    
    $($(":input")).on("input", function () {
        if ($('#username').val().length > 0 && 
        $('#pswd').val().length > 12 && 
        $('#pswd').val() === $('#ConPswd').val() && 
        $("#checkbox").prop('checked') == true && 
        $('#countries').find(":selected").text() != 'Select your country') {         
            submit.removeAttr('disabled');       
        } 
    });

    
    var select = document.getElementById("countries");

    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        var cn = document.createElement("option");
        cn.textContent = country.name;
        cn.value = country.code;
        select.appendChild(cn);
    }
});