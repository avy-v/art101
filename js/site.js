// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
//function myFunction(param1, param2) {
  // some code here
  // return results;
//}

//function main() {
  //console.log("Main function started.");
  // the code that makes everything happen
//}

// let's get this party started
//main();

//canvas setup 1

function canvas() {
    position: fixed;
    top: 0;
    left: 0;
}

//canvas setp 2

setupCanvas();
window.addEventListener("resize", setupCanvas);

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//canvas setup 3

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

//animation loop

const p = {x: 0, y: 0}; // coordinate to draw

update(0);

function update(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // copy cursor position
    p.x = poiner.x;
    p.y = poiner.y;
    // draw a dot
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fill();

    window.requestAnimationFrame(update);
}

//adding delay

params = {
    // ...
    spring: .4
};
// p.x = poiner.x;
// p.y = poiner.y;
p.x += (pointer.x - p.x) * params.spring;
p.y += (pointer.y - p.y) * params.spring;

ctx.beginPath();
ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
ctx.fill();

//create mouse trail 1

params = {
    // ...
    spring: .4,
    pointsNumber: 30
};

// const p = {x: 0, y: 0};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: poiner.x,
        y: poiner.y,
        dx: 0,
        dy: 0,
    }
}

//create mouse trail 2

function update(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;

        p.dx = (prev.x - p.x) * spring;
        p.dy = (prev.y - p.y) * spring;

        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });

    window.requestAnimationFrame(update);
}

//turning the dots to the trail line


trail.forEach((p, pIdx) => {
    const prev = pIdx === 0 ? pointer : trail[pIdx - 1];

    p.dx = (prev.x - p.x) * params.spring;
    p.dy = (prev.y - p.y) * params.spring;

    p.x += p.dx;
    p.y += p.dy;

    // ctx.beginPath();
    // ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    // ctx.fill();

    if (pIdx === 0) {
        // start the line on the first point
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
    } else {
        // continue with new line segment to the following one
        ctx.lineTo(p.x, p.y);
    }
});
// draw the thing
ctx.stroke();

//accumulating the speed

params = {
    // ...
    spring: .4,
    pointsNumber: 30,
    friction: .5
};


// ...

// p.dx = (prev.x - p.x) * spring;
// p.dy = (prev.y - p.y) * spring;
p.dx += (prev.x - p.x) * spring;
p.dy += (prev.y - p.y) * spring;
p.dx *= params.friction;
p.dy *= params.friction;

// as before
p.x += p.dx;
p.y += p.dy;

// ...

//smoothing the line

trail.forEach((p, pIdx) => {
    // calc p.x and p.y

    if (pIdx === 0) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
    // } else {
    //     ctx.lineTo(p.x, p.y);
    }
});

for (let i = 1; i < trail.length - 1; i++) {
    const xc = .5 * (trail[i].x + trail[i + 1].x);
    const yc = .5 * (trail[i].y + trail[i + 1].y);
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
}

ctx.stroke();

//adding width/line weight

params = {
    spring: .4,
    pointsNumber: 30,
    friction: .5,
    baseWidth: .9,
};
 

for (let i = 1; i < trail.length - 1; i++) {
    // ...
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
    ctx.lineWidth = params.baseWidth * (params.pointsNumber - i);
}

//change line color

function update(t) {

    ctx.strokeStyle = "white";

    // the rest of the drawing loop

}