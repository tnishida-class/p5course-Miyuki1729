// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);


  // function setup(){
  //   createCanvas(400, 400);
  //
  //   // 点数を乱数で用意する
  //   let scores = [];
  //   for(let i = 0; i < 10; i++){
  //     scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  //   }
  //
  //   // 棒を描く
  //   for(let i = 0; i < scores.length; i++){
  //     const dx = width / scores.length;   // 棒の幅（固定）
  //     const h = height * scores[i] / 100; // 棒の高さ（点数に比例）
  //     fill(128);
  //     rect(i * dx, height - h, dx, h);
  //   }
  // }

  // 配列をランダムに初期化する
  let scores = []; // 空の配列も作れる
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){ // 配列名.length :配列内のデータの個数
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）
  average = sum / scores.length;
  console.log(average);

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    if(largest < scores[i]){
      largest = scores[i];
    }
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }
  console.log(largest);

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if(smallest > scores[i]){
      smallest = scores[i];
    }
    console.log(smallest);
    // BLANK[3]　ヒント：最小値とだいたい同じ
  }

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    if(scores[i] == largest){
      fill(255, 0 ,0);
    }
    else if(scores[i] == smallest){
      fill(0, 0, 255);
    }
    else{
      fill(0);
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
    stroke(0, 255, 0);
    rect(0, height - (height * average / 100), width, 1);

  // BLANK[5] 平均点の線を引きます
}


// let 配列名 = [データ, データ, データ, ...];
// let 配列名 = []; // 空の配列を作ることもできる
// 配列名[N]           // N番目の値を参照する
// 配列名[N] = 値;     // N番目に値を上書き代入する
// 配列名.push(値);    // 末尾に値を追加する
// 配列名.pop()        // 末尾の値を削除する
// 配列名.unshift(値); // 先頭に値を追加する（元々あったデータの番号が１ずつ後ろにずれる）
// 配列名.shift();     // 先頭の値を削除する

// 配列に出てくるpush と pop は、
//「後に入れたデータを先に出す」という特徴を持った構造「スタック (Stack)」に対する操作
// の呼び方としてよく使われるもの。
// 「先に入ったデータが先に出る」ような構造は「キュー (Queue)」
