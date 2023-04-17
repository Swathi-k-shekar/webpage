// if we are playing we have to reload a page on clicking restart 
var playing = false;
var score;
var timeRemaing;
var correctAns;
document.getElementById("start").onclick=function(){
    if(playing == true){
localStorage.reload();//reloading
    }
    // if we are  not playing
    else{
        playing=true;
         //set score=0;
         score=00;
         //show scores
         document.getElementById("scoreValue").innerHTML=score;
//to show count downs
         show("timeCount");
//hiding gameover
hide("gameOver")
 //to reset Game display        
         document.getElementById("start").innerHTML="RESET GAME";
 //count down start
 timeRemaing = 60;
 document.getElementById("timeValue").innerHTML=timeRemaing;
        startCount();   
        // generating question and answer
     genrateQA();     

    }
}
// responses for clicking on answers
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
if(playing==true)
{
    if(this.innerHTML ==correctAns){
        score+=1
        document.getElementById("scoreValue").innerHTML=score;
        // showing correct box and hiding wrong box
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        //genrating new question
        genrateQA();
    }

    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
    }
}
}
}

//start counter
function startCount(){ act=setInterval(function() {
    document.getElementById("timeValue").innerHTML=timeRemaing;
    timeRemaing-=1;
    if(timeRemaing == 0){
        //game over
        stopCount();
        show("gameOver");
        document.getElementById("gameOver").innerHTML="<p>game over !! </p><p>Your score is "+ score +".</p>";
       hide("timeCount");
       hide("correct");
       hide("wrong");
        playing=false;

        document.getElementById("start").innerHTML="START GAME";
    }
},1000);
}

//stop counter
function stopCount(){
clearInterval(act);
}
//hiding elem
function hide(Id){
document.getElementById(Id).style.display="none";
}
//showing elem
function show(Id){
    document.getElementById(Id).style.display="block";
    }

//genrates QanaA
function genrateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctAns=x*y;
    document.getElementById("question").innerHTML=x +"X"+y;
    var correctPos=1+Math.round(3*Math.random());
    document.getElementById("box"+correctPos).innerHTML=correctAns;//filling a box with rigt answer

    //filling other boxes
    var ans=[correctAns];
    for(i=1;i<5;i++){
        if(i != correctPos){
            var wrongAnswer;    
            do{
                wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            } while(ans.indexOf(wrongAnswer) > -1)
         //wrong answer
         document.getElementById("box"+i).innerHTML=wrongAnswer; 
       ans.push(wrongAnswer); 
    }
    }
}