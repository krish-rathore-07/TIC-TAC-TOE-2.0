let turnO = true;
let scoreO = 0;
let scoreX = 0;
let rstbtn = document.getElementById('resetgame')
let plyagn = document.getElementById('playagain')
let choices = document.querySelectorAll(".button");
let d = document.getElementById('resultid');
let audio = document.getElementById("myaudio");
const idcont = document.getElementById("containerid");
const changered = () => {
  idcont.classList.remove("bg-[#0c8e81]");
  idcont.classList.add("bg-[#D92E2E]");
}
const changegreen = () => {
  idcont.classList.remove("bg-[#D92E2E]");
  idcont.classList.add("bg-[#0c8e81]");
}
choices.forEach((button)=>{
 button.addEventListener("click",()=>{
   audio.play();
    if(turnO){
      button.innerHTML = "O";
      turnO= false;
      button.disabled = true;
      changered();
    }
    else{
      button.innerHTML = "X";
      turnO= true;
      button.disabled = true;
      changegreen();
    }
    checkwinner();
  })
})
const winpattern = [
                  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]
                          ]
const disablebuttons = () => {
  choices.forEach((button)=>{
    button.disabled = true;
  })
}
const enablebuttons = () => {
  choices.forEach((button)=>{
    button.disabled = false;
  })
}
const cutlineremove = () => {
  let lines = document.querySelectorAll(".line");
  lines.forEach((line)=>{
    line.style.display="none";
  })
}
const resetgamefunc = () => {
  choices.forEach((button)=>{
    button.innerText = "";
    button.disabled = false;
    cutlineremove();

  })
}
const playagainfunc = () =>{
  choices.forEach((button)=>{
    button.innerText = "";
    button.disabled = false;
    plyagn.style.display = "none";
    rstbtn.style.display = "block";
    d.innerText = "";
    cutlineremove();
  })
}
const arrequal = (arr1,arr2) =>{
    if(arr1.length != arr2.length){
      return false;
    }
    else {
      for(let i = 0; i<arr1.length ; i++){
        if(arr1[i]!=arr2[i]){
          return false;
        }
      }
      return true;
    }
}
const checkwinner = () => {
    for(let pattern of winpattern){
    //  let samplearr = [pattern[0],pattern[1],pattern[2]];
      let posOne = choices[pattern[0]].innerText;
      let posTwo = choices[pattern[1]].innerText;
      let posThree =choices[pattern[2]].innerText;
    
      if(posOne!="" && posTwo!="" && posThree!=""){
        if(posOne === posTwo && posTwo === posThree){
          // if(arrequal(samplearr,winpattern[0])){
          //   console.log("wah kya baat h sirr 012")
          //   document.getElementById("012").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[1])){
          //   console.log("wah kya baat h sirr 345")
          //   document.getElementById("345").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[2])){
          //   console.log("wah kya baat h sirr 678")
          //   document.getElementById("678").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[3])){
          //   console.log("wah kya baat h sirr 036")
          //   document.getElementById("036").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[4])){
          //   console.log("wah kya baat h sirr 147")
          //   document.getElementById("147").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[5])){
          //   console.log("wah kya baat h sirr 258")
          //   document.getElementById("258").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[6])){
          //   console.log("wah kya baat h sirr 048")
          //   document.getElementById("048").style.display = "block";
          // }
          // if(arrequal(samplearr,winpattern[7])){
          //   console.log("wah kya baat h sirr 246")
          //   document.getElementById("246").style.display = "block";
          // }
          console.log("winner")
          if(posOne ==="O"){
            scoreO++;
          }
          if(posOne==="X"){
            scoreX++;
          }
          document.getElementById("playerO").innerText = scoreO;
          document.getElementById("playerX").innerText = scoreX;
          rstbtn.style.display = "none";
          plyagn.style.display = "block";
          d.style.display = 'block';
          d.innerText = `Player ${posOne} win This Game.`;
          disablebuttons();
        }
      }
    }
}