// ギリシャ国旗
// function setup() {
//   const blue = color(0, 51, 160);
//   createCanvas(270, 180);
//   // noStroke();
//   background(255);
//
//   let d = height / 9; // 縞1本の太さ
//
//   for(let i = 0; i < 9; i++){
//     // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
//     rect(0, i * d, width, (i + 1) * d);
//   }
//
//   fill(blue);
//   let size = d * 5;
//   rect(0, 0, size, size);
//
//   fill(255);
//   // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
// }
function setup() {
  const blue = color(0, 36, 125);
  const red = color(207, 20, 43);
  const white = color(255);
  createCanvas(300, 150);
  noStroke();
  background(255);

  fill(blue);
  rect(0, 0, 300, 150);

  stroke(white);
  strokeWeight(30);
  line(0, 0, 300, 150);
  line(300, 0, 0, 150);
  stroke(red);
  strokeWeight(10);
  line(0, 5, 150, 80);
  line(178, 55, 296, -4);
  line(175, 81, 300, 145);
  line(2, 154, 128, 91);



  noStroke();
  fill(white);
  rect(125, 0, 50, 150);
  rect(0, 50, 300, 50);
  fill(red);
  rect(135, 0, 30, 150);
  fill(red);
  rect(0, 60, 300, 30);

}
