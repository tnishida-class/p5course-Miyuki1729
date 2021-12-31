// テキスト「インタラクティブなアニメーション」
let x, y, vx, vy;
let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  grabbed = false;
}


function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);
  if(!grabbed){ // つかんでいないときだけアニメーションさせる
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
}

function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    x = width / 2;
    y = height / 2;
    vx = 0;
    vy = 0;
    grabbed = false;
  }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
  // 新登場の dist 関数は２点の距離を求める関数（grabbed には true か false が代入される）
}

function mouseDragged(){
  if(grabbed){ // つかんでいるときは円がマウスに追従する
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX; // pmouseX は少し前のマウスのx座標
    vy = mouseY - pmouseY; // pmouseY は少し前のマウスのy座標
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
