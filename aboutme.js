//defining card text/////
const name = "John Komninos"
const text = "For 8 years I specialized in logistics but recently I have realized that, although I am good at logistics, my interest is no longer there. Having taken some computer classes in college, I have decided to revisit and pursue a career in tech. I believe the skills I have acquired through managing logistics for 8 years coupled with my passion for tech will make me an excellent software developer."

$(()=>{
  ////querying for each card////
  const $hobby = $('.about').children().eq(0)
  const $strengths = $('.about').children().eq(1)
  const $traits = $('.about').children().eq(2)
  const $overview = $('.about').children().eq(3)

////defining card text////
  const $list1 = $('<ul>').attr('id' , 'hobbies')
  const $hobbies1 = $('<li>').text('Handball').appendTo($list1)
  const $hobbies2 = $('<li>').text('Coding').appendTo($list1)
  const $hobbies3 = $('<li>').text('fitness').appendTo($list1)
  const $hobbies4 = $('<li>').text('nutrition').appendTo($list1)
  $('#right').children().eq(0).append($list1)
  $list1.hide()

  const $list2 = $('<ul>').attr('id' , 'hobbies')
  const $strength1 = $('<li>').text('Organized').appendTo($list2)
  const $strength2 = $('<li>').text('Driven').appendTo($list2)
  const $strength3 = $('<li>').text('Focused').appendTo($list2)
  const $strength4 = $('<li>').text('Decision maker').appendTo($list2)
  $('#right').children().eq(1).append($list2)
  $list2.hide()

  const $list3 = $('<ul>').attr('id' , 'hobbies')
  const $Trait1 = $('<li>').text('JavaScript').appendTo($list3)
  const $Trait2 = $('<li>').text('CSS').appendTo($list3)
  const $Trait3 = $('<li>').text('HTML').appendTo($list3)
  const $Trait4 = $('<li>').text('JQuery').appendTo($list3)
  $('#right').children().eq(2).append($list3)
  $list3.hide()

  const $newDiv = $('<div>').attr('id', 'overview').appendTo('#right')
  const $name = $('<h1>').text(name).appendTo($newDiv)
  const $text = $('<h3>').text(text).appendTo($newDiv)
  $newDiv.hide()
//////adding the click handlers///////
  $hobby.on("click" , ()=>{
    $hobby.hide('slow')
    $list1.show('slow')
  })

  $list1.on("click" , ()=>{
    $list1.hide('slow')
    $hobby.show('slow')
  })

  $strengths.on("click" , ()=>{
    $strengths.hide('slow')
    $list2.show('slow')
  })

  $list2.on("click" , ()=>{
    $list2.hide('slow')
    $strengths.show('slow')
  })

  $traits.on("click" , ()=>{
    $traits.hide('slow')
    $list3.show('slow')
  })

  $list3.on("click" , ()=>{
    $list3.hide('slow')
    $traits.show('slow')
  })

  $overview.on("click" , ()=>{
    $('.about').hide()
    $newDiv.show('slow')
  })

  $newDiv.on("click" , ()=>{
    $newDiv.hide()
    $('.about').show()
  })
/////setting the timer for the modal and click handler for the modal close button
  const $modal = $('#modal-background')
  const openModal = () =>{
    $modal.css('display' , 'block')
  }
  setTimeout(openModal, 1500)

  $('#close').on('click' , ()=>{
    $modal.css('display' , 'none')
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
