// 小手調べ
function setup(){
  createCanvas(200, 200);
  for(let i = 0; i < 10; i++){
    let x = (i + 1) * 10;
    noFill();
    stroke(i < 5 ? 'blue' : 'red');
    ellipse(100, 100, x);
    // BLANK[1]
  }
}
