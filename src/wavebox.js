class WaveBox {
  constructor(width) {
    this.width = width;
    this.image = [];
    this.cursorX = Math.round(width/2);
    this.cursorY = Math.round(width/2);
    this.div = document.createElement("div");
    for(let i=0; i<this.width; i++) {
      for(let j=0; j<this.width; j++) {
        this.image.push(0.0);
      }
    }
  }

  pxSz() { return 6; }

  idx(i,j) { // 0 <= i,j < this.width
    return this.width*i+j;
  }

  pxDivStyle(i,j,color) {
    return `position:absolute;background:${color};top:${this.pxSz()*i}px;left:${this.pxSz()*j}px;width:${this.pxSz()}px;height:${this.pxSz()}px;`;
  }

  color(val) {
    let normVal = Math.max(0,Math.min(255,Math.round(val*255)));
    return `rgb(${normVal},${normVal},${normVal})`;
  }

  // only call render() once per instance, see update()
  render() {
    for(let i=0; i<this.width; i++) {
      for(let j=0; j<this.width; j++) {
        let pxDiv = document.createElement("div");
        pxDiv.style = this.pxDivStyle(i,j,"gray");
        this.div.append(pxDiv);
      }
    }
    return this.div;
  }

  // call update() as many times as desired after render() has been called
  update() {
    for(let i=0; i<this.width; i++) {
      for(let j=0; j<this.width; j++) {
        let idx = this.idx(i,j);
        ///////////
        this.image[idx] = ((this.pxSz()*i-this.cursorY)**2/100**2+(this.pxSz()*j-this.cursorX)**2/100**2);//////////
        ///////////
        this.div.children[idx].style.background = this.color(this.image[idx]);
      }
    }
  }

  // step forward the physical model
  stepForward() {
  }
}
