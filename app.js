let canvas = $("#canvas");
let colorPicker = $('#cp');
let ctx = canvas[0].getContext("2d");
let x = 0;
let y = 0;
let isDrawing = false;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.lineCap = 'round';


function color() {
    ctx.beginPath();
    var color = colorPicker.val();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

canvas.mousedown(function (e) {
    x = e.offsetX; // current mouse x coords
    y = e.offsetY; // current mouse y coords
    isDrawing = true;
});

canvas.mousemove(function (e) {

    if (isDrawing) {                     // draw if it's clicked
        Draw(x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

canvas.click(function (e) {

    x = e.offsetX;
    y = e.offsetY;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.mouseup(function (e) {

    isDrawing = false;
    x = 0;
    y = 0;
});

canvas.mouseleave(function (e) {
    isDrawing = false;
});

function Draw(x1, y1, x2, y2) {

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};