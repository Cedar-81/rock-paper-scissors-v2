//first we create a loop for our rps game

reset()

//to make sure that the winning cards are not displayed and it style attributes are not set.
    document.querySelector('.after').setAttribute('style', 'display:none')
    //creating a scoreboard
        var c_score = 0
        var h_score = 0
    const rps = document.querySelector('.rps')
    //to reset scoreboard
  
//to add click events on each card 
let hm = rps.addEventListener('click', e => {
   
    

    if(e.target.matches('p')) {
        let clicked = e.target
        var human = clicked.textContent
        rps.dataset.previousKeyType = 'human'
    }


    let pkt = rps.dataset.previousKeyType

    if(pkt == 'human') {
        let computer = Math.ceil(Math.random(1, 9)*10)

        // Determining computers score

        if(computer <=3) {
            var comp = 'Rock'
        }
        else if(computer > 3 && computer <= 6 ) {
            var comp = 'Paper'
        }
        else if(computer > 6 && computer <=10) {
            var comp = 'Scissors'
        }
    
        // 3 rock, 6 paper, 9 scissors
    
        var winner;
        //rock rock

        if(comp == "Rock" && human == 'Rock' ) {
            winner = 'It is a tie.'
        
        }
        
        //paper paper
        if(comp == 'Paper' && human == 'Paper') {
            winner = 'its a tie'
        
        }
    
        //scissors scissors
        if(comp == 'Scissors' && human == 'Scissors') {
            winner = 'its a tie'
        
        }
    
        //rock paper
        if(comp == 'Rock' && human == 'Paper' ) {
            winner = 'Human wins.'
        
        }else if(human == 'Rock' && comp == 'Paper' ) {
            winner = 'Computer wins.'
        
        }
    
        //paper scissors
        if(comp == "Paper" && human == 'Scissors') {
            winner ='Human wins.' 
        
        } else if(human == 'Paper' && comp == "Scissors") {
            winner = 'Computer wins.'
        
        }
    
        //scissors rock
        if(comp == 'Scissors' && human == 'Rock') {
            winner = 'Human wins.'
        
        }else if(human == 'Scissors' && comp == 'Rock') {
            winner = 'Computer wins.'
        
        }

      

    }
    
    // To set the color for each picked cards

    if(pkt == 'human') {

        //to make sure that the cards originally set for human is removed when he/she has picked one.
        document.querySelector('.rps').setAttribute('style', `display: none`)

        document.querySelector('.after').setAttribute('style', 'display: flex')

        
        
        //Setting the picked card for computer

        var bc;
        let compstyle = document.querySelector('.comstyle')

        if(comp == 'Rock' ) {
            bc = `url('./assets/rock.jpg')`
        }else if(comp == 'Paper' ) {
            bc = `url('./assets/paper.jpg')`
        } else if(comp == 'Scissors' ) {
            bc = `url('./assets/scissors\ .jpg')`
        }

        compstyle.setAttribute('style', `background-image:${bc}`)
        
        compstyle.innerHTML = `${comp}`

        //Setting the picked card for human

        let hum_style = document.querySelector('.humstyle')
        let hc;

        if(human == 'Rock' ) {
            hc = `url('./assets/rock.jpg')`
        }else if(human == 'Paper' ) {
            hc = `url('./assets/paper.jpg')`
        } else if(human == 'Scissors' ) {
            hc = `url('./assets/scissors\ .jpg')`
        }

        hum_style.setAttribute('style', `background-image:${hc}`)
        
        hum_style.innerHTML = `${human}`

        document.querySelector('.winner').innerHTML = `${winner}`
        
        document.querySelector('.replay').setAttribute('style', 'display:inline-block')
        
      

    }
    
    //Incrementing the scoreboard
    while(winner == 'Human wins.'){
        h_score += 1
        break
    }
    while(winner == 'Computer wins.'){
        c_score += 1
        break
    }

    //twist
    if(h_score==10 && c_score <10){
        h_score += 5
    }
   
    
    //displaying scoreboard
    document.querySelector('.h_score').innerHTML = h_score
    document.querySelector('.c_score').innerHTML = c_score
    
        
})

function reset() {
    document.querySelector('.after').setAttribute('style', 'display:none;')
    document.querySelector('.rps').setAttribute('style', 'display:content')
    c_score = 0
    h_score = 0
    document.querySelector('.h_score').innerHTML = h_score
    document.querySelector('.c_score').innerHTML = c_score
}

function replay() {
        document.querySelector('.after').setAttribute('style', 'display:none;')
        document.querySelector('.rps').setAttribute('style', 'display:content')
    }


