// テキスト「アニメーションの基本」
let x, y, vx, vy; // point1: 関数の外で変数を宣言する
const g = 1; // 重力加速度
const vyMax = 30;
const vxMax = 5;
const vxMin = -5;
if(vxMax < vx){ vx = vxMax};
if(vxMin > vx){ vx = vxMin};

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 10;
  y = height;
  vxplus = 0;
  vxminus = 0;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  x += vxplus + vxminus;
  y += vy;

// 重力
  vy = constrain(vy + g, -vyMax, vyMax);

// キーボード操作
// "D" or 右矢印キー: 右に進む　　、　　
  if(keyIsDown("D".charCodeAt(0)) || keyIsDown(RIGHT_ARROW)){
    vxplus = 5;
  }
  else{
    vxplus = 0;
  }

//"A" or 左矢印キー: 左に進む
  if(keyIsDown("A".charCodeAt(0)) || keyIsDown(LEFT_ARROW)){
    vxminus = -5;
  }
  else{
    vxminus = 0;
  }

// スペースキー: ジャンプ
if(y >= height - 10 && keyIsDown(" ".charCodeAt(0))){
  vy = -20;
}

// while()　地面にボールが着くまで、vxplusやvxminusを維持することができるかも？？

// if(y < height – 10){
//   if(keyReleased(” ”)){
//     vxplus -= 1;
//     vxminus += 1;
//   }
// }
// if(y < height – 10 && keyReleased(” ”)){
//   vxplus -= 1;
//   vxminus += 1;
// }
//
// if(y >= height - 10){
//   vxplus = 0; vxminus = 0;
// }


  // if(y >= height - 10 && keyIsDown(" ".charCodeAt(0)) && vxplus > 0){
  //   vxplus = 3;
  //   vy = -20;
  // }
  // else if(y >= height - 10 && keyIsDown(" ".charCodeAt(0)) && vxminus < 0){
  //   vxminus = -3;
  //   vy = -20;
  // }
  // else if(y >= height - 10 && keyIsDown(" ".charCodeAt(0))){
  //   vx = 0;
  //   vy = -20;
  // }
// Math.abs()   引数の絶対値を返すメソッド
  // if(!(keyIsDown("D".charCodeAt(0)) && keyIsDown(RIGHT_ARROW)) && y > height && vxplus > 0){
  //   vxplus = 4;
  // }


  if(y > height - 10){ vy = 0; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height - 10);

  if(x < 10){
    x = 10;
  }
  if(x > width - 10){
    x = width - 10;
  }



}

//   if(x < 10){
//     x = 10;
//   }
//   if(x > width - 10){
//     x = width - 10;
//   }
//
  // vy = constrain(vy + g, -vyMax, vyMax);
  // if(y > height - 10){ vy = 0; }
  // x = constrain(x, 0, width);
  // y = constrain(y, 0, height - 10);
// }


  // if(y >= height - 10 && keyIsDown(" ".charCodeAt(0)) && vx > 0){
  //   vx = 2;
  //   vy = -20;
  // }
  // else if(y >= height - 10 && keyIsDown(" ".charCodeAt(0)) && vx < 0){
  //   vx = -2;
  //   vy = -20;
  // }
  // else if(y >= height - 10 && keyIsDown(" ".charCodeAt(0))){
  //   vx = 0;
  //   vy = -20;
  // }
  //
  // x += vx;
  // y += vy;
  //
  // if(y == height - 9){
  //   vx = 0;
  // }
  //
  // if(keyIsDown("A".charCodeAt(0))){
  //   for(let i = 0; i < 9; i ++){
  //     vx = -1.1 * i;
  //   }
  // }

  // if(keyReleased("A".charCodeAt(0))){
  //   for(let i = 0; i < 9; i ++){
  //     vx = -8.8 + 1.1 * i;
  //   }
  // }



// ここからこの関数の最後までは、もともとまぁまぁ成功してたもの
//   if(y >= height - 10 && keyIsDown(" ".charCodeAt(0)) && vx > 0){
//     vx = 2;
//     vy = -20;
//   }
//   else if(y >= height - 10 && keyIsDown(" ".charCodeAt(0)) && vx < 0){
//     vx = -2;
//     vy = -20;
//   }
//   else if(y >= height - 10 && keyIsDown(" ".charCodeAt(0))){
//     vx = 0;
//     vy = -20;
//   }
//
//   x += vx;
//   y += vy;
//
//   if(y == height - 9){
//     vx = 0;
//   }
//
//   if(keyIsDown("A".charCodeAt(0))){
//     for(let i = 0; i < 9; i ++){
//       vx = -1.1 * i;
//     }
//   }
//
//   // if(keyReleased("A".charCodeAt(0))){
//   //   for(let i = 0; i < 9; i ++){
//   //     vx = -8.8 + 1.1 * i;
//   //   }
//   // }
//   if(keyIsDown("D".charCodeAt(0))){
//     for(let i = 0; i < 9; i ++){
//       vx = 1.1 * i;
//     }
//   }
//
//   if(x < 10){
//     x = 10;
//   }
//   if(x > width - 10){
//     x = width - 10;
//   }
//
//   vy = constrain(vy + g, -vyMax, vyMax);
//   if(y > height - 10){ vy = 0; }
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height - 10);
// }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


