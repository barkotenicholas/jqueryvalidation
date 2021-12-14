
$(document).ready(function(){
    $('#submit').click(function(){

        var name = $('#name').val();

        var email = $('#email').val();

        var pass = $('#pass').val();

        if(name.length == ""){
            $('#p1').text("Please enter your name");
            $('#name').focus();
            return false;
        }
        else if(email.length == ""){
            $('#p2').text("Please enter your name");
            $('#email').focus();
            return false;
        }
        else if(pass.length == ""){
            $('#p3').text("Please enter your name");
            $('#name').focus();
            return false;
        }
        else{
            var con = confirm("Are you done");
            if(con == true){
                alert("Welcome to our website");
            }
        }

    });
});