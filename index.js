clock = () => {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var hour = (hr>9)? hr:"0"+ hr;
  document.getElementById("hr").innerHTML= hour>12?-24+hour+12:hour;
  document.getElementById("min").innerHTML = min>9? min:"0"+min;
  document.getElementById("sec").innerHTML = sec>9?sec:"0"+sec;
  document.getElementById("meridian").innerHTML = hour>12?"PM":"AM";

  setTimeout(clock, 1000);
}

clock();
