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
        itemPrice:'',
        pictureSrc: 'https://www.withspice.com/wp-content/uploads/2020/06/spicy-fried-chicken-sandwich-with-sriracha-mayonnaise-and-jalapeno-slaw-150x150.jpg',
        ingredientsEdit: ['pickles'],
        category:''
    },
]


menu.forEach(function(e){

    itemHolder = $('<div>').addClass('row rounded bg-dark')
    picture = $('<img>').attr('src', e.pictureSrc,).addClass('col md-1')
    itemHolder.append(picture)

    infoHolder=$('div').addClass('col md-5')
    name = $('<h3>').val(e.itemName)
    description = $('<p>').text(e.itemDescript)
    infoHolder.append(name)
    infoHolder.append(description)


    itemHolder.append(infoHolder)    
    $('#menu-container').append(itemHolder)


});