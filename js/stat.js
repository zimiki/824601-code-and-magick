var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var LEFT_GAP = 80;
var TOP_GAP = 85;
var STAT_WIDTH = 420;
var STAT_HEIGHT = 270;
var FONT_SIZE = 16;
var GIST_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var lineHeight = 1.3 * FONT_SIZE;

var drawStatCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, STAT_WIDTH, STAT_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRand = function () {
  return Math.random();
};

window.renderStatistics = function (ctx, names, times) {
  var gistX = CLOUD_X + LEFT_GAP;
  var gistY = CLOUD_Y + GIST_HEIGHT + TOP_GAP;
  var maxTime = getMaxElement(times);

  drawStatCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  drawStatCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(256, 256, 256, 1.0)');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', gistX, gistY - GIST_HEIGHT - (3 * lineHeight));
  ctx.fillText('Список результатов:', gistX, gistY - GIST_HEIGHT - (2 * lineHeight));

  for (var i = 0; i < names.length; i++) {
    var barHeigth = times[i] * GIST_HEIGHT / maxTime;
    ctx.fillStyle = '#000';

    ctx.fillText(names[i], gistX + i * (BAR_WIDTH + BAR_GAP), gistY + lineHeight);
    ctx.fillText(Math.ceil(times[i]), gistX + i * (BAR_WIDTH + BAR_GAP), gistY - barHeigth - FONT_SIZE);
    var randColor = 'rgba(0, 0, 256,' + getRand + ')'; // ? что не так я записала  ??
    ctx.fillStyle = randColor; // ? что не так я записала  ??
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
    }
    ctx.fillRect(gistX + i * (BAR_WIDTH + BAR_GAP), gistY - barHeigth, BAR_WIDTH, barHeigth);
  }
};


