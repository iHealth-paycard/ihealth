(function(){
    $("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
        console.log("Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
        console.log("Form submitted successfully");
    }
});
})();

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();

    Email.send({ 
        Host: "smtp.elasticemail.com", 
        Username: "eromtush@gmail.com", 
        Password: "008651DCF4CA17CABFFEA5FBE71FC5BB577C", 
        To: 'eric.kimani@techcloud.co.ke', 
        From: email, 
        Subject: msg_subject, 
        Body: `${name},\n ${message}`, 
      }) 
        .then(function (message) { 
            formSuccess(message);

        }); 


    // $.ajax({
    //     type: "GET",
    //     url: "#",
    //     data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
    //     success : function(text){
    //         if (text == "success"){
    //             formSuccess();
    //         } else {
    //             formError();
    //             submitMSG(false,text);
    //         }
    //     }
    // });
}

function formSuccess(msg){
    $("#contactForm")[0].reset();
    console.log(msg);
    submitMSG(true, 'Message Submitted Successfully !!')
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}