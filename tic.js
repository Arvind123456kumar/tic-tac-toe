let movement=new Audio("movement.mp3");
let gameOver=new Audio("gameOver.mp3");
let gameStart=new Audio("startGame.mp3")
let boxes=document.querySelectorAll(".box");
let excited=document.querySelector(".imgBox");
let boxtext=document.getElementsByClassName('boxtext');

// let startGame=new Audio("startGame.mp3");
let turn="x";
let gameOvers=false;
// function for change the turn of player
const turnChange=()=>{
return turn==="x"?turn='o':turn='x';
}
// function to check winner 
const checkWinner=()=>{
    let winChance=[
        [0,1,2,0,-10,0],
        [3,4,5,1,0,0],
        [6,7,8,0,11,0],
        [0,3,6,-10,0,90],
        [2,5,8,10,0,90],
        [0,4,8,0,0,45],
        [2,4,6,0,0,-45],
        [1,4,7,0,0,90]
    ]
    winChance.forEach((e)=>{
if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='')){
    document.querySelector(".info").innerText=`${boxtext[e[0]].innerText}  Won`;
    document.querySelector('.line').style.width='30vw';    document.querySelector('.line').style.transform=`translate(${e[3]}vw ,${e[4]}vw)rotate(${e[5]}deg)`;
    gameOver.play();
    document.querySelector(".info").style.background='green';
    excited.style.display='grid';
gameOvers=true;
}
    })
}
// Game logic
Array.from(boxes).forEach((element)=>{
element.addEventListener("click",()=>{
if(element.firstElementChild.innerText===''){
    element.firstElementChild.innerText=turn;
    checkWinner();
    turnChange();
    movement.play();
    if(!gameOvers){
    document.querySelector(".info").innerText="Turn for "+ turn;
    }
}
});
});
// RESET GAME 
document.querySelector('.reset').addEventListener('click',(e)=>{
e.preventDefault();
Array.from(boxtext).forEach((element)=>{
element.innerText='';
document.querySelector(".info").innerText=`Turn for x`;
turn='x';
document.querySelector('.line').style.width='0'
gameOvers=false;
document.querySelector(".info").style.background='none';
excited.style.display='none';
gameStart.play();
})
})