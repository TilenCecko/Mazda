const SVGIcons = {
  "asd": {
    draw: function (ctx) {
      ctx.save();
      ctx.scale(1.8, 0.9);
      ctx.beginPath();
      ctx.moveTo(136, 37);
      ctx.bezierCurveTo(135, 36, 135, 35, 134, 35);
      ctx.bezierCurveTo(119, 19, 95, 15, 74, 15);
      ctx.bezierCurveTo(53, 15, 28, 19, 13, 36);
      ctx.bezierCurveTo(13, 36, 13, 36, 12, 36);
      ctx.bezierCurveTo(5, 45, 1, 58, 1, 74);
      ctx.bezierCurveTo(1, 125, 42, 134, 74, 134);
      ctx.bezierCurveTo(106, 134, 147, 125, 147, 74);
      ctx.bezierCurveTo(147, 58, 143, 45, 136, 36);
      ctx.closePath();

      ctx.moveTo(26, 45);
      ctx.bezierCurveTo(36, 29, 55, 26, 74, 26);
      ctx.bezierCurveTo(93, 26, 111, 29, 121, 44);
      ctx.bezierCurveTo(122, 44, 122, 45, 122, 45);
      ctx.bezierCurveTo(105, 55, 86, 56, 74, 81);
      ctx.bezierCurveTo(61, 56, 42, 56, 25, 47);
      ctx.bezierCurveTo(26, 46, 26, 45, 26, 45);
      ctx.closePath();

      ctx.moveTo(74, 123);
      ctx.bezierCurveTo(46, 123, 19, 115, 19, 74);
      ctx.bezierCurveTo(19, 71, 19, 68, 20, 65);
      ctx.bezierCurveTo(20, 65, 20, 64, 20, 64);
      ctx.bezierCurveTo(29, 67, 39, 70, 48, 73);
      ctx.bezierCurveTo(60, 78, 67, 85, 74, 99);
      ctx.bezierCurveTo(81, 85, 88, 77, 99, 73);
      ctx.bezierCurveTo(109, 69, 119, 66, 128, 62);
      ctx.bezierCurveTo(128, 62, 128, 63, 128, 63);
      ctx.bezierCurveTo(129, 66, 129, 70, 129, 74);
      ctx.bezierCurveTo(129, 115, 102, 123, 74, 123);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }
};

function initCanvasAndDraw() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  SVGIcons["asd"].draw(ctx);
}
window.addEventListener('load', initCanvasAndDraw);

