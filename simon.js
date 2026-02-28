let gameseq=[];
let userseq=[];
let prescores=[];
let btns=["yellow","red","purple","green"]
let started=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started:");
        started=true;
    levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200); 
}


function levelup(){
    userseq=[];    
    level++;
        h2.innerText=`level ${level}`;
        let randIndex=Math.floor(Math.random()*3);
        let randcol=btns[randIndex];
        let randbtn=document.querySelector(`.${randcol}`);
        gameseq.push(randcol);
        console.log(gameseq);
        btnflash(randbtn);
}
function checkAns(idx){
   if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup(),1100);
    }
   }
   else{
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },400);
    prescores.push(level);
    score=highscore(prescores);
    h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to start<br> High Score:${score}`;
    reset();
   }
}
function highscore(str){
    let max=str[0]
    for(i=1;i<str.length;i++){
        if(max<str[i]){
            max=str[i];
        }
    }
    return max;
}
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);    
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function bodyflash(){

}