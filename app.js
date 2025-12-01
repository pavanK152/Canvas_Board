const colorInput = document.getElementById("strokeColor");
const brushSize = document.getElementById("brushSize");
const penBtn = document.getElementById("pen");
const eraseBtn = document.getElementById("eraser");
const squareBtn = document.getElementById("square");
const cleanBtn = document.getElementById("cleaner");
const downloadBtn = document.getElementById("downloadImg");

const canvas = document.getElementById("canvas");
canvas.height = 800;
canvas.width = 800;

// this will give us obj of canvas which has property to write on canvas
const ctx = canvas.getContext("2d");

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.stroke = "#000000";
let isDrawing = false;
function startDraw(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function draw(e) {
  if (isDrawing == false) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function stopDraw(e) {
  isDrawing == false;
}
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);
