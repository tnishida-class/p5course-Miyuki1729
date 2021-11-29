// 最終課題を制作しよう
let count, cycle;
count = 0;
cycle = 100;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0);
  fill(210);
  circle(width/2, height/2, 400);

// 色や周りの線の指示が個別にない場合に備えて…
  noStroke();
  fill(210);

// 図形たち
  for(let i = 0; i < 4; i++){
    hexagon(width/2 - 165 + 110 * i, height/2 - 95);
    hexagon(width/2 - 165 + 110 * i, height/2 + 95);
    hexagon(width/2 - 110 + 110 * i, height/2 - 190);
    hexagon(width/2 - 110 + 110 * i, height/2 + 190);

    rhombusOne(width/2 - 130 + 110 * i, height/2 - 75);
    rhombusOne(width/2 - 130 + 110 * i, height/2 + 115);
    rhombusOne(width/2 - 185 + 110 * i, height/2 + 20);
    rhombusOne(width/2 - 185 + 110 * i, height/2 - 170);

    rhombusTwo(width/2 - 145 + 110 * i, height/2 - 170);
    rhombusTwo(width/2 - 145 + 110 * i, height/2 + 20);
    rhombusTwo(width/2 - 200 + 110 * i, height/2 - 75);
    rhombusTwo(width/2 - 200 + 110 * i, height/2 + 115);

    fill(24, 120, 35, 75);
    rect(width/2 - 185 + 110 * i, height/2 - 20, 40);

    fill(120, 118, 24, 75);
    rect(width/2 - 185 + 110 * i, height/2 - 210, 40);

    fill(120, 24, 24, 75);
    rect(width/2 - 185 + 110 * i, height/2 + 170, 40);

    fill(24, 46, 120, 75);
    rect(width/2 - 130 + 110 * i, height/2 - 115, 40);

    fill(120, 24, 86, 75);
    rect(width/2 - 130 + 110 * i, height/2 + 75, 40);
  }

  for(let i = 0; i < 5; i++){
    hexagon(width/2 - 220 + 110 * i, height/2);
  }


// 図形が円からはみ出した分などを、きれいになるように周りの黒を再度塗りつぶし
  strokeWeight(165);
  stroke(0);
  noFill();
  arc(width/2, height/2, 560, 560, 0, TWO_PI);

// テキスト
  noStroke();
  fill(0);
  textSize(80);
  textFont('Helvetica');
  text('Global', width/2 - 115, height/2 - 20);
  text('Cu   ures', width/2 - 160, height/2 - 20 + 100);

// 左矢印キーを押すと、IT(lT)の文字の大木さが10から110ぐらいになっていく
  if(keyIsDown(LEFT_ARROW)){
    count = (count + 1) % cycle;
    textSize(count + 10);
  }
  else{
    textSize(80);
  }
  strokeWeight(5);
  stroke(0);
  fill(250, 177, 246);
  text('IT', width/2 - 60, height/2 - 20 + 100);

}