// function draw(){
//   background(160, 192, 255);
//   ellipse(x, y, 20, 20);
//
//   // if(keyIsDown(LEFT_ARROW)){ vx -= 0.5; }
//   if(keyIsDown(RIGHT_ARROW)){ vx += 0.5; }
//   if(y >= height - 10 && keyIsDown(" ".charCodeAt(0))){ vy = -20; }
//
//   // 速度は「位置の変化量」
//   // if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(" ".charCodeAt(0))){
//   //   x += vx;
//   // }
//   x += vx;
//   y += vy;
//   if(keyIsDown(LEFT_ARROW)){
//     for(let i = 0; i < 9; i ++){
//       vx = -1.1 * i;
//     }
//   }
//   else if(vx < 0){
//     vx = 0;
//     // let count, cycle;
//     // count = 0;
//     // cycle = 10;
//     // count = (count + 1) % cycle;
//     // vx = -1.1 * (10 - count);
//   }
//   else{
//     vx = 0;
//   }
//
//   if(y >= height - 10 && keyIsDown("A".charCodeAt(0))){
//     x = width;
//     y = height;
//     vx = 0;
//     vy = 0;
//   }
//   vy = constrain(vy + g, -vyMax, vyMax);
//   if(y > height - 10){ vy = 0; }
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height - 10);
// }
//
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
//
//
//
//   // for(let i = 0; i < 9 && y == height - 10 && keyIsDown(LEFT_ARROW); i++){
//   //   vx = -1.1 * i;
//   // }
//   // for(let i = 0; i < 9 && y == height - 10 && keyIsDown(RIGHT_ARROW); i++){
//   //   vx = 1.1 * i;
//   // }
//
//
//
//   // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
//   vy = constrain(vy + g, -vyMax, vyMax);
//
//   // 端の処理パターン (1) 反対側から出てくる
//   // if(x > width){ x = 0; }
//   // else if(x < 0){ x = width; }
//   // if(y > height){ y = 0; }
//   // if(y < 0){ y = height; }
//
// 　// 端の処理パターン (2) 跳ね返る
// 　// 跳ね返りは「速度 × -1」   物理：完全弾性衝突
//   // if(x < 0 || x > width){ vx = -1 * vx; }
//   // if(y < 0 || y > height){ vy = -1 * vy; }
//   // x座標、y座標を画面内に戻しておく
//   if(y > height - 10){ vy = 0; }
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height - 10);
// }
//
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
//
//
// // // テキスト「アニメーションの基本」
// // let x, y, vx, vy; // point1: 関数の外で変数を宣言する
// // const g = 1; // 重力加速度
// // const vyMax = 30;
// //
// // function setup(){
// //   createCanvas(windowWidth, windowHeight);
// //   x = width / 2;
// //   y = height / 2;
// //   vx = 8;
// //   vy = 8;
// // }
// //
// // function draw(){
// //   background(160, 192, 255);
// //   ellipse(x, y, 20, 20);
// //
// //   // 速度は「位置の変化量」
// //   x += vx;
// //   y += vy;
// //
// //   // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
// //   vy = constrain(vy + g, -vyMax, vyMax);
// //
// //   // 端の処理パターン (1) 反対側から出てくる
// //   // if(x > width){ x = 0; }
// //   // else if(x < 0){ x = width; }
// //   // if(y > height){ y = 0; }
// //   // if(y < 0){ y = height; }
// //
// // 　// 端の処理パターン (2) 跳ね返る
// // 　// 跳ね返りは「速度 × -1」   物理：完全弾性衝突
// //   if(x < 0 || x > width){ vx = -1 * vx; }
// //   if(y < 0 || y > height){ vy = -1 * vy; }
// //   // x座標、y座標を画面内に戻しておく
// //   x = constrain(x, 0, width);
// //   y = constrain(y, 0, height);
// // }
// //
// // function windowResized(){
// //   resizeCanvas(windowWidth, windowHeight);
// // }
// //
// //
// // // let x, y; // ポイント1：関数の外で変数を宣言する
// // //
// // // function setup(){
// // //   createCanvas(windowWidth, windowHeight);
// // //   x = width / 2;
// // //   y = height / 2;
// // // }
// // //
// // // function draw(){
// // //   background(160, 192, 255); // ポイント2: draw の最初に background を書く
// // //   ellipse(x, y, 30);
// // //   x += 2;
// // //   y -= 2;
// // // }
//
//
// // (3)重力、床に弾む
// // let x, y, vx, vy;
// // const g = 1; // 重力
// // const vyMax = 30;
// //
// // // setup は上と同じなので省略
// //
// // function draw(){
// //   background(160, 192, 255);
// //   ellipse(x, y, 30);
// //   x += vx;
// //   y += vy;
// //   vy += g; // 重力は「速度の変化量」
// //   vy = constrain(vy, -vyMax, vyMax); // 速度が大きくなりすぎないように調整
// //   if(y < 0 || y > height){ vy = -1 * vy; }
// //   y = constrain(y, 0, height);
// // }


// w: 前進、s: 後退、a: 左移動、d: 右移動、スペースキー: ジャンプ、esc: メニュー、
