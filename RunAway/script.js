
score=0;
cross= true;
audio= new Audio('music.mp3');
audiogo= new Audio('gameover.wav');
setTimeout(()=>{
  audio.play();
},1000);
document.onkeydown=function(e){
  console.log("Key code is: ", e.keyCode)
  if(e.keyCode==38){
    char= document.querySelector('.char');
    char.classList.add('animateChar');
setTimeout(()=>{
  char.classList.remove('animateChar')
},700);
  }
  if(e.keyCode==39){
    char= document.querySelector('.char');
  charX= parseInt(window.getComputedStyle(char,null).getPropertyValue('left'));
  char.style.left= charX+90+"px";
}
  if(e.keyCode==37){
char= document.querySelector('.char');
charX= parseInt(window.getComputedStyle(char,null).getPropertyValue('left'));
char.style.left=(  charX-90)+"px";
}
}
setInterval(()=>{
  char = document.querySelector('.char');
  gameOver = document.querySelector('.gameOver');
obstacle = document.querySelector('.obstacle');
dx= parseInt(window.getComputedStyle(char,null).getPropertyValue('left'));
dy= parseInt(window.getComputedStyle(char,null).getPropertyValue('top'));

ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

 offsetX= Math.abs(dx-ox);
 offsetY= Math.abs(dy-oy);
 //console.log(offsetX, offsetY)

  if(offsetX< 73 && offsetY<52){
    gameOver.innerHTML= "Game Over -Press Any Key to Restart";
    obstacle.classList.remove('obstacleAni');
    audiogo.play();
    setTimeout(()=>{
      audiogo.pause();
      audio.pause();
    },1000);
  }
  else if(offsetX<240 && cross){
    score+=1;
   updateScore(score);
    cross= false;
    setTimeout(()=>{
      cross= true;
    },1000);
    setTimeout(()=>{
      aniDur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
      newDur= aniDur -0.1;
      obstacle.style.animationDuration = newDur +'s';
    },500);

  }
  else{
    score=score+1;
    updateScore(score);
  }
},100);

function updateScore(score){
  scoreCont.innerHTML ="Your Score: " + score;
}