function hexagon(cx, cy){
  push();
  // 色を少しランダムにする
  let r, g, b;
  noStroke();
  if(cx < width/2 - (200 / 3) * 2){
    if(cy < height/2 - 100){
      r = 178;
      g = 247;
      b = random(178, 247);
    }
    else if(cy < height/2){
      r = 178;
      g = 247;
      b = random(178, 247);
    }
    else if(cy < height/2 + 100){
      r = 178;
      g = 247;
      b = random(178, 247);
    }
    else if(cy < height/2 + 150){
      r = 178;
      g = 247;
      b = random(178, 247);
    }
    else{
      r = 178;
      g = 247;
      b = random(178, 247);
    }
  }


  else if(cx < width/2 - (200 / 3)){
    r = 247;
    g = random(178, 247);
    b = 178;
  }
  else if(cx < width/2){
    r = 178;
    g = random(178, 247);
    b = 247;
  }
  else if(cx < width/2 + (200 / 3)){
    r = random(178, 247);
    g = 247;
    b = 178;
  }
  else if(cx < width/2 + (200 / 3) * 2){
    r = random(178, 247);
    g = 178;
    b = 247;
  }
  else if(cx < width/2 + 200){
    r = 247;
    g = 178;
    b = random(178, 247);
  }
  else{
    r = 178;
    g = 247;
    b = random(178, 247);
  }

  fill(r, g, b);
  beginShape();
  for(var i = 0; i < 6; i++){
    let theta = TWO_PI * i / 6 - HALF_PI;
    let x = cx + cos(theta) * 41;
    let y = cy + sin(theta) * 41;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
}

// ひし形という名の正方形１(左に傾いているほう)
function rhombusOne(cx, cy){
  push();

  // 色は上のとほぼ同じもの。
  // 色のランダムの数字だけ変えている
  let r, g, b;
  noStroke();
  if(cx < width/2 - (200 / 3) * 2){
    if(cy < height/2 - 100){
      r = 178;
      g = random(178, 247);
      b = 247;
    }
    else if(cy < height/2){
      r = 178;
      g = random(178, 247);
      b = 247;
    }
    else if(cy < height/2 + 100){
      r = 178;
      g = random(178, 247);
      b = 247;
    }
    else if(cy < height/2 + 150){
      r = 178;
      g = random(178, 247);
      b = 247;
    }
    else{
      r = 178;
      g = random(178, 247);
      b = 247;
    }
  }

  else if(cx < width/2 - (200 / 3)){
    r = random(178, 247);
    g = 247;
    b = 178;
  }
  else if(cx < width/2){
    r = random(178, 247);
    g = 178;
    b = 247;
  }
  else if(cx < width/2 + (200 / 3)){
    r = 247;
    g = 178;
    b = random(178, 247);
  }
  else if(cx < width/2 + (200 / 3) * 2){
    r = 178;
    g = 247;
    b = random(178, 247);
  }
  else if(cx < width/2 + 200){
    r = 247;
    g = random(178, 247);
    b = 178;
  }
  else{
    r = 178;
    g = random(178, 247);
    b = 247;
  }

  fill(r, g, b);
  quad(cx, cy, cx - 20 * sqrt(3), cy + 20, cx - 20 * sqrt(3) + 20, cy + 20 + 20 * sqrt(3), cx + 20, cy + 20 * sqrt(3));
  pop();
}

// ひし形という名の正方形2(右に傾いているほう)
function rhombusTwo(cx, cy){
  push();

  // 色は上のとほぼ同じもの。
  // 色のランダムの数字だけ変えている
  let r, g, b;
  noStroke();
  if(cx < width/2 - (200 / 3) * 2){
    if(cy < height/2 - 100){
      r = random(178, 247);
      g = 178;
      b = 247;
    }
    else if(cy < height/2){
      r = random(178, 247);
      g = 178;
      b = 247;
    }
    else if(cy < height/2 + 100){
      r = random(178, 247);
      g = 178;
      b = 247;
    }
    else if(cy < height/2 + 150){
      r = random(178, 247);
      g = 178;
      b = 247;
    }
    else{
      r = random(178, 247);
      g = 178;
      b = 247;
    }
  }

  else if(cx < width/2 - (200 / 3)){
    r = 247;
    g = 178;
    b = random(178, 247);
  }
  else if(cx < width/2){
    r = 178;
    g = 247;
    b = random(178, 247);
  }
  else if(cx < width/2 + (200 / 3)){
    r = 247;
    g = random(178, 247);
    b = 178;
  }
  else if(cx < width/2 + (200 / 3) * 2){
    r = 178;
    g = random(178, 247);
    b = 247;
  }
  else if(cx < width/2 + 200){
    r = random(178, 247);
    g = 247;
    b = 178;
  }
  else{
    r = random(178, 251);
    g = 178;
    b = 247;
  }

  fill(r, g, b);

  quad(cx, cy, cx - 20, cy + 20 * sqrt(3), cx - 20 + 20 * sqrt(3), cy + 20 * sqrt(3) + 20, cx + 20 * sqrt(3), cy + 20);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
