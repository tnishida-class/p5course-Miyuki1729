// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 68;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(LEFT_ARROW)){
    count = (count + 1.4) % cycle;
  }
  else{
    count = (count + 1) % cycle;
  }

  if(count < 6){
    ellipse(width / 2, height / 2, 7 + 3 * count);
  }
  else if(count < 12){
    ellipse(width / 2, height / 2, 7 + 3 * (12 - count));
    }
  else if(count < 24){
    ellipse(width / 2, height / 2, 7 + 7 * 2 * (count - 12));
    }
  else if(count < 32){
    ellipse(width / 2, height / 2, 175 + 7 * 3 * (24 - count));
  }
  // else if(count < 42){
  //   ellipse(width / 2, height / 2, 77 - 6 * (count - 42));
  // }
  // else if(count < 46){
  //   ellipse(width / 2, height / 2, 7 + 4 * (46 - count));
  // }
  // else if(count < 56){
  //   ellipse(width / 2, height / 2, 7 + 8 * (count - 46));
  // }

}




// function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   // ここでcountは、0,1,2,…,98,163,0,1,…と変わっていく値の変数として定義されている
//   // その周期の中で、1の時、10の時に円はどういう大きさにすべきか、と考える
//
//   // count : 0から163で固定
//   //
//   if(keyIsDown(LEFT_ARROW) && count < 10){ count = count / 20; }
//
//   if(count < 2){
//     ellipse(width / 2, height / 2, 7 + 6 * count);
//   }
//   else if(count < 4){
//     ellipse(width / 2, height / 2, 7 + 6 * (4 - count));
//   }
//   else if(count < 8){
//     ellipse(width / 2, height / 2, 7 + 6 * 8 * count);
//   }
//
//   // else if(count < 4){
//   //   ellipse(width / 2, height / 2, 7 + 6 * (4 - count));
//   // }
//
//
//
//   // BLANK[1]
//   // ellipse(width / 2, height / 2, size);
// }
// // 最高18   18 * 6 = 108
// // 心電図の途中：7
