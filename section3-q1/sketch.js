// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let x;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 97;
  x = 0;
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
    x = 21 + count;
    // ellipse(width / 2, height / 2, 21 + count);
  }
  else if(count < 12){
    x = 21 + 12 - count;
    // ellipse(width / 2, height / 2, 21 + 12 - count);
    }
  else if(count < 24){
    x = 21 + 7 * (count - 12);
          // ellipse(width / 2, height / 2, 21 + 7 * 2 * (count - 12));
    }
  else if(count < 32){
    x = 105 - 7 * (count - 24) * 15 / 8;
  // else if(count < 24){
  //   x = 21 + 7 * 2 * (count - 12);
  //   // ellipse(width / 2, height / 2, 21 + 7 * 2 * (count - 12));
  //   }
  // else if(count < 32){
  //   x = 189 + 7 * 3 * (24 - count - (count - 24) / 8);
    // ellipse(width / 2, height / 2, 189 + 7 * 3 * (24 - count - (count - 24) / 8));
  }
  else if(count < 48){
    x = 7 * ((count - 32) / 2);
  }
  else if(count < 64){
    x = 21 + 7 * ((64 - count) * 5 / 16);
  }
  // else if(count < 41){
  //   x = (count - 32) * 8 / 3;
  //   // ellipse(width / 2, height / 2, (count - 32) * 2.7);
  // }
  // else if(count < 46){
  //   x = 24 - (count - 41) * 3 / 5;
  //   // ellipse(width / 2, height / 2, ())
  // }
  // else if(count < 54){
  //   x = 21 + (count - 46) * 7;
  // }
  // else if(count < 64){
  //   x = 77 - (count - 54 - (count - 54) / 5) * 7;
  // }
  // else if(count < 68){
  //   x = 21 + count - 64;
  // }
  // else if(count < 72){
  //   x = 21 + 72 - count;
  // }
  else{
    x = 21;
    // ellipse(width / 2, height / 2, 21);
  }
  ellipse(width / 2, height / 2, x);
  // else if(count < 42){
  //   ellipse(width / 2, height / 2, 77 - 6 * (count - 42));
  // }
  // else if(count < 46){
  //   ellipse(width / 2, height / 2, 7 + 4 * (46 - count));
  // }
  // else if(count < 56){
  //   ellipse(width / 2, height / 2, 7 + 8 * (count - 46));
  // }
  // 64 - 54 - x = 8     54 - 54 - x = 0
  // x = 2                x = 0
  // (x - 54) / 5
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
