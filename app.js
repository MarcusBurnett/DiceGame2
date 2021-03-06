var p1Section = document.getElementById('p1Section')
var p2Section = document.getElementById('p2Section');
var player1 = document.getElementById('player-0');
var player2 = document.getElementById('player-1');
var player1Score = Number(document.getElementById('score-0'));
var player2Score = Number(document.getElementById('score-1'));
var player1CurrentScore = 0;
var player2CurrentScore = 0;
var reset = document.getElementById('reset');
var roll = document.getElementById('roll');
var hold = document.getElementById('hold');
var die = document.getElementById('img');
var gameOver = false;
var p1Turn = true;
var limit = 20;


reset.addEventListener('click', resetGame);

roll.addEventListener('click', rollDie);

hold.addEventListener('click', holdDie);

function resetGame(){
    player1.textContent = 'Player 1';
    player2.textContent = 'Player 2';
    player1Score = 0;
    player2Score = 0;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    document.getElementById('current-score-0').textContent = 0;
    document.getElementById('current-score-1').textContent = 0;
    hold.classList.remove("hidden");
    roll.classList.remove("hidden");
    die.style.backgroundImage = "url('img/dice1.png')";
    p1Section.style.opacity = '1';
    p2Section.style.opacity = '1';
    gameOver = false;
    p1Turn = true;
    p1Section.classList.add('active');
    p2Section.classList.remove('active');
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
}

function rollDie(){
    if(!gameOver){
        var rollScore = randomNum();
            if(p1Turn){
                p1Roll(rollScore);
            } else {
                p2Roll(rollScore);
            } 
    }
}

function randomNum(){
    return Math.floor(Math.random()* 6) + 1;
}

function holdDie(){
    if(!gameOver){

        if(p1Turn){
            p1Hold();

        } else {
            p2Hold();
        }
    }
}


function p1Hold(){
    player1Score += player1CurrentScore;
    document.getElementById('score-0').textContent = player1Score;
    player1CurrentScore = 0;
    p1Section.classList.toggle('active');
    p2Section.classList.toggle('active');
    document.getElementById('current-score-0').textContent = 0;

    if (player1Score >= limit){
        player1.textContent = "WINNER";
        p2Section.classList.remove('active');
        p1Section.classList.add('active');
        p2Section.style.opacity = '0.5';
        roll.classList.add('hidden');
        hold.classList.add('hidden');
        gameOver = true;
    } 
    p1Turn = false;
}

function p2Hold(){
    player2Score += player2CurrentScore;
    document.getElementById('score-1').textContent = player2Score;
    player2CurrentScore = 0;
    p1Section.classList.toggle('active');
    p2Section.classList.toggle('active');
    document.getElementById('current-score-1').textContent = 0;
    if (player2Score >= limit){
        player2.textContent = "WINNER";
        p2Section.classList.add('active');
        p1Section.classList.remove('active');
        p1Section.style.opacity = '0.5';
        roll.classList.add('hidden');
        hold.classList.add('hidden');
        gameOver = true;
    }
    p1Turn = true;
}

function p1Roll(rollScore){
    die.style.backgroundImage = "url('img/dice" + rollScore + ".png')";
    player1CurrentScore += rollScore;
    document.getElementById('current-score-0').textContent = player1CurrentScore;

    if(rollScore === 1){
        player1CurrentScore = 0;
        p1Turn = false;
        p1Section.classList.toggle('active');
        p2Section.classList.toggle('active');
        document.getElementById('current-score-0').textContent = 0;
    };
    
    if (player1CurrentScore >= limit){
        player1.textContent = "WINNER";
        document.getElementById('score-0').textContent = player1CurrentScore + player2Score;
        p1Section.classList.add('active');
        p2Section.classList.remove('active');
        p2Section.style.opacity = '0.5';
        roll.classList.add('hidden');
        hold.classList.add('hidden');
        gameOver = true;
    };
}

function p2Roll(rollScore){
    die.style.backgroundImage = "url('img/dice" + rollScore + ".png')";
                    player2CurrentScore += rollScore;
                    document.getElementById('current-score-1').textContent = player2CurrentScore;

                    if(rollScore === 1){
                        player2CurrentScore = 0;
                        p1Section.classList.toggle('active');
                        p2Section.classList.toggle('active');
                        document.getElementById('current-score-1').textContent = 0;
                        
                        p1Turn = true;
                        
                    };
                    
                    if (player2CurrentScore >= limit){
                        player2.textContent = "WINNER";
                        document.getElementById('score-1').textContent = player2CurrentScore + player2Score;
                        p2Section.classList.add('active');
                        p1Section.classList.remove('active');
                        p1Section.style.opacity = '0.5';
                        roll.classList.add('hidden');
                        hold.classList.add('hidden');
                        gameOver = true;    
                    };
}


window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


