let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let container=document.querySelector(".container");
let turnX = true;
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6], 
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
     if(turnX){
        box.innerText="X";
        turnX=false;
        box.disabled= true;
     } else{
        box.innerText="O";
        turnX=true;
        box.disabled= true;
     }
     checkWinner();
       
    });
});
const newGame=()=>{
    turnX=true;
    enablebtns();
    msgContainer.classList.add("hide");
    container.classList.remove("hide");

}

const disablebtns= ()=>{
   for(let box of boxes){
    box.disabled = true;
   }
}
const enablebtns= ()=>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText="";
    }
 }
const showWinner =(winner) =>{
    msg.innerText=`Congratulations winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disablebtns();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                showWinner(pos1);
                container.classList.add("hide");

            }
        }
    }
}

newGamebtn.addEventListener("click" ,newGame);    
resetBtn.addEventListener("click" ,newGame);