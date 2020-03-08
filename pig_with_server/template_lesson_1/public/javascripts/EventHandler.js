/**
 * Comment header block
 */
let total = 0;
export default class EventHandler {  //everything goes in here
  #roll1;
  #roll2;
  #turnTotal;
  #p1Total = 0;
  #p2Total = 0;
  #turnCounter = 1;
  constructor() {
    this.winTheGame();
    this.handleRollPress();
    this.handlePassTurnPress();
  }

  handleRollPress() {
    document.getElementById('roll').addEventListener('click', (event) => {


      if (this.#turnCounter === 1) {
        //sets up Roll 1

        this.#roll1 = Math.floor(Math.random() * 6 + 1);
        if (this.#roll1 === 1) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/1.png">`;
        } else if (this.#roll1 === 2) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/2.png">`;
        } else if (this.#roll1 === 3) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/3.png">`;
        } else if (this.#roll1 === 4) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/4.png">`;
        } else if (this.#roll1 === 5) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/5.png">`;
        } else {
          document.getElementById('dieOne').innerHTML = `<img src="../images/6.png">`;
        }
        console.log(`Roll #1 is: ${this.#roll1}`);

        //Sets up Roll 2

        this.#roll2 = Math.floor(Math.random() * 6 + 1);
        if (this.#roll2 === 1) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/1.png">`;
        } else if (this.#roll2 === 2) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/2.png">`;
        } else if (this.#roll2 === 3) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/3.png">`;
        } else if (this.#roll2 === 4) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/4.png">`;
        } else if (this.#roll2 === 5) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/5.png">`;
        } else {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/6.png">`;
        }
        console.log(`Roll #2 is: ${this.#roll2}`);

        //sets up total roll

        this.#turnTotal = this.#roll1 + this.#roll2 * 1;
        console.log(`this turn's total is ${this.#turnTotal}`);

        //if logic for 1s and snake eyes
        if (this.#roll1 + this.#roll2 * 1 === 2) {
          this.#p1Total = 0;
          document.getElementById('p1total').innerHTML = `${this.#p1Total}`;
          console.log(`p1 total = ${this.#p1Total}`);
          this.#turnCounter = this.#turnCounter + 1;
          this.winTheGame();
        } else if (this.#roll1 * 1 === 1) {
          this.#turnTotal = 0;
          this.#p1Total = this.#turnTotal + this.#p1Total;
          document.getElementById('p1total').innerHTML = `${this.#p1Total}`;
          console.log(`p1 total = ${this.#p1Total}`);
          this.#turnCounter = this.#turnCounter + 1;
          this.winTheGame();
        } else if (this.#roll2 * 1 === 1) {
          this.#turnTotal = 0;
          this.#p1Total = this.#turnTotal + this.#p1Total;
          document.getElementById('p1total').innerHTML = `${this.#p1Total}`;
          console.log(`p1 total = ${this.#p1Total}`);
          this.#turnCounter = this.#turnCounter + 1;
          this.winTheGame();
        } else {
          this.#p1Total = this.#turnTotal + this.#p1Total;
          document.getElementById('p1total').innerHTML = `${this.#p1Total}`;
          console.log(`p1 total = ${this.#p1Total}`)
          this.winTheGame();
        }
      }



      //2nd Player (copy pasted- this isn't the best way to do this, but it's midnight and I don't really care...)



      else {
        this.#roll1 = Math.floor(Math.random() * 6 + 1);
        if (this.#roll1 === 1) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/1.png">`;
        } else if (this.#roll1 === 2) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/2.png">`;
        } else if (this.#roll1 === 3) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/3.png">`;
        } else if (this.#roll1 === 4) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/4.png">`;
        } else if (this.#roll1 === 5) {
          document.getElementById('dieOne').innerHTML = `<img src="../images/5.png">`;
        } else {
          document.getElementById('dieOne').innerHTML = `<img src="../images/6.png">`;
        }
        console.log(`Roll #1 is: ${this.#roll1}`);

        //Sets up Roll 2

        this.#roll2 = Math.floor(Math.random() * 6 + 1);
        if (this.#roll2 === 1) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/1.png">`;
        } else if (this.#roll2 === 2) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/2.png">`;
        } else if (this.#roll2 === 3) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/3.png">`;
        } else if (this.#roll2 === 4) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/4.png">`;
        } else if (this.#roll2 === 5) {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/5.png">`;
        } else {
          document.getElementById('dieTwo').innerHTML = `<img src="../images/6.png">`;
        }
        console.log(`Roll #2 is: ${this.#roll2}`);

        //sets up total roll

        this.#turnTotal = this.#roll1 + this.#roll2 * 1;
        console.log(`this turn's total is ${this.#turnTotal}`);

        //if logic for 1s and snake eyes
        if (this.#roll1 + this.#roll2 * 1 === 2) {
          this.#p2Total = 0;
          document.getElementById('p2total').innerHTML = `${this.#p2Total}`;
          console.log(`p2 total = ${this.#p2Total}`);
          this.#turnCounter = this.#turnCounter - 1;
          this.winTheGame();
        } else if (this.#roll1 * 1 === 1) {
          this.#turnTotal = 0;
          this.#p2Total = this.#turnTotal + this.#p2Total;
          document.getElementById('p2total').innerHTML = `${this.#p2Total}`;
          console.log(`p2 total = ${this.#p2Total}`);
          this.#turnCounter = this.#turnCounter - 1;
          this.winTheGame();
        } else if (this.#roll2 * 1 === 1) {
          this.#turnTotal = 0;
          this.#p2Total = this.#turnTotal + this.#p2Total;
          document.getElementById('p2total').innerHTML = `${this.#p2Total}`;
          console.log(`p2 total = ${this.#p2Total}`);
          this.#turnCounter = this.#turnCounter - 1;
          this.winTheGame();
        } else {
          this.#p2Total = this.#turnTotal + this.#p2Total;
          document.getElementById('p2total').innerHTML = `${this.#p2Total}`;
          console.log(`p2 total = ${this.#p2Total}`);
          this.winTheGame();
        }
      }
    })
  }

  handlePassTurnPress() {
    document.getElementById('roll').addEventListener('click', (event) => {
      if (this.#turnCounter === 1) {
        this.#turnCounter = this.#turnCounter + 1;
      }
      else {
        this.#turnCounter = this.#turnCounter - 1;
      }
    })
  }

  winTheGame() {
    if (this.#p1Total > 99) {
      document.getElementById('winScreen').innerHTML = `P1 WINS!!!`;
    }
    else if (this.#p2Total > 99){
      document.getElementById('winScreen').innerHTML = `P2 WINS!!!`;
    }
    else {
      document.getElementById('winScreen').innerHTML = `Tristan's Game of PIG`;
    }
  }
}



