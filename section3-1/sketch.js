// テキスト「リサイズするプログラムを作る」
function setup(){
  createCanvas(windowWidth, windowHeight); // キャンバスの大きさをウィンドウの大きさと同じにする
}

function windowResized(){ // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
  resizeCanvas(windowWidth, windowHeight);  // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < 10; i++){
    ellipse(width * i / 10, height * (10 - i) / 10, 20);
  }
  text("center!", width * 0.5, height * 0.5);
}
