document.addEventListener("DOMContentLoaded", e=>{
  let wb = new WaveBox(100,0.01);
  document.querySelector("#wavebox").append(wb.render());

  document.querySelector("#wavebox").children[0].addEventListener("mousemove",
    e=>{wb.cursorX=e.x;wb.cursorY=e.y;});
  
  setInterval( function() {
    for(let i=0; i<100; i++) {
      wb.stepForward();
      wb.t += 0.1;
    }
  }, 1);

  setInterval( function() {
    wb.update();
  },50);
});
