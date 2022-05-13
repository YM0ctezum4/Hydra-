// javascript
// hydra

var hc;
var pg;

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") });

/////////////////////////

osc(60,-0.015,0.3).diff(osc(60,0.08).rotate(Math.PI/2))
	.modulateScale(noise(3.5,0.25).modulateScale(osc(15).rotate(()=>Math.sin(time/2))),0.6)
	.color(1,0.5,0.4).contrast(1.4)
	.add(src(o0).modulate(o0,.04),.6)
	.invert().brightness(0.1).contrast(1.2)
	.modulateScale(osc(2),-0.2)
  .out()

/////////////////////////

function setup() {
  createCanvas(1000,1000,WEBGL);
  console.log("hola mundo");
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
   background(0);

  noStroke();
  push();
  texture(hc);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  rotateZ(frameCount*0.001);
  box(500);
  pop();

}
