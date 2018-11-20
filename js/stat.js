var statCloudX = 100;
var statCloudY = 10;
var statCloudGap = 10;
var statCloudWidth = 420;
var statCloudHeight = 270;
var statCloudFont = 16;
var barHeigth = 150;
var barWidth = 40;
var barRange = 50;

var drawStatCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, statCloudWidth, statCloudHeight);
};
var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

var renderStatistics = function (ctx, names, times) {
  drawStatCloud(ctx, statCloudX + statCloudGap, statCloudY + statCloudGap, 'rgba(0, 0, 0, 0.7)');
  drawStatCloud(ctx, statCloudX, statCloudY, 'rgba(256, 256, 256, 1.0)');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', statCloudX + statCloudFont * 3, statCloudY + statCloudFont * 2);
  ctx.fillText('Список результатов:', statCloudX + statCloudFont * 3, statCloudY + statCloudFont * 3.3);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], statCloudX * i, statCloudY);
    ctx.fillRect(statCloudX + (barRange + barWidth) * i, statCloudY, barWidth, (barHeigth * times[i]) / maxTime);
  }
};


