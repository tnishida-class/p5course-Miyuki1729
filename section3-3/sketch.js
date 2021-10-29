// テキスト「キーボード操作に反応する」
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; } // 文字以外のキーは keyCode を使う
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x += 10; } // 文字キーの場合は key を使う
  if(keyIsDown(" ".charCodeAt(0))){ x -= 10; } // スペースキーも文字キーと同様
}

// あるキーが押されているかどうかを調べるには関数 keyIsDown(...) を使います。
// 文字キー以外は LEFT_ARROW といった定数を使用します。矢印キー以外には TAB,
// ESCAPE, SHIFT, CONTROL などがあります。 文字キーの場合にはその文字のコードで
// 判定する必要があるので charCodeAt() を使います。スペースキーも文字キーと同様に
// なります。 何か一つでもキーが押されていれば true、何も押されていなければ false
// になる変数です。


// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

// イベントに関わるキーが文字キーの場合は key を、文字以外のキーの場合は keyCode を
// 調べます。 イベントハンドラでは keyIsDown(...) は使いません。
// キーボードに関するイベントは以下の通りです。
//
// 関数 keyPressed(), keyReleased()
// キーを押したとき、離したときのイベントハンドラ
// 関数 keyTyped()
// 文字が入力されたときのイベントハンドラ（シフトキーによる大文字小文字の打ち分けに対応）

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// mouseX, mouseY
// マウスのx座標, y座標
// pmouseX, mouseY
// 少し前のマウスのx座標, y座標（マウスがどう動いたかを知るために必要）
// mouseIsPressed
// マウスボタンが押されているかどうか（押されていたら true、押されていなければ false）


// たとえば次のように使います。
// マウスの動きに円が追随し、マウスボタンを押しているかどうかで円の大きさが変わります
// function draw(){
//   background(5, 39, 94);
//   if(mouseIsPressed){
//     ellipse(mouseX, mouseY, 30);
//   }
//   else{
//     ellipse(mouseX, mouseY, 20);
//   }
// }

// 次の例のように、関数 mouseClicked() を作っておくと、クリック時に実行されます。
// 上の例と違ってクリックしたときにだけ円の位置が変わります。
// let x, y;
//
// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   x = width / 2;
//   y = height / 2;
// }
//
// function draw(){
//   background(5, 39, 94);
//   ellipse(x, y, 30);
// }
//
// function mouseClicked(){
//   x = mouseX;
//   y = mouseY;
// }
// mouseClicked() の中では変数に円を描画すべき座標を代入するだけで、
// 描画の処理は draw() で行っているのがポイントです。 次に示すように
// mouseClicked() の中に描画処理を描いてもすぐに draw() の描画処理に
// よって上書きされて消えてしまいます。 よくある間違いなので気を付けましょう。
// 上手くいかない例　↓
// function draw(){
//   background(5, 39, 94);
// }
//
// function mouseClicked(){
//   ellipse(mouseX, mouseY, 30); // ここに描画処理を描いてもうまくいきません
// }
//


// mouseClicked(), doubleClicked()
// クリックされたとき、ダブルクリックされたとき
// mousePressed(), mouseReleased()
// ボタンを押したとき、離したとき
// mouseMoved(), mouseDragged()
// マウスを動いたとき、ドラッグした（ボタンを押したまま動いた）とき
// mouseWheel()
// マウスホイールを回したとき
// イベント発生時にする処理を書く書き方のことを「イベント駆動型 (event driven) プログラミング」と呼びます。
