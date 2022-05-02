$(()=>{
$('.close-hamburger').hide()

$('.hamburger').on('click' , ()=>{
    $('#nav-header').slideDown(500)
    $('.hamburger').hide()
    $('.close-hamburger').show()
})

$('.close-hamburger').on('click' , ()=>{
    $('#nav-header').slideUp(500)
    $('.close-hamburger').hide()
    $('.hamburger').show()
})
})
