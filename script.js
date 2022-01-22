function myClock() {
  setTimeout(function () {
    const time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
    myClock();
  }, 1000);
}
myClock();
