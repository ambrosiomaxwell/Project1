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
        pictureSrc: 'https://www.withspice.com/wp-content/uploads/2020/06/spicy-fried-chicken-sandwich-with-sriracha-mayonnaise-and-jalapeno-slaw-150x150.jpg',
        ingredientsEdit: ['BBQ', 'mild','hot','flaming'],
        category:''
    },
    {
        itemName: 'Ribs',
        itemDescript: 'full rack of ribs, smoked for hours. slathered in BBQ',
        itemPrice: 15 ,
        pictureSrc: 'https://www.withspice.com/wp-content/uploads/2020/06/spicy-fried-chicken-sandwich-with-sriracha-mayonnaise-and-jalapeno-slaw-150x150.jpg',
        ingredientsEdit: ['pickles'],
        category:''
    },
    {
        itemName: 'Chicken fingers',
        itemDescript: 'Three delightful chicken fingers to fill your tummy',
        itemPrice: 5 ,
        pictureSrc: 'https://www.withspice.com/wp-content/uploads/2020/06/spicy-fried-chicken-sandwich-with-sriracha-mayonnaise-and-jalapeno-slaw-150x150.jpg',
        ingredientsEdit: ['pickles'],
        category:''
    },
]


menu.forEach(function(e){
    //sets up row
    itemHolder = $('<div>').addClass('row rounded bg-dark row-style')
    //makes picture element and attaches image url
    picture = $('<img>').attr('src', e.pictureSrc,).addClass('col-md-1')
    itemHolder.append(picture)
    //Holds item name and description
    infoHolder = $('<div>').addClass('col-md-9')
    //grabs name from object
    nameHolder = $('<h3>').text(e.itemName)
    console.log(e.itemName)
    //grabs item desctiption from object
    description = $('<p>').text(e.itemDescript)
    infoHolder.prepend(description)
    infoHolder.prepend(nameHolder)

    addToCart = $('<button>').addClass('btn btn-success col-md-2').text('Add to Cart')
    

    


    itemHolder.append(infoHolder)  
    itemHolder.append(addToCart)  
    $('#menu-container').append(itemHolder)
    

});