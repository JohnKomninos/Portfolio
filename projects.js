///starting placeeholders are hidden/////
$(() => {
$('.project').eq(1).hide()
$('.project').eq(2).hide()
$('.project').eq(3).hide()
$('.project').eq(4).hide()
$('.project').eq(5).hide()

/////created a loop to reveal the cards///
for(let i = 1;i<6;i++){
  $('.project').eq(0).on('click' , ()=>{
    $('.project').eq(0).hide()
    $('.project').eq(i).slideDown(1000)
  }
)}
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
