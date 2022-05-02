const classes =[
{name:'Swordsman', mHealth:14, health:14, attack:10, defense:5, speed:6, acc:.5},
{name:'Archer', mHealth:12, health:12, attack:6, defense:3, speed:10, acc:.8},
{name:'Paladin', mHealth:17, health:17, attack:4, defense:8, speed:4, acc:.7},
{name:'Lancer', mHealth:13, health:13, attack:7, defense:4, speed:8, acc:.6}]

const enemies =[
{name:'Enemy1', health:100, attack:10, defense:2, speed:5, acc:.7},
{name:'Enemy2', health:10, attack:5, defense:2, speed:5, acc:.7},
{name:'Enemy3', health:10, attack:5, defense:2, speed:5, acc:.7},
{name:'Enemy4', health:10, attack:5, defense:2, speed:5, acc:.7},
{name:'Enemy5', health:10, attack:5, defense:2, speed:5, acc:.7}]

let playerChoice = 0

let potion = 2
// let $gameText = $('.game-text')
// let $gameChoice = $('.game-choice')

const ourAttack = (enemies) =>{
    if(playerChoice.acc>Math.random()){
        enemies.health -= (playerChoice.attack - enemies.defense)
        $('<h3>').text(`you landed a hit!. The enemy has ${enemies.health} health remaining`).appendTo($gameText)
    }else{
        $('<h3>').text('you missed').appendTo($gameText)
    }
    if(enemies.health<=0){
        $('<h3>').text('You downed the enemy').appendTo($gameText)
        $gameChoice.empty()
        $('<button>').text('proceed').appendTo($gameChoice)

    }
}
const enemyAttack = (enemies) =>{
  if(enemies.health>0){
      if(enemies.acc>Math.random()){
          playerChoice.health -= (enemies.attack - playerChoice.defense)
          $('<h3>').text(`The enemy landed a hit. You have ${playerChoice.health} health remaining`).appendTo($gameText)
      }else{
          $('<h3>').text('The enemy missed!').appendTo($gameText)
      }
      if(playerChoice.health<=0){
          $('<h3>').text('you perished at the hands of the enemy').appendTo($gameText)
          $gameChoice.empty()
          $('<button>').text('Refresh to play again').appendTo($gameChoice)
      }
  }
}



const instance1 = () => {
    $gameText.empty()
    $gameChoice.empty()
    $gameText.text('The first enemy approaches! get ready')
    $('<button>').addClass('game-buttons').text('Attack').appendTo($gameChoice)
    $('<button>').addClass('game-buttons').text('Potion').appendTo($gameChoice)
    $('<button>').addClass('game-buttons').text('stats').appendTo($gameChoice)
    $('<button>').addClass('game-buttons').text('retreat').appendTo($gameChoice)
    $('.game-buttons').eq(0).on('click' , ()=>{
        $gameText.empty()
        if(playerChoice.speed>enemies[0].speed){
            $('<h3>').text('You attack first!').appendTo($gameText)
            ourAttack(enemies[0])
            enemyAttack(enemies[0])
        }else{
            $('<h3>').text('The enemy attacks first').appendTo($gameText)
            enemyAttack(enemies[0])
            ourAttack(enemies[0])
        }
    })
    $('.game-buttons').eq(1).on('click' , ()=>{
      $gameText.empty()
      if(potion>0){
          playerChoice.health += 10
          console.log(playerChoice.health)
          if(playerChoice.health>playerChoice.mHealth){
              playerChoice.health = playerChoice.mHealth
              $('<h3>').text('You recovered to full health').appendTo($gameText)
          }else{
              $('<h3>').text('You recovered 10 health').appendTo($gameText)
          }
          potion --
          enemyAttack(enemies[0])
      }else{
          $('<h3>').text('You have no potions to use').appendTo($gameText)
      }
    })
    $('.game-buttons').eq(2).on('click' , ()=>{
      $gameText.empty()
      $('<h3>').text(playerChoice.name).appendTo($gameText)
      $('<h3>').text(`Max Health: ${playerChoice.mHealth}`).appendTo($gameText)
      $('<h3>').text(`Health: ${playerChoice.health}`).appendTo($gameText)
      $('<h3>').text(`Attack: ${playerChoice.attack}`).appendTo($gameText)
      $('<h3>').text(`Defense: ${playerChoice.defense}`).appendTo($gameText)
      $('<h3>').text(`Speed: ${playerChoice.speed}`).appendTo($gameText)
      $('<h3>').text(`Accuracy: ${playerChoice.acc}`).appendTo($gameText)
    })
    $('.game-buttons').eq(3).on('click' , ()=>{
      $gameText.empty()
      if(Math.random()>.5){
          $('<h3>').text('You managed to get away').appendTo($gameText)
          $gameChoice.empty()
          $('<button>').text('proceed').appendTo($gameChoice)
      }else {
          $('<h3>').text('You failed to get away').appendTo($gameText)
          enemyAttack(enemies[0])
      }
    })
}

$(()=>{
  $gameText = $('.game-text')
  $gameChoice = $('.game-choice')
  $('<h3>').text('Which class would you like to choose?').appendTo($gameText)
  for(let i = 0; i<classes.length;i++){
      $('<button>').addClass('game-buttons').text(classes[i].name).appendTo($gameChoice)
  }
  $('.game-buttons').eq(0).on('click', ()=>{
      $gameText.empty()
      $('<h3>').text('You have chosen the Swordsman. The Swordsman boasts the highest attack power but also the greatest chance to miss.').appendTo($gameText)
      playerChoice = classes[0]
      $gameChoice.empty()
      $('<button>').attr('id' , 'instance').text('Click to proceed').appendTo($gameChoice)
      $('#instance').on('click' , ()=>{
          instance1()


      })
  })
  $('.game-buttons').eq(1).on('click', ()=>{
      $gameText.empty()
      $('<h3>').text('You have chosen the Archer. By far the fastest and most precise of the available classes but suffers from low defense.').appendTo($gameText)
      playerChoice = classes[1]
      $gameChoice.empty()
      $('<button>').attr('id' , 'instance').text('Click to proceed').appendTo($gameChoice)
      $('#instance').on('click' , ()=>{
          instance1()


      })
  })
  $('.game-buttons').eq(2).on('click', ()=>{
      $gameText.empty()
      $('<h3>').text('You have chosen the Paladin. This class can withstand a great amount of damage but suffers from low speed and low attack.').appendTo($gameText)
      playerChoice = classes[2]
      $gameChoice.empty()
      $('<button>').attr('id' , 'instance').text('Click to proceed').appendTo($gameChoice)
      $('#instance').on('click' , ()=>{
          instance1()


      })
  })
  $('.game-buttons').eq(3).on('click', ()=>{
      $gameText.empty()
      $('<h3>').text('You have chosen the lancer. While the lancer doesnt shine in any one area, this class is the most balanced. ').appendTo($gameText)
      playerChoice = classes[3]
      $gameChoice.empty()
      $('<button>').attr('id' , 'instance').text('Click to proceed').appendTo($gameChoice)
      $('#instance').on('click' , ()=>{
          instance1()


      })
  })















})
