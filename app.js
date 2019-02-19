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
var roundOver = false;
var p1Turn = true;
var limit = 20;

console.log(player1Score.textContent)

reset.addEventListener('click', function(){
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
    die.src = 'img/dice1.png';
    gameOver = false;
    
    p1Turn = true;
    p1Section.classList.add('active');
    p2Section.classList.remove('active');
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
})

roll.addEventListener('click', function (){
    if(!gameOver){
        var rollScore = Math.floor(Math.random()* 6) + 1;
            if(p1Turn){
                die.src = 'img/dice' + rollScore + '.png';
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
                    gameOver = true;
                };
            } else {
                    die.src = 'img/dice' + rollScore + '.png';
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
                        gameOver = true;
                        
                    };
                } 
    }
});

hold.addEventListener('click', function (){
    if(!gameOver){

            if(p1Turn){
                player1Score += player1CurrentScore;
                document.getElementById('score-0').textContent = player1Score;
                player1CurrentScore = 0;
                p1Section.classList.toggle('active');
                p2Section.classList.toggle('active');
                document.getElementById('current-score-0').textContent = 0;

                if (player1Score >= limit){
                    player1.textContent = "WINNER";
                    gameOver = true;
                }
                p1Turn = false;

            } else {
                player2Score += player2CurrentScore;
                document.getElementById('score-1').textContent = player2Score;
                player2CurrentScore = 0;
                p1Section.classList.toggle('active');
                p2Section.classList.toggle('active');
                document.getElementById('current-score-1').textContent = 0;
                if (player2Score >= limit){
                    player2.textContent = "WINNER";
                    gameOver = true;
                }
                p1Turn = true;
            }
        
    }
})
