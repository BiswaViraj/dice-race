var scores, roundScores, activePlayer, playing;

function reset() {
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    playing = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

reset();

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(playing) {
        //Generating Random Numbers.
        var dice = Math.floor((Math.random() * 6) + 1);
        //Displaying the Result.
        var diceDOM =  document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
        //Updating the Scorecards.
        if (dice !== 1) {
            roundScores += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScores;
        } else {
        
            nextPlayer();
            //document.querySelector('.dice').style.display = 'none';
        
        }
    } 

}); 

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (playing){
        scores[activePlayer] += roundScores;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
    
        nextPlayer();
    
        }
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
};

document.querySelector('.btn-new').addEventListener('click', reset);