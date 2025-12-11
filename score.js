let hscore = 0
let gscore = 0

document.getElementById("hscore-el").textContent = hscore
document.getElementById("gscore-el").textContent = gscore



function add1() {
    hscore = hscore + 1
    document.getElementById("hscore-el").textContent = hscore
}

function add2() {
    hscore = hscore + 2
    document.getElementById("hscore-el").textContent = hscore
}

function add3() {
    hscore = hscore + 3
    document.getElementById("hscore-el").textContent = hscore
}

function reset() {
    hscore = 0
    document.getElementById("hscore-el").textContent = hscore
}

function add11() {
    gscore = gscore + 1
    document.getElementById("gscore-el").textContent = gscore
}

function add22() {
    gscore = gscore + 2
    document.getElementById("gscore-el").textContent = gscore
}

function add33() {
    gscore = gscore + 3
    document.getElementById("gscore-el").textContent = gscore
}

function reset1() {
    gscore = 0
    document.getElementById("gscore-el").textContent = gscore
}