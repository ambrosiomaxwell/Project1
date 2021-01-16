let Cart ={
    'items' : [],

    'subtotal': 0,

    'total': this.subtotal * 1.07,
    
     addItem(nameOf, price, picURL){


        objItem = {
            meal: nameOf,

            selection: picURL,

            cost: price
            
        }
        this.items.push(objItem)
    },

    getSubtotal(){
        this.items.forEach(e =>{

            this.subtotal = this.subtotal + parseInt(e.cost)
            console.log(this.subtotal)

        })
    },
    clearCart(){
        this.items = []

    }

}

menu = [
    {
        itemName: 'Burger',
        itemDescript: 'i like burgers',
        itemPrice: 10,
        pictureSrc: 'https://happilyunprocessed.com/wp-content/uploads/2019/08/Stuffed-Black-Bean-Burger.jpg-150x150.jpg',
        ingredientsEdit: ['Cheese', 'lettuce', 'tomato', ' onions'],
        category: ''
    },
    {
        itemName: 'Chicken Sandwich',
        itemDescript: 'a chicken sandwich that u can eat',
        itemPrice: 9 ,
        pictureSrc: 'https://www.withspice.com/wp-content/uploads/2020/06/spicy-fried-chicken-sandwich-with-sriracha-mayonnaise-and-jalapeno-slaw-150x150.jpg',
        ingredientsEdit: ['pickles'],
        category:''
    },
    {
        itemName: 'wings',
        itemDescript: '12 saucy wings',
        itemPrice:8,
        pictureSrc: 'https://www.theoriginaldish.com/wp-content/uploads/2018/12/Chili-Chicken-Wings-2-150x150.jpg',
        ingredientsEdit: ['BBQ', 'mild','hot','flaming'],
        category:''
    },
    {
        itemName: 'Ribs',
        itemDescript: 'full rack of ribs, smoked for hours. slathered in BBQ',
        itemPrice: 15 ,
        pictureSrc: 'https://spicecravings.com/wp-content/uploads/2017/08/Baby-Back-Ribs-5-150x150.jpg',
        ingredientsEdit: ['BBQ'],
        category:''
    },
    {
        itemName: 'Chicken fingers',
        itemDescript: 'Three delightful chicken fingers to fill your tummy',
        itemPrice: 5 ,
        pictureSrc: 'https://airfryereats.com/wp-content/uploads/2020/03/Air-Fryer-Chicken-Tenders-12-150x150.jpg',
        ingredientsEdit: ['ranch','honey mustard'],
        category:''
    },
]


menu.forEach(function(e){
    //sets up row
    itemHolder = $('<div>').addClass('row rounded bg-dark row-style accordion')
    //makes picture element and attaches image url
    picture = $('<img>').attr('src', e.pictureSrc,).addClass('col-md-1 rounded pic-class')
    itemHolder.append(picture)
    //Holds item name and description
    infoHolder = $('<div>').addClass('col-md-8 info')
    //grabs name from object
    nameHolder = $('<h5>').text(e.itemName).addClass('item-name')
    console.log(e.itemName)
    //grabs item desctiption from object
    description = $('<p>').text(e.itemDescript)

    priceHolder = $('<p>').addClass('col-md-1 price-value').text(e.itemPrice)

    //adds everything for item info
    infoHolder.prepend(description)
    infoHolder.prepend(nameHolder)

    addToCart = $('<button>').addClass('btn btn-success col-md-2 add-cart-button').text('Add to Cart')
    //adds items to holders then sends he elements to the HTML
    itemHolder.append(infoHolder)  
    itemHolder.append(priceHolder)
    itemHolder.append(addToCart)  
    $('#menu-container').append(itemHolder)

});


$('.add-cart-button').click(function(){
    
    itemCost = $(this).siblings('.price-value').text()
    picture = $(this).siblings('.pic-class').attr('src')
    nameOfFood = $(this).siblings('.info').children('.item-name').text()
    Cart.addItem(nameOfFood,itemCost, picture)
    console.log(Cart.items)
    console.log(nameOfFood)


})




