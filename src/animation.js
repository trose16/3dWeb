// const sis = (greeting) => {
//   return `${greeting}, sis`
// }
//
// export { sis }

let overlay = document.getElementById("overlay");

exports.on = () => {
    overlay.style.display = "block"
    overlay.style.opacity = "1";
    overlay.style.zIndex = '2'
}

exports.off = () => {
    // overlay.style.display = "hidden";
    overlay.style.opacity = "0";
    overlay.style.zIndex = '-1'
}
