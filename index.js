let hScoreEl = document.getElementById("home-sc")
let gScoreEl = document.getElementById("guest-sc")

let hScore = 0
let gScore = 0

function hAdd1() {
    hScore = hScore + 1
    hScoreEl.innerText = hScore
}
function hAdd2() {
    hScore = hScore + 2
    hScoreEl.innerText = hScore
}
function hAdd3() {
    hScore = hScore + 3
    hScoreEl.innerText = hScore
}
function gAdd1() {
    gScore = gScore + 1
    gScoreEl.innerText = gScore
}
function gAdd2() {
    gScore = gScore + 2
    gScoreEl.innerText = gScore
}
function gAdd3() {
    gScore = gScore + 3
    gScoreEl.innerText = gScore
}