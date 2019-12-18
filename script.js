var question = "What year did John McCarthy first suggest an artificial intelligence summer conference?"
document.getElementById("question1").innerHTML = question;

var answers = ['1955','1956','1958','1959'];

var answerButtons = document.getElementsByClassName("quizButton1");

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

function changeColor(){
    document.getElementById('demo2').setAttribute('style','background-color:black;')
}

function disableAll(){
    for(var num=0; num<answerButtons.length; num++){
        answerButtons[num].setAttribute('disabled', true);
    }
}
