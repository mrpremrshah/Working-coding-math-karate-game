class Form {
    constructor() {
      this.playButton = createButton("Play");
    }
  
    setElementsPosition() {
      this.playButton.position(width / 2 - 110, height / 2 - 80);
    }
  
    setElementsStyle() {
      this.playButton.class("customButton");
    }
  
    hide() {
      this.playButton.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.playButton.hide();
        gameState = 1      
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  