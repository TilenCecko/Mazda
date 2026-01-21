const SVGIcons = {
  "asd": {
    draw: function (ctx) {
      ctx.save();
      ctx.scale(1.8, 0.9);
      ctx.beginPath();
      ctx.moveTo(135.7, 36.5);
      ctx.bezierCurveTo(135.2, 35.9, 134.5, 35.2, 134, 34.6);
      ctx.bezierCurveTo(119, 18.5, 94.5, 15, 73.9, 15);
      ctx.bezierCurveTo(53.1, 15, 27.9, 18.5, 13.1, 35.6);
      ctx.bezierCurveTo(12.9, 35.9, 12.6, 36.2, 12.4, 36.5);
      ctx.bezierCurveTo(5.2, 45.2, 0.7, 57.5, 0.7, 74.1);
      ctx.bezierCurveTo(0.7, 125.3, 42.3, 133.5, 73.9, 133.5);
      ctx.bezierCurveTo(105.6, 133.5, 147.3, 125.3, 147.3, 74.1);
      ctx.bezierCurveTo(147.3, 57.5, 142.9, 45.1, 135.7, 36.5);
      ctx.closePath();
      ctx.moveTo(26.2, 44.6);
      ctx.bezierCurveTo(36.1, 29.4, 54.8, 25.7, 73.9, 25.7);
      ctx.bezierCurveTo(93.0, 25.7, 111.4, 29.2, 121.4, 44.1);
      ctx.bezierCurveTo(121.6, 44.4, 121.8, 44.8, 122, 45.2);
      ctx.bezierCurveTo(104.9, 55.3, 85.5, 55.7, 73.9, 80.7);
      ctx.bezierCurveTo(61.2, 56.4, 42, 56.2, 25.2, 46.5);
      ctx.bezierCurveTo(25.5, 45.9, 25.9, 45.3, 26.2, 44.6);
      ctx.closePath();
      ctx.moveTo(73.9, 122.8);
      ctx.bezierCurveTo(45.5, 123, 19, 114.8, 19, 74.1);
      ctx.bezierCurveTo(19, 71.1, 19, 68, 19.5, 65.4);
      ctx.bezierCurveTo(19.6, 64.8, 19.8, 64.2, 19.9, 63.6);
      ctx.bezierCurveTo(29.4, 67, 38.8, 70.2, 48.4, 73.4);
      ctx.bezierCurveTo(59.6, 78, 67.1, 84.6, 73.9, 99.4);
      ctx.bezierCurveTo(80.7, 84.6, 88, 77.1, 99.3, 72.5);
      ctx.bezierCurveTo(109, 69.1, 118.5, 65.6, 128.2, 62.2);
      ctx.bezierCurveTo(128.3, 62.4, 128.3, 62.7, 128.4, 62.9);
      ctx.bezierCurveTo(128.9, 66.2, 129.1, 70.1, 129.1, 74.1);
      ctx.bezierCurveTo(129.2, 114.8, 102.3, 123.1, 73.9, 122.8);
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
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    SVGIcons["asd"].draw(ctx);
}

window.addEventListener("load", () => {
    initCanvasAndDraw();

    const loader = document.getElementById("loading-screen");
    const path = document.getElementById("mazdaPath");

    if (!loader || !path) return;

    // Izračun dolžine poti za animacijo
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Fill efekt po risanju
    setTimeout(() => {
        path.style.transition = "fill 0.8s ease-in";
        path.style.fill = "white";
    }, 1000); // po koncu draw animacije

    // Skrij loading screen
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 2500); // po fill animaciji
});



