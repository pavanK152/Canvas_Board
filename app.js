const colorInput = document.getElementById("strokeColor");
const brushSize = document.getElementById("brushSize");
const penBtn = document.getElementById("pen");
const eraseBtn = document.getElementById("eraser");
const squareBtn = document.getElementById("square");
const cleanBtn = document.getElementById("cleaner");
const downloadBtn = document.getElementById("downloadImg");

const canvas = document.getElementById("canvas");
canvas.height = 400;
canvas.width = 800;

// this will give us obj of canvas which has property to write on canvas
const ctx = canvas.getContext("2d");

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#000000";
let isDrawing = false;
let currentTool = "pen";

function startDraw(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function draw(e) {
  if (isDrawing == false) return;
  ctx.strokeStyle = currentTool === "eraser" ? "#ffffff" : colorInput.value;
  ctx.lineWidth = brushSize.value;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function stopDraw(e) {
  isDrawing = false;
}

penBtn.addEventListener("click", function () {
  currentTool = "pen";
  eraseBtn.classList.add("activeBtn");
  squareBtn.classList.remove("activeBtn");
  penBtn.classList.remove("activeBtn");
});
eraseBtn.addEventListener("click", function () {
  currentTool = "eraser";
  penBtn.classList.remove("activeBtn");
  squareBtn.classList.remove("activeBtn");
  eraseBtn.classList.add("activeBtn");
});
cleanBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

downloadBtn.addEventListener("click", function () {
  const link = canvas.toDataURL("image/png");
  const anchorTag = document.createElement("a");
  anchorTag.href = link;
  anchorTag.download = "Drawing.png";
  document.body.appendChild(anchorTag);
  anchorTag.click();
  document.body.removeChild(anchorTag);
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);
