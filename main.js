let flightHandlerFunction = () => {
  document.getElementById("flight").classList.remove("disabled")
  document.getElementById("flight").classList.add("enabled")}



let mindReaderFunction = () => {
  let mind = document.getElementById("mindreading");
  mind.classList.remove("disabled");
  mind.classList.add("enabled");
}

let xrayFunction = () => {
  let xray = document.getElementById("xray");
  xray.classList.remove("disabled");
  xray.classList.add("enabled");
}

document.querySelector("#activate-mindreading").addEventListener( 'click', mindReaderFunction)
document.querySelector("#activate-xray").addEventListener('click', xrayFunction);

document.querySelector("#activate-flight").addEventListener('click', flightHandlerFunction)

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