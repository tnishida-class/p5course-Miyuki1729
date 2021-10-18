// テキスト「二重ループ」
// 「偶数『行』の四角形の色を変える」パターン
// 練習：「偶数『列』の四角形の色を変える」パターンに変えてみましょう
function setup(){
  createCanvas(100, 100);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      fill(i % 2 == 0 ? 255 : 0); // ここを変えます(変えた)
      console.log(i, j);
      rect(i * 10, j * 10, 5, 5);
    }
  }
}

/*
なにか指示(条件 ? 条件が真(true)の時に実行する式 : 条件がfalseの時に実行する式)
*/

/*
「偶数『行』の四角形の色を変える」パターン（もともとあったほう）
function setup(){
  createCanvas(100, 100);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      fill(j % 2 == 0 ? 255 : 0); // ここを変えます
      console.log(i, j);
      rect(i * 10, j * 10, 5, 5);
    }
  }
}

*/
