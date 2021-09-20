// creating rain

window.addEventListener("load", function() {
  var el = document.createElement("div"); // create rain variable
  document.getElementById("load").appendChild(el);
  var frames, duplicate, x, y; // create some variables
  duplicate = document.getElementById("load").innerHTML;
  document.getElementById("load").innerHTML = duplicate.repeat(100);
  frames = document.getElementById("load").children;
  setInterval(function() {
      x = document.documentElement.clientWidth - 1, y = document.documentElement.clientHeight - 100; // x and y position for the rain drop
      for (var i = 0; i < frames.length; i++) {
          frames[i].setAttribute("style", "position:absolute; height:100px; width:1px;left:" + Math.random() * x + "px;top:" +
              Math.random() * +y + "px;opacity:" + Math.random() * 1);
      }
  }, 1);
});