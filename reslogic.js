// testing logic through e-mail link.

// not being entered as a string

// Header Buttons




$(".enterbutton").on("click", function(){
    var pretendCurrency = document.getElementById("emailtext").value;
    localStorage.setItem("currency",pretendCurrency);

})


var currencyAmount = localStorage.getItem("currency");

APIKey = ""

findTheCurrency();



// URL for latest rates from USD
function findTheCurrency(){
    
    var currencyURL = "https://openexchangerates.org/api/latest.json?app_id=44872a8125c54b61a87af8a492745d21";
    
    $.ajax({
        url: currencyURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var rate1 = response.rates.CAD
        var rate2 = response.rates.ZAR
        var rate3 = response.rates.EUR
        var rate4 = response.rates.JPY
        var rate5 = response.rates.GBP
        var rate6 = response.rates.CHF
        console.log(rate1);
        console.log(rate2);
        console.log(rate3);
        console.log(rate4);
        console.log(rate5);
        console.log(rate6);


        //Canadian
        yourChargeCAD = rate1 * currencyAmount;
        console.log(yourChargeCAD);

        // ZAR
        yourChargeZAR = rate2 * currencyAmount;

        // EUR

        yourChargeEUR = rate3 * currencyAmount;

        yourChargeJPY = rate4 * currencyAmount;

        yourChargeGBP = rate5 * currencyAmount;

        yourChargeCHF = rate6 * currencyAmount;

    

        costButton = $(".costButtons")
        
        var button1 = $("<button>");
        button1.attr("type", "submit");
        button1.text("Canadian Dollars (CAD) Due: "+yourChargeCAD); // canadian dollars
        costButton.append(button1);

        
        var button2 = $("<button>");
        button2.attr("type", "submit");
        button2.text("South African Rand (ZAR) Due: "+"$"+yourChargeZAR); // south african dollars
        costButton.append(button2);

        var button3 = $("<button>");
        button3.attr("type", "submit");
        button3.text("Euro (EUR) Due: "+"$"+yourChargeEUR); // euros
        costButton.append(button3);

        var button4 = $("<button>");
        button4.attr("type", "submit");
        button4.text("Japanese Yen (YEN) Due: "+"$"+yourChargeJPY); // japanese yen
        costButton.append(button4);

        
        var button5 = $("<button>");
        button5.attr("type", "submit");
        button5.text("British Pound (GBP) Due: "+"$"+yourChargeGBP); // british pound
        costButton.append(button5);

        
        var button6 = $("<button>");
        button6.attr("type", "submit");
        button6.text("Swiss Franc (CHF) Due: "+"$"+yourChargeCHF); // swiss franc
        costButton.append(button6);
        





        //console.log(yourCharge);








    });


}









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

// $(".button-email").on("click", function(){ 

//     var emailText = $("#emailtext").val();

//     $("#emailtext").val(localStorage.setItem("Email", JSON.stringify(emailText)))

// });
// $(".button-phone").on("click", function(){

//     var phoneText = $("#phonetext").val();

//     $("#emailtext").val(localStorage.setItem("Phone", JSON.stringify(phoneText)))

// });

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

