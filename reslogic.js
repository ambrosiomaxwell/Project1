
// var information = {
//    email: "stored email"
//    phone: "stored phone"
// }

$(".button-email").on("click", function(){ 

    var emailText = $("#emailtext").val();

    $("#emailtext").val(localStorage.setItem("Email", JSON.stringify(emailText)))

});
$(".button-phone").on("click", function(){

    var phoneText = $("#phonetext").val();

    $("#emailtext").val(localStorage.setItem("Phone", JSON.stringify(phoneText)))

});

