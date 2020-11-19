$( document ).ready(function() {
    console.log( "ready!" );



// marketplace.handlebars on click to get to each different category
$('.category').on('click', function() {
    console.log('helloooo!!!', $(this).attr('name'))
// brings us to specific market handlebars page.
var category = $(this).attr('name');
    window.location.href= '/search/page/' + category;


    $.ajax({
        url: "/search/" +  category,
        type: "GET",
    }).then(function(results){
        
    });       
    })

});
