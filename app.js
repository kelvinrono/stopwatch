var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');
var time = document.querySelector('.displaySection');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;


start.addEventListener('click', function(){

    if (stoptime == true) {
        stoptime = false;
        tick();
    }

    setTimeInterval('tick()' , 1000)
    changeName();
    
})

stop.addEventListener('click' , function(){
    if (stoptime == false) {
        stoptime = true;
      }

})




 
  function tick() {
      if (stoptime == false) {
      sec = parseInt(sec);
      min = parseInt(min);
      hr = parseInt(hr);
  
      sec = sec + 1;
  
      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
      }
  
      if (sec < 10 || sec == 0) {
        sec = '0' + sec;
      }
      if (min < 10 || min == 0) {
        min = '0' + min;
      }
      if (hr < 10 || hr == 0) {
        hr = '0' + hr;
      }
  
      time.innerHTML = hr + ':' + min + ':' + sec;
  
      setTimeout("tick()", 1000);
    }
  }
  

  reset.addEventListener('click', function(){
    
    time.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
  })
