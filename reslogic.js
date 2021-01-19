
var items = [{
    meal:'Chicken Strips',
    selection:['honey mustard','Ranch'],
    cost: 10
    },
    {
    meal:'Burger',
    selection:['pickles','ketchup'],
    cost: 10
    },
    {
    meal: 'Chicken Sandwich',
    selection: ['sharp cheddar', 'pepperjack'],
    cost: 10
    },
    {
    meal: 'Salad',
    selection: ['ranch','vinegar'],
    cost: 10

}]

item1Cost = items[0].cost
item2Cost = items[1].cost
item3Cost = items[2].cost
item4Cost = items[3].cost

totalCost = item1Cost + item2Cost + item3Cost + item4Cost;

//Building menu for orders for checkout

menuItems = $(".menuitems");

var mealOne = $("<h3>");
mealOne.attr("class", "mealone")
mealOne.text("1. " +items[0].meal + " with " + items[0].selection[0]);
menuItems.append(mealOne);

var mealTwo = $("<h3>");
mealTwo.attr("class", "mealtwo");
mealTwo.text("2. "+ items[1].meal + " with " + items[1].selection[0]);
menuItems.append(mealTwo);

var mealThree = $("<h3>");
mealThree.attr("class", "mealtwo");
mealThree.text("3. "+ items[2].meal + " with " + items[2].selection[1]);
menuItems.append(mealThree);

// building html from object in items of cart //

var cartBuild = $(".cartItems"); // Div for cart items start

var rowCart = $("<div>");
rowCart.attr("class", "row");
cartBuild.append(rowCart);



cartItemCost1 = $("<h2>");
cartItemCost1.attr("class", "cartCost1 col-md-12");
cartItemCost1.text("Order Total is: " + totalCost + " USD");
rowCart.append(cartItemCost1);
// setting local storage for cart Item 1
localStorage.setItem("cost1", totalCost) // setting a value to use for currency cost


//var currencyAmount = localStorage.getItem("currency");

//taking from a new source variable 
var currencyAmount = localStorage.getItem("cost1")

findTheCurrency();

costButton = $(".costButtons"); // Div for Cost Buttons

finalHeading = $(".headingFinal"); // Div for final cost


// Building Button for Click Event

var newApp = $(".nextApp");
var newAppRow = $(".nextAppRow");
var areaForJoke = $(".areaforjoke");

buttonNewApp = $("<button>");
buttonNewApp.attr({"class":"newButtonApp col-md-12"},{"type":"submit"});
buttonNewApp.text("Click Here! We want you to laugh today - Would you like to hear a joke?");
newAppRow.append(buttonNewApp);


// API for Joke

$(".newButtonApp").on("click", function(event){
    event.preventDefault();

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://joke3.p.rapidapi.com/v1/joke",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e6c11a1393msh3c8cfb271ca5e65p1b33bbjsn5dcaa2747580",
            "x-rapidapi-host": "joke3.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        console.log(response.content);
        var jokeToday = response.content;

        var jokeResponseH5 = $("<h3>");
        jokeResponseH5.attr("class","jokeresponse");
        jokeResponseH5.text(jokeToday);
        areaForJoke.append(jokeResponseH5)
    
    });

})




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


        //Canadian
        yourChargeCAD = rate1 * currencyAmount
        cadRate = yourChargeCAD.toFixed(2);

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

        rateArray = [zarRate,eurRate,yenRate,gbpRate,chfRate];

        buttonAttributes = [{"type":"submit", "class":"cadButton currencybuttons","id":"cad"},
        {"type":"submit", "class":"zarButton currencybuttons","id":"zar"},
        {"type":"submit", "class":"eurButton currencybuttons","id":"eur"},
        {"type":"submit", "class":"yenButton currencybuttons","id":"yen"},
        {"type":"submit", "class":"gbpButton currencybuttons","id":"gbp"},
        {"type":"submit", "class":"chfButton currencybuttons","id":"chf"}]

        textButtons = ["Canadian Dollars (CAD)","South African Rand (ZAR)",
        "Euro (EUR)","Japanese Yen (YEN)","British Pound (GBP)",
        "Swiss Franc (CHF)"]

        buttonArea = $(".buttonarea");

        // for loop to build buttons

        for (var i=0; i<6; i++){
            buttonBTN = $("<button>");
            buttonBTN.attr(buttonAttributes[i]);
            buttonBTN.text(textButtons[i]);
            buttonArea.append(buttonBTN);

        }
    
        //costButton = $(".costButtons"); // Div for Cost Buttons

        //div for clickable event

        buttonArea = $(".buttonarea");

        $(".currencybuttons").on("click", function(){
            var value = $(this).attr("id");
            console.log(value);
            if (value === "cad"){
                displayCurrencyMessage(cadRate+" CAD Canadian Dollars");
            }else if(value === "zar"){
                displayCurrencyMessage(zarRate+" South African Rand");
            }else if(value === "eur"){
                displayCurrencyMessage(eurRate+" Euros");
            }else if(value === "yen"){
                displayCurrencyMessage(yenRate+" YEN");
            }else if(value === "gbp"){
                displayCurrencyMessage(gbpRate+" GBP");
            }else{
                displayCurrencyMessage(chfRate+" CHF");
            }
        })

        function displayCurrencyMessage(currencyRate){
            var h1Element = $("<h1>");
            h1Element.text("Your final Order Cost is: "+ currencyRate);
            clear();
            costButton.append(h1Element);
        }

        // // canadian button click event

        // $(".cadButton").on("click", function(){
        //     var cadCost = $("<h1>");
        //     cadCost.text("Your final Order Cost is: " + cadRate +" CAD Canadian Dollars");
        //     cadCost.attr("class", "cadcost")
        //     clear();
        //     costButton.append(cadCost);
        
        // });

        // // south african rand cost click event

        // $(".zarButton").on("click", function(){
        //     var zarCost = $("<h1>");
        //     zarCost.text("Your final Order Cost is: " + zarRate +" South African Rand");
        //     zarCost.attr("class", "zarcost");
        //     clear();
        //     costButton.append(zarCost);
        
        // });

        // // Euro cost click event

        // $(".eurButton").on("click", function(){
        //     var eurCost = $("<h1>");
        //     eurCost.text("Your final Order Cost is: " + eurRate +" Euros");
        //     eurCost.attr("class", "eurcost")
        //     clear();
        //     costButton.append(eurCost);
        // });

        // // YEN cost click event

        // $(".yenButton").on("click", function(){
        //     var yenCost = $("<h1>");
        //     yenCost.text("Your final Order Cost is: " + yenRate +" YEN");
        //     yenCost.attr("class", "yencost")
        //     clear();
        //     costButton.append(yenCost);
        // });

        // // GBP Cost Click Event

        // $(".gbpButton").on("click", function(){
        //     var gbpCost = $("<h1>");
        //     gbpCost.text("Your final Order Cost is: " + gbpRate +" GBP");
        //     gbpCost.attr("class", "gbpcost")
        //     clear();
        //     costButton.append(gbpCost);
        // });

        // // CHF Swiss Franc Cost Event

        // $(".chfButton").on("click", function(){
        //     var chfCost = $("<h1>");
        //     chfCost.text("Your final Order Cost is: " + chfRate +" CHF");
        //     chfCost.attr("class", "gbpcost");
        //     clear();
        //     costButton.append(chfCost);
        // });

    });
}


// clearing button div after click

const clear = function(){
    costButton.empty();
}


