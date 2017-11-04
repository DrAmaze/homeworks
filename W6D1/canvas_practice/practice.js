document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'lavender';
  ctx.fillRect(230,230,250);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
});