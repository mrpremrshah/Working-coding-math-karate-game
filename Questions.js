class AnswerBox {
    constructor() {
        this.factor1 = Math.round(random(0,10))
        this.factor2 = Math.round(random(0,10))
        this.result = this.factor1 + this.factor2

        this.answerBox = createInput("").attribute("placeholder", this.factor1+"+"+this.factor2+"=")
        this.answerBox.attribute("style", "font-size: 50px");
        this.answerBox.position(300, height / 2 - 80)
        this.answerBox.style("background","white")
        this.answerBox.style("width", "300px");
        this.answerBox.style("height", "40px")


        this.submitButton = createButton('Submit');
        this.submitButton.position(this.answerBox.x,this.answerBox.y+50);
        this.submitButton.style('background', 'lightgrey');  
               

    }

    handleMousePressed() {
        this.submitButton.mousePressed(() => {
                if(this.result == this.answerBox.value()) {
                    var checkMarkobj = createSprite(100,100)
                    checkMarkobj.addImage("sketch", checkMark)
                    checkMarkobj.scale = 0.2
                    score += 1;
                    
                }
                
                else{
                    var crossObj = createSprite(100, 100)
                    crossObj.addImage("sketch", cross)
                    crossObj.scale = 0.2
                    score = 0;
                }
    
              });

    }



    display() {

        this.handleMousePressed();


       
    }

            
}


