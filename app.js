const body = document.querySelector("body");
const change = document.querySelector(".change");
const reset = document.querySelector(".reset");
const changeDeg = document.querySelector(".deg");
const colorSpan = document.querySelector(".color");
const copy = document.querySelector("#copy");

change.addEventListener("click", () => {
    body.style.background = `${colorize()}`;
    colorSpan.textContent = `${colorize()}`;
    copy.innerText = "Copy"
});

changeDeg.addEventListener("click", () => {
    body.style.background = `${colorDegree()}`;
    colorSpan.textContent = `${colorDegree()}`;
    copy.innerText = "Copy"
});

reset.addEventListener("click", () => {
    body.style.background = white();
    copy.innerText = "Copy"
});

copy.addEventListener("click", () => {
    window.navigator.clipboard.writeText(colorSpan.innerText);
    copy.innerText = "Copied!"
});



const white = function() {
    colorSpan.textContent = "";

    return "#fff"
};



const colorize = function() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let r2 = Math.floor(Math.random() * 255) + 1;
    let g2 = Math.floor(Math.random() * 255) + 1;
    let b2 = Math.floor(Math.random() * 255) + 1;
    let deg = Math.floor(Math.random() * 360) + 1;
    let a2 = Math.round((Math.random() * 1) * 100) / 100;
    let a = Math.round((Math.random() * 1) * 100) / 100;


    return `linear-gradient(${deg}deg, rgba(${r}, ${g}, ${b}, ${a}), rgba(${r2},${g2},${b2},${a2}))`

};


const colorDegree = function() {
    //colors
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let r2 = Math.floor(Math.random() * 255) + 1;
    let g2 = Math.floor(Math.random() * 255) + 1;
    let b2 = Math.floor(Math.random() * 255) + 1;
    //degrees
    let deg = Math.floor(Math.random() * 360) + 1;
    let deg2 = Math.floor(Math.random() * 50) + 1;
    let deg3 = Math.floor(Math.random() * 100) + 50;
    //opacity
    let a2 = Math.round((Math.random() * 1) * 100) / 100;
    let a = Math.round((Math.random() * 1) * 100) / 100;

    if (deg2 < 50 && deg2 > 0) {
        deg3 = 100 - deg2;

    }



    return `linear-gradient(${deg}deg, rgba(${r}, ${g}, ${b}, ${a})${deg2}%, rgba(${r2},${g2},${b2},${a2})${deg3}%)`

};