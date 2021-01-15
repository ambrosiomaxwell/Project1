// testing logic through e-mail link.

// not being entered as a string

// Header Buttons

APIKey = "";

//Building object for cart

var items = [{
    meal:'Chicken Strips',
    selection:['honey mustard','Ranch'],
    cost: 9
    },
    {
    meal:'burger',
    selection:['pickles','ketchup'],
    cost: 10

}]

console.log(items[0].meal);
console.log(items[1].cost);

// var cartCost = ["10", "9", "20", "40"];

// var cartSum = cartCost[0]+cartCost[1]+cartCost[2]+cartCost[3];

var addCost = items[0].cost + items[1].cost
console.log(addCost);

// building html from object in items of cart //

var cartBuild = $(".cartItems"); // Div for cart items start

headingCart = $("<h1>");
headingCart.attr("class", "cartHeading");
headingCart.text("The following items have been added to your cart")
cartBuild.append(headingCart);

cartItemH5 = $("<h5>");
cartItemH5.attr("class", "cartItem1");
cartItemH5.text("Meal Ordered: " + items[0].meal + " with "+items[0].selection[1]);
cartItemCost1 = $("<h5>");
cartItemCost1.attr("class", "cartCost1");
cartItemCost1.text("Order Total is: " + items[0].cost + " USD");
headingCart.append(cartItemH5,cartItemCost1);
// setting local storage for cart Item 1
localStorage.setItem("cost1", items[0].cost) // setting a value to use for currency cost


var headButton = $(".topnav");

var buttonHead1 = $("<button>");
var buttonLink1 = $("<a>");
buttonHead1.attr("type","submit");
buttonHead1.text("Homepage");
buttonLink1.attr({"class":"active", "href":"#main.html"});
headButton.append(buttonHead1);
buttonHead1.append(buttonLink1);

var buttonHead2 = $("<button>");
var buttonLink2 = $("<a>");
buttonHead2.attr("type","submit");
buttonHead2.text("Menu");
buttonLink2.attr({"class":"active", "href":"#menu.html"});
headButton.append(buttonHead2);
buttonHead2.append(buttonLink2);


// $(".enterbutton").on("click", function(){
//     var pretendCurrency = document.getElementById("emailtext").value;
//     localStorage.setItem("currency",pretendCurrency);

// })



//var currencyAmount = localStorage.getItem("currency");

//taking from a new source variable 
var currencyAmount = localStorage.getItem("cost1")

APIKey = "44872a8125c54b61a87af8a492745d21";

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
        // console.log(rate1);
        // console.log(rate2);
        // console.log(rate3);
        // console.log(rate4);
        // console.log(rate5);
        // console.log(rate6);


        //Canadian
        yourChargeCAD = rate1 * currencyAmount
        cadRate = yourChargeCAD.toFixed(2);
        console.log(yourChargeCAD);

        // ZAR
        yourChargeZAR = rate2 * currencyAmount;
        zarRate = yourChargeZAR.toFixed(2);

        // EUR
        yourChargeEUR = rate3 * currencyAmount;
        eurRate = yourChargeEUR.toFixed(2); // 2 decimal places

        // YEN

        yourChargeJPY = rate4 * currencyAmount;
        yenRate = yourChargeJPY.toFixed(2);

        // British Pound
        yourChargeGBP = rate5 * currencyAmount;
        gbpRate = yourChargeGBP.toFixed(2);
        
        //Swiss Franc
        yourChargeCHF = rate6 * currencyAmount;
        chfRate = yourChargeCHF.toFixed(2);
    

        costButton = $(".costButtons") // Div for Cost Buttons

        paymentPref = $("<h3>");
        paymentPref.attr("class", "paymentPref");
        paymentPref.text("What is your preferred currency to pay with?");
        costButton.append(paymentPref);
        
        //creating button for canadian dollar
        var button1 = $("<button>");
        button1.attr({"type":"submit", "class":"cadButton"});
        button1.text("Canadian Dollars (CAD)"); // canadian dollars
        costButton.append(button1);

        //creating button for south african dollar
        var button2 = $("<button>");
        button2.attr({"type":"submit", "class":"zarButton"});
        button2.text("South African Rand (ZAR)"); // south african dollars
        costButton.append(button2);

        //creating button for euro
        var button3 = $("<button>");
        button3.attr({"type":"submit", "class":"eurButton"});
        button3.text("Euro (EUR)"); // euros
        costButton.append(button3);

        //creating button for yen
        var button4 = $("<button>");
        button4.attr({"type":"submit", "class":"yenButton"});
        button4.text("Japanese Yen (YEN)"); // japanese yen
        costButton.append(button4);

        //creating button for GBP
        var button5 = $("<button>");
        button5.attr({"type":"submit", "class":"gbpButton"});
        button5.text("British Pound (GBP)"); // british pound
        costButton.append(button5);

        //creating button for CHF
        var button6 = $("<button>");
        button6.attr({"type":"submit", "class":"chfButton"});
        button6.text("Swiss Franc (CHF)"); // swiss franc
        costButton.append(button6);

        // canadian button click event

        $(".cadButton").on("click", function(){
            var cadCost = $("<h1>");
            cadCost.text("Your final Order Cost is: " + cadRate +" CAD Canadian Dollars");
            cadCost.attr("class", "cadcost")
            costButton.empty();
            costButton.prepend(cadCost);
        
        });

        // south african rand cost click event

        $(".zarButton").on("click", function(){
            var zarCost = $("<h1>");
            zarCost.text("Your final Order Cost is: " + zarRate +" South African Rand");
            zarCost.attr("class", "zarcost")
            costButton.empty();
            costButton.prepend(zarCost);
        
        });

        // Euro cost click event

        $(".eurButton").on("click", function(){
            var eurCost = $("<h1>");
            eurCost.text("Your final Order Cost is: " + eurRate +" Euros");
            eurCost.attr("class", "eurcost")
            costButton.prepend(eurCost);
        });

        // YEN cost click event

        $(".yenButton").on("click", function(){
            var yenCost = $("<h1>");
            yenCost.text("Your final Order Cost is: " + yenRate +" YEN");
            yenCost.attr("class", "yencost")
            costButton.prepend(yenCost);
        });

        // GBP Cost Click Event

        $(".gbpButton").on("click", function(){
            var gbpCost = $("<h1>");
            gbpCost.text("Your final Order Cost is: " + gbpRate +" GBP");
            gbpCost.attr("class", "gbpcost")
            costButton.prepend(gbpCost);
        });

        // CHF Swiss Franc Cost Event

        $(".chfButton").on("click", function(){
            var chfCost = $("<h1>");
            chfCost.text("Your final Order Cost is: " + chfRate +" CHF");
            chfCost.attr("class", "gbpcost")
            costButton.prepend(chfCost);
        });       

    });

}