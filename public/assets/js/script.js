$( document ).ready(function() {
    console.log( "ready!" );



// Handling the click events for all the different Markets to display prodcuts from the DATABASE
$('.category').on('click', function() {
    console.log('helloooo!!!', $(this).attr('name'))
// brings us to specific market handlebars page.
var category = $(this).attr('name');
    window.location.href= '/' + category;


    $.ajax({
        url: "/" +  category,
        type: "GET",
    }).then(function(results){
        
    });       
    })

});
