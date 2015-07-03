var ww = $(window).width();
var wh = $(window).height();
function setup() {
	createCanvas(ww,wh);
      }
var degree = null;
var rad = null;
var x =null;
var y =null;
      function draw() {
      	background(255);
      	fill(0);
      	x += 5;
      	degree += 5;
      	rad =degree* Math.PI / 180;
      	y = wh/2 + Math.sin(rad) *(wh/2 - 15);
      	ellipse(x, y , 30, 30);
      	if(x > width ){
      		x =0;
      	}

    }

