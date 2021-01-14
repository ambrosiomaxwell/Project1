


// maybe using this variable for directions
// var information = {
//    email: "stored email"
//    phone: "stored phone"
// }

// button on totals page

//$(".button-total").on("click"m function(){
    // var buttoncost = $("clicktotalcost").val();
    // maybe use local storage
    // maybe pull from one variable on page
    // call function findCurrency(valueofcurrency);


///});

// value for currency selected
// drop down menu
// then ok based on drop down


// value for call //

$(".button-email").on("click", function(){ 

    var emailText = $("#emailtext").val();

    $("#emailtext").val(localStorage.setItem("Email", JSON.stringify(emailText)))

});
$(".button-phone").on("click", function(){

    var phoneText = $("#phonetext").val();

    $("#emailtext").val(localStorage.setItem("Phone", JSON.stringify(phoneText)))

});

// Using Currency Calculator

// function findCurrency(valueofcurrency){

   // endpoint: 'convert' ;
   // access_key:         ;

   // define currencies

   // from = 'currency value selected' 
   // to = "specified currency"
   // amount = 'to' // Car.total = $(".placewheretotaliscalculated")

   // var convertValue = 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount, 

   // $.ajax({
       // url: convertValue,
       // method: "GET",
   // }).then(function(response){
       // console.log(convertValue);
       // console.log(response);

       // call out variables based on console object
       //

       // from documentation
       // $.ajax({
           // url:
           // datatype: 'jsonp'
           // success: function(finalValue){
               //alert(finalValue.result);

           //}

       //})


   //})


