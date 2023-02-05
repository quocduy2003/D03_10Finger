
let arr=["title","look","weight","back","ear","finger","cheerful","lazy","nice","shy","friendly","disappointed","photographer","video","application","click","call","message","hi","hello","name"]

let word=document.getElementById("content-random")

let input=document.getElementById("input-world")

let score=document.getElementById("score")

let seconds=document.getElementById("seconds")

const button=document.getElementById("button")

let point=0;

let time=0;



function random(){
    let wordRandom=Math.floor(Math.random()*arr.length);
    return wordRandom
}


function checkWord(){
    if(input.value==word.innerHTML){
        word.innerHTML=arr[random()]
        point++;
        score.innerHTML=point;
        input.value=""
    }
    else{
        word.innerHTML=arr[random()]
        input.value=""
    }
}
input.addEventListener("keyup",({key}) => {
    if(key==="Enter"){
        checkWord()
    }
})


function displayTime(btnTime){
    time=btnTime;
    score.innerHTML="0";
    display();
}
function display(){
    time--;
    console.log(time)
    seconds.innerHTML=time;
    if(time>0){
        setTimeout(display,1500);
    }
    if(time == 59){
        word.innerHTML=arr[random()]
    }
    return time;
}
