var question = "When was the idea of Artificial first suggested"
document.getElementById("question").innerHTML = question;

var answers = ['1955','1956','1958','1959'];

var answerButtons = document.getElementsByClassName("quizButton");

var correct= 0 //The first answer is at position 0, the last is at 3.

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function(){
        disableAll();
        if(this.innerHTML == answers[correct]){
            this.setAttribute('style','background-color:rgb(76,175,80);')
        }else{
            this.setAttribute('style','background-color:rgb(210,50,35);')
        }
    });
}

function disableAll(){
    for(var num=0; num<answerButtons.length; num++){
        answerButtons[num].setAttribute('disabled', true);
    }
}