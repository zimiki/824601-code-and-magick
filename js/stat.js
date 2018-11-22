'use strict';

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
var LINE_HEIGHT = 1.3 * FONT_SIZE;
var CLOUD_COLOR = 'rgba(256, 256, 256, 1.0)';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

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

var getRandom = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

window.renderStatistics = function (ctx, names, times) {
  // calculating gist position
  var GIST_X = CLOUD_X + LEFT_GAP;
  var GIST_Y = CLOUD_Y + GIST_HEIGHT + TOP_GAP;
  // drawing static cloud
  drawStatCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  drawStatCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  // drawing heading text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', GIST_X, GIST_Y - GIST_HEIGHT - (3 * LINE_HEIGHT));
  ctx.fillText('Список результатов:', GIST_X, GIST_Y - GIST_HEIGHT - (2 * LINE_HEIGHT));
  // drawing columns
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var barHeigth = times[i] * GIST_HEIGHT / maxTime;
    // drawing statistic text
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], GIST_X + i * (BAR_WIDTH + BAR_GAP), GIST_Y + LINE_HEIGHT);
    ctx.fillText(Math.ceil(times[i]), GIST_X + i * (BAR_WIDTH + BAR_GAP), GIST_Y - barHeigth - FONT_SIZE);
    // set color bar
    var randColor = 'rgba(0, 0,' + getRandom(1, 256) + ', 1.0)';
    ctx.fillStyle = randColor;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
    }
    // drawing bar
    ctx.fillRect(GIST_X + i * (BAR_WIDTH + BAR_GAP), GIST_Y - barHeigth, BAR_WIDTH, barHeigth);
  }
};


