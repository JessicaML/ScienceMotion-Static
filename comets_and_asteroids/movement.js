function myMove() {
    var img = new Image();
  var elem = document.getElementById("animate"); 
  img.onload = function() {
  div.appendChild(img);
};
img.src = "comets_and_asteroids/images/images.png";
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.right = pos + 'px'; 
    }
  }
}
