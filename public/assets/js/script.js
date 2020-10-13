$( document ).ready(function() {
    console.log( "ready!" );



// Handling the click events for all the different Markets to display prodcuts from the DATABASE
$('.category').on('click', function() {
    console.log('helloooo!!!', $(this).attr('name'))
// brings us to specific market handlebars page.
var category = $(this).attr('name');
    window.location.href= '/' + category;


    $.ajax({
        url: "/" +  category + "/" +  category,
        type: "GET",
    }).then(function(results){
        console.log("heyy this is working")
        
        // for(var i = 0; i < results.length; i ++) {
        //     console.log('we r looping!!!')
        //     var div = $('<div>')
        //     var title = $('<h5>')
        //     title.text(results[i].Product_name)
        //     var price = $('<h6>')
        //     price.text(results[i].Price)
        //     var addToCart = $('<button>')
        //     addToCart.text('Add to Cart')
        //     var card = [title, price, addToCart];
        //     div.append(card)
            
        //     $('.results').append(div)
        // }
    });       
    })
});


// Handling the "ADD TO CART" click events to push specific item/product to the users cart.

// $('.addToCart').on('click', function() {
//     console.log('helloooo!!!', $(this).attr('name'))
// })
<<<<<<< HEAD


});
=======
// });
>>>>>>> bad2fddb6111cb6fad0a06f78e353f1148e6fe22
