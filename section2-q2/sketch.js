// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let x = size * i,
          y = size * j,
          p = i + j;
      fill(p % 2 == 0 ? 255 : 125);
      rect(x, y, size, size);
      // fill(p % 2 == 0 && j < 3 ? 'red')
      // ellipse(x, y, 25, 25);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      // widthは、多分createCanvasの(a, b)の aのほう。
      // だからこの場合、size = width　というのは
      // size = 200 / 8 (= 25)　を表していて、
      // 入れ子の中身はyが25ずつ増えていく、縦に四角を並べていっている
      // 入れ子の外身の繰り返しは、それを横に計8列作る
// 丸を作りたい。
      // let s = width / 16, t = (1 + j) * s;
      // let s = size / 2, t = size / 2;
      // fill(255, 0, 0);
      // ellipse(s, t * 3, size - 4);

      let s = (size / 2) * (1 + 2 * i),
          t = (size / 2) * (1 + 2 * j);
      if(j < 3 && p % 2 == 1){
        fill(255, 0, 0);
        ellipse(s, t, size - 4);
      }
      else if(4 < j && p % 2 == 1){
        fill(0);
        ellipse(s, t, size - 4);
      }



      // for(let s = (1 + j) * )
      // fill(j < 3 && p % 2 == 0 ? 'red' : 255);
      // ellipse(t, t, size);
// ellipse()
//
//
    }
  }
}
