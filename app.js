let canvas = $("#canvas");
let colorPicker = $("#cp");
let ctx = canvas[0].getContext("2d");
let isDrawing = false;
let btn = $(".btn");
let dropdown = $("#dropdown-content");
let clearBtn = $(".btn-clear-canvas");

ctx.lineCap = 'round';
ctx.beginPath();
ctx.lineWidth = 1;

canvas.mousedown(function (e) {

    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    Draw(x, y, e.offsetX, e.offsetY);
});

canvas.mousemove(function (e) {
    if (isDrawing) {
        Draw(x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

canvas.mouseup(function (e) {
    isDrawing = false;
});

canvas.mouseleave(function (e) {  // Won't draw when reentering the canvas if u hold click
    isDrawing = false;
});

function Draw(x, y, x1, y1) {
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
};

// COLOR CHANGER //
colorPicker.change(function () {
    ctx.beginPath();
    let color = colorPicker.val();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
});

// ERASER //
btn.click(function (e) {
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.closePath();
});

// DROPDOWN //
dropdown.change(function () {
    let val = this.value;

    ctx.beginPath();
    ctx.lineWidth = val; // 1,3,5,8
    ctx.stroke();
    ctx.closePath();
});

// CLEAR BUTTON //
clearBtn.click(function () {
    let sizeWidth = ctx.canvas.clientWidth;
    let sizeHeight = ctx.canvas.clientHeight;
    ctx.beginPath();
    ctx.clearRect(0, 0, sizeWidth, sizeHeight);
});