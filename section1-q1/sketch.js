// 練習問題：神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // BLANK[1]

  /*
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI)
  arc(x, y, w, h, start, stop, [mode], [detail])
  startとstop: 第4象限→第3象限→第2象限→第1象限の順に、時計回りでまわる。
  0は3時、HALF_PIが6時、PIが9時、PI + HALF_PIが12時、TWO_PIが一周した3時。
  */

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);


}
