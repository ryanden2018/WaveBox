document.addEventListener("DOMContentLoaded", e=>{
  let wb = new WaveBox(75,0.01);
  document.querySelector("#wavebox").append(wb.render());

  document.addEventListener("mousemove",
    e=>{wb.cursorX=e.x-wb.div.offsetLeft;wb.cursorY=e.y-wb.div.offsetTop+(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);});
  
  setInterval( function() {
    for(let i=0; i<100; i++) {
      wb.stepForward();
      wb.c += 0.1;
    }
  }, 1);

  setInterval( function() {
    wb.update();
  },50);
});
