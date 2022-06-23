const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const resetBtn = document.querySelector('.reset-btn')
const timer = document.querySelector('.timer')
let seconds = 0
let minutes = 0


startBtn.addEventListener('click', function(){
  const myInterval = setInterval(stopwatch, 1000);

  function stopwatch (){
    if (seconds == 59){
      minutes += 1
      seconds = 0
    }
    else{
      seconds +=1
    }

    timer.textContent = `${String(minutes).length == 1 ? `0${minutes}` : minutes}:${String(seconds).length == 1 ? `0${seconds}` : seconds}`
  }
  
  stopBtn.addEventListener('click', function(){
    clearInterval(myInterval)
  })

  resetBtn.addEventListener('click', function(){
    clearInterval(myInterval)
    seconds = 0
    minutes = 0
    timer.textContent = "00:00"
  })
})
