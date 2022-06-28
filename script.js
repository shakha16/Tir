let start = document.querySelector('.start')
let main = document.querySelector('main')
let inp = document.querySelector('input')
let text1 = document.querySelector('.text1')
let text = document.querySelector('.text')
let text2 = document.querySelector('.text2')
let llose = document.querySelector('.llose')
let again = document.querySelector('.again')
start.onclick = () => {
    main.style.display = "inline"
    start.style.display = "none"
}
document.onkeydown = (evt) => {
    evt = evt || window.event;
    if(evt.keyCode === 13 && inp.value === "Дверь"){
        text1.style.display = "none"
        text2.style.display = "inline"
    } else if(evt.keyCode === 13){
        text1.style.display = "none"
        text2.style.display = "none"
        llose.style.display = "inline"
    }
}
again.onclick = () => {
    text1.style.display = "inline"
    llose.style.display = "none"
}