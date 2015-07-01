var circles = [];//弾が格納される配列

var cir;

var speed = 3;


function setup() {//init
      createCanvas(windowWidth, windowHeight);

}
function draw() {//ロードと共に呼ばれ続ける
      background(255);
      var circle = MyCircle(45);
      console.log();

      for(var i = 0;i<circles.length;i++){
    circles[i].move();
  }
}

function mouseClicked () {
      for(var i =0; i<20; i++) {
            cir = new MyCircle(i * 5 +45);
            circles.push(cir);
      }
      return false;
}

function MyCircle (anglee) {
      this.x = width/2;
      this.y = 10;
      this.angle = anglee;
      // this.vx =Math.cos(Math.PI / 180 *this.angle) * speed;
      // this.vy =Math.sin(Math.PI / 180 *this.angle) * speed;
       this.vx =Math.cos(this.angle * Math.PI / 180) * speed;
      this.vy =Math.sin(this.angle * Math.PI / 180) * speed;

      this.move = function(){
            this.x  += this.vx;
            this.y  += this.vy;
            fill(0);
            ellipse(this.x , this.y , 10,10);
      };
}

