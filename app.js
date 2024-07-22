const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userscore=document.querySelector("#urscore");
const compscore=document.querySelector("#compscore");
const winner=document.querySelector(".winner");
const win=document.querySelector("#win");
const ng=document.querySelector("#ng");
let a=0;
let b=0;
let endgame=false
let userwin=true;
const newgame=()=>{
    a=0;
    b=0;
    userscore.innerText=a;
    compscore.innerText=b;
    msg.innerText="Pick your choice";
    msg.style.backgroundColor = "";
    endgame=false;
    winner.classList.add("hide");
    ch();
}
const Winner=(a,b)=>{
    if(a===3){
        win.innerText="Congratulations !! You Won";
        winner.classList.remove("hide");
        confetti();
    }
    else{
        win.innerText="Computer Won, Better luck next time";
        winner.classList.remove("hide");
    }
    return;
}
const drawgame=()=>{
    msg.innerText="It's a draw";
    msg.style.backgroundColor = "#081b31";
    return;
}
const showwinner=(userwin,userchoice,compchoice)=>{
    console.log(`Userwin: ${userwin}, User Choice: ${userchoice}, Comp Choice: ${compchoice}`);
    if(!endgame){
        if(userwin){
            a++;
            userscore.innerText=a;
            msg.innerText=`You Won! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            b++;
            compscore.innerText=b;
            msg.innerText=`You Lost! Comp's ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "red";
        }
    }
    if(a==3 || b==3){
        endgame=true;
        Winner(a,b);
    }
    return;
}
const calwinner=(userchoice,compchoice)=>{
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        if(userchoice==="rock"){
            userwin=(compchoice==="paper")?false:true;
        }
        else if(userchoice==="paper"){
            userwin=(compchoice==="rock")?false:true;
        }
        else{
            userwin=(compchoice==="paper")?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    return;
}
const playgame=(userchoice)=>{
    const arr=["rock","paper","scissors"]
    const compchoice=arr[Math.floor(Math.random()*3)];
    calwinner(userchoice,compchoice);
    return;
}
const ch=()=>{
    choices.forEach(choice => {
        choice.addEventListener("click",()=>{
            if (endgame) return;
            const userchoice=choice.getAttribute("id");
            playgame(userchoice);
        }) 
    });
}
ng.addEventListener("click",newgame);
ch();
