let druek = document.getElementById('press');

druek.addEventListener("click", mach);
document.addEventListener("keydown", warn);

function warn() {
    document.getElementById('hinweis').style.opacity = 1;
}

let arr = ['rgb(247, 0, 255)', 'green', 'rgb(255, 123, 0)', 'rgb(0, 255, 255)']
let i = 0

function mach() {
    document.getElementById('main').style.backgroundColor = arr[i];
    if (i < arr.length - 1) i++;
    else i = 0;
}