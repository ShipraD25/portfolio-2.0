$(document).ready(function() {
    $("#contactme").on("click", function(event) {
        event.preventDefault();
        var name = $("#ExampleInputname").val();
        var email = $("#ExampleInputemail").val();
        var message = $("#exampleFormControlTextarea1").val();
        console.log("clicked:", name, email, message);

        if (name === "" || email === "" || message === "") {
            console.log("It was empty");
            return false;
        } else {
            console.log("It worked!");
            var newMsg = {
                    name: name,
                    email: email,
                    message: message
                }
                //ajax
            $.post("/", newMsg).then(function() {
                window.location.href = "mailto:drshipradyundi@gmail.com?" + "subject=" + name + "&body=" + message;
            });
        }
    });


});