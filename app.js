let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let colorPicker = document.querySelector("#cp");
let btn = document.querySelector(".btn");
let dropdown = document.querySelector("#dropdown-content");
let clearBtn = document.querySelector(".btn-clear-canvas");
let saveImage = document.querySelector("#saveImage");
let btnSaveImage = document.querySelector("#btnSaveImage");
let isDrawing = false;

ctx.lineCap = 'round';
ctx.beginPath();
ctx.lineWidth = 1;

canvas.addEventListener("mousedown", function (e) {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    Draw(x, y, e.offsetX, e.offsetY);
})

canvas.addEventListener("mousemove", function (e) {
    if (isDrawing) {
        Draw(x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
})

canvas.addEventListener("mouseup", function () {
    isDrawing = false;
})

canvas.addEventListener("mouseleave", function () {
    isDrawing = false;
})

// DRAW THE LINES //
function Draw(x, y, x1, y1) {
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
};

// COLOR CHANGER //
colorPicker.addEventListener("change", function (e) {
    ctx.beginPath();
    let color = colorPicker.value;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
})

// ERASER //
btn.addEventListener("click", function (e) {
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.closePath();
})

// DROPDOWN //
dropdown.addEventListener("change", function (e) {
    let val = this.value;
    ctx.beginPath();
    ctx.lineWidth = val; // 1,3,5,8
    ctx.stroke();
    ctx.closePath();
})

// CLEAR BUTTON //
clearBtn.addEventListener("click", function (e) {
    let sizeWidth = ctx.canvas.clientWidth;
    let sizeHeight = ctx.canvas.clientHeight;
    ctx.beginPath();
    ctx.clearRect(0, 0, sizeWidth, sizeHeight);
})

// SAVE THE IMAGE //
function saveImg() {
    html2canvas(document.getElementById("canvas"))
        .then(function (image) {

            let link = document.getElementById('link');
            link.setAttribute('download', 'image.png');                              // quality of the image can be 0-1 too
            link.setAttribute('href', image.toDataURL("image/png").replace("image/png", "image/octet-stream"));
            link.click();

        });
}

/* JQUERY */

// let canvas = $("#canvas");
// let ctx = canvas[0].getContext("2d");
// let colorPicker = $("#cp");
// let isDrawing = false;
// let btn = $(".btn");
// let dropdown = $("#dropdown-content");
// let clearBtn = $(".btn-clear-canvas");
// let btnSaveImage = $("#btnSaveImage");

// canvas.mousedown(function (e) {

//     x = e.offsetX;
//     y = e.offsetY;
//     isDrawing = true;
//     Draw(x, y, e.offsetX, e.offsetY);
// });

// canvas.mousemove(function (e) {
//     if (isDrawing) {
//         Draw(x, y, e.offsetX, e.offsetY);
//         x = e.offsetX;
//         y = e.offsetY;
//     }
// });

// canvas.mouseup(function (e) {
//     isDrawing = false;
// });

// canvas.mouseleave(function (e) {  // Won't draw when reentering the canvas if u hold click
//     isDrawing = false;
// });

// function Draw(x, y, x1, y1) {
//     ctx.moveTo(x, y);
//     ctx.lineTo(x1, y1);
//     ctx.stroke();
// };

// // COLOR CHANGER //
// colorPicker.change(function () {
//     ctx.beginPath();
//     let color = colorPicker.val();
//     ctx.strokeStyle = color;
//     ctx.stroke();
//     ctx.closePath();
// });

// // ERASER //
// btn.click(function (e) {
//     ctx.beginPath();
//     ctx.strokeStyle = "#ffffff";
//     ctx.stroke();
//     ctx.closePath();
// });

// // DROPDOWN //
// dropdown.change(function () {
//     let val = this.value;

//     ctx.beginPath();
//     ctx.lineWidth = val; // 1,3,5,8
//     ctx.stroke();
//     ctx.closePath();
// });

// // CLEAR BUTTON //
// clearBtn.click(function () {
//     let sizeWidth = ctx.canvas.clientWidth;
//     let sizeHeight = ctx.canvas.clientHeight;
//     ctx.beginPath();
//     ctx.clearRect(0, 0, sizeWidth, sizeHeight);
// });

