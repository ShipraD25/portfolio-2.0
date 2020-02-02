$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        var name = $("#ExampleInputname").val();
        var email = $("#ExampleInputemail").val();
        var message = $("#exampleFormControlTextarea1").val();
        console.log(name, email, message);
        if (name === "" || email === "" || message === "") {
            console.log("It was empty");
            return false;
        } else {
            console.log("It worked!");
            // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here"
            window.location.href = "mailto:drshipradyundi@gmail.com?" + "subject=" + name + "&body=" + message;

        }
    });


});