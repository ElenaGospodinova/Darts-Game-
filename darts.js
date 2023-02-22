// create a div element that appears when the wrapper is clicked
      // define that it appears where the mouse is clicked
      // add animation of throwing dart
      // style the dartboard
      // define a score system or modulate accuracy

      const wrapper = document.querySelector(".wrapper");

      let clickTime;

      const myAsyncFunction = async () => {};

      wrapper.addEventListener("mousedown", (click) => {
        const timeStart = Date.now();
      });

      wrapper.addEventListener("click", function (click) {
        const timeEnd = Date.now();
        const Y = click.offsetY;
        const X = click.offsetX;
        const dart = document.createElement("div");
        dart.classList.add("dart");
        dart.style.left = X + "px";
        dart.style.top = Y + "px";
        console.log(dart);
        wrapper.appendChild(dart);
      });
// to hit the red - center for less then 5 seconds 
const myTimeout = setTimeout(userResult, 5000);

function userResult() {
  document.getElementById("result").innerHTML = "Game Over!"
   
}

function userWinGame (){
  document.getElementById("win").innerHTML = "You Win!"
}
function hitStop() {
  clearTimeout(myTimeout);
  const userWin = setTimeout(userWinGame, 3900);
  if (myTimeout < userWin){
    userWinGame();
    
  }
}

