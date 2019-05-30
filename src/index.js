document.addEventListener("DOMContentLoaded", e=>{
  let wb = new WaveBox(100);
  document.querySelector("#wavebox").append(wb.render());

  document.querySelector("#wavebox").children[0].addEventListener("mousemove",
    e=>{wb.cursorX=e.x;wb.cursorY=e.y;wb.update();});
  
  setInterval( function() {wb.stepForward();}, 10);
});
