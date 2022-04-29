$(() => {
$('.project').eq(1).hide()
$('.project').eq(2).hide()
$('.project').eq(3).hide()
$('.project').eq(4).hide()

for(let i = 0;i<5;i++){
  $('.project').eq(0).on('click' , ()=>{
    $('.project').eq(i).slideDown(1000)
  }
)}

const $modal = $('#modal-background')
const openModal = () =>{
  $modal.css('display' , 'block')
}
setTimeout(openModal, 1500)

$('#close').on('click' , ()=>{
  $modal.css('display' , 'none')
})
})
