$( document ).ready(function() {
    console.log( "ready!" );


// Handling the click events for all the different Markets to display prodcuts from the DATABASE
$('.category').on('click', function() {
    console.log('helloooo!!!', $(this).attr('name'))
// brings us to specific market handlebars page.
    window.location.href='/' + $(this).attr('name');

//     $.ajax({
//         url: '/search/' + $(this).attr('name')
//     }).then(function(results){
//         console.log('results', results)
//         $('.results').empty()
});       

//         for(var i = 0; i< results.length; i ++) {
//             console.log('we r looping!!!')
//             var div = $('<div>')
//             var title = $('<h5 class=card-title>')
//                 title.text( results[i].Product_name)
//             var addToCart = $('<button>')
//                 addToCart.addClass("addToCart")
//                 addToCart.text('Add to Cart')
//                 div.append(title, addToCart)

//             $('.results').append(div)
//         }
//     })
// });


// Handling the "ADD TO CART" click events to push specific item/product to the users cart.

// $('.addToCart').on('click', function() {
//     console.log('helloooo!!!', $(this).attr('name'))
// })


});