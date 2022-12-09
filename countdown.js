let seconds = 60 * 1000; //javascript counts seconds in miliseconds
let timer;
let btn = document.getElementById('start');

function startTime() {
  
  //initiates the timer
  if(seconds = 60000) {
    timer = setInterval(startTime, 1000);
  }
  
  //makes the timer go down by 1 second at a time (1000 miliseconds)
  seconds -= 1000;
  //displays the counting down timer
  document.getElementById('timer').innerHTML = `0:${seconds}`;
  
  //stops the timer at 0 and alerts 'nice'
  if(seconds <= 999){
    clearInterval(timer);
    alert('nice');
  }
  
}

//calling the function when the start button is clicked
btn.addEventListener('click', function() {
  startTime();
});
