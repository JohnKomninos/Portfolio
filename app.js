///building the car carousel//////
$(()=>{
let currentImgIndex = 0
const $numOfImages = $('.images').children().length-1


$('#next').on('click' , ()=>{
$('.images').children().eq(currentImgIndex).css('display' , 'none')
if(currentImgIndex<$numOfImages){
    currentImgIndex++
}else{
    currentImgIndex=0
}
$('.images').children().eq(currentImgIndex).css('display' , 'block')
})

$('#prev').on('click' , ()=>{
$('.images').children().eq(currentImgIndex).css('display' , 'none')
if(currentImgIndex>0){
    currentImgIndex--
}else{
    currentImgIndex = $numOfImages
}
$('.images').children().eq(currentImgIndex).css('display' , 'block')
})


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
