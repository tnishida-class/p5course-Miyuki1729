//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

// let balls = []; // 配列を用意して
// let b1 = { x: 50, y: 50, vx: 3, vy: 0, size: 10 }; // ボール１のオブジェクトを作って
// balls.push(b1); // 配列に追加
// let b2 = { x: 40, y: 40, vx: 0, vy: 3, size: 20 }; // ボール２のオブジェクトを作って
// balls.push(b2); // またもや配列に追加
// ↑位置・速度・大きさを持ったボールを二つ作成して配列に追加するプログラム

// let オブジェクト名 = { キー1: 値1, キー2: 値2, ... };
//
// // 長い場合は複数行にまたがって書くのもわかりやすい
// let オブジェクト名 = {
//   キー1: 値1,
//   キー2: 値2,
//   ...
// };

// オブジェクト名["キー"] // 値を参照する方法その１
// オブジェクト名.キー    // 値を参照する方法その２
// オブジェクト名["キー"] = 新しい値; // 値を上書きする方法その１
// オブジェクト名.キー = 新しい値;    // 値を上書きする方法その２

let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(10) + 2, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
