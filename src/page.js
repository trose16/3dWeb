// const sis = (greeting) => {
//   return `${greeting}, sis`
// }
//
// export { sis }


let overlay = document.getElementById("overlay");
let eggOverlay = document.getElementById("easter-egg");


exports.on = (element) => {
    element.style.display = "block"
    element.style.opacity = "1";
    element.style.zIndex = '2'
}

exports.off = (element) => {
    // element.style.display = "hidden";
    element.style.opacity = "0";
    element.style.zIndex = '-1'
}



exports.onLogo = () => {
    overlay.style.display = "block"
    overlay.style.opacity = "1";
    overlay.style.zIndex = '2'
}

exports.offLogo = () => {
    // overlay.style.display = "hidden";
    overlay.style.opacity = "0";
    overlay.style.zIndex = '-1'
}

exports.onEasterEgg = () => {
    eggOverlay.style.display = "block"
    eggOverlay.style.opacity = "1";
    eggOverlay.style.zIndex = '2'
}

exports.offEasterEgg = () => {
    // eggOverlay.style.display = "hidden";
    eggOverlay.style.opacity = "0";
    eggOverlay.style.zIndex = '-1'
}
