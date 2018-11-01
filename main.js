// let flightHandlerFunction = () => {
//   document.getElementById("flight").classList.remove("disabled")
//   document.getElementById("flight").classList.add("enabled")}

// let mindReaderFunction = () => {
//   let mind = document.getElementById("mindreading");
//   mind.classList.remove("disabled");
//   mind.classList.add("enabled");
// }

// let xrayFunction = () => {
//   let xray = document.getElementById("xray");
//   xray.classList.remove("disabled");
//   xray.classList.add("enabled");
// }

// document.querySelector("#activate-mindreading").addEventListener( 'click', mindReaderFunction)
// document.querySelector("#activate-xray").addEventListener('click', xrayFunction);

// document.querySelector("#activate-flight").addEventListener('click', flightHandlerFunction)

// ++++++++++++++Challenge
let allTheButtons = document.querySelectorAll("button");

allTheButtons.forEach(clc => {
clc.addEventListener("click", function () {
  let evta = event.target.id.split("-");
  let runit = (evta) => {
    let val = document.getElementById(`${evta[1]}`);
    val.classList.remove("disabled");
    val.classList.add("enabled");
  }
  runit(evta);
  })})
// +++++++++++++++++++++++++++

let art = document.querySelector("article");

let butbut = `
  <div>
    <button id = "enabler">Enable All</button>
    <button id = "disabler">Disable All</button>
  </div>`

art.innerHTML += butbut;

let alltheButtons = art.querySelectorAll("section");
console.log(alltheButtons);

let enButton = document.getElementById("enabler");
let deButton = document.getElementById("disabler");

enButton.addEventListener("click", function () {
alltheButtons.forEach( each => {
  each.classList.remove("disabled");
  each.classList.add("enabled");
})})
deButton.addEventListener("click", function () {
  alltheButtons.forEach( each => {
    each.classList.remove("enabled");
    each.classList.add("disabled");
  })})