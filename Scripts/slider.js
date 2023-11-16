const item = document.querySelectorAll(".item-ld");
const itens = item.length;
const width = document.getElementById("item-ld").clientWidth;
const img = document.querySelector('.container');
const displayWidth =  screen.width;

document.documentElement.style.setProperty('--displayWidth', displayWidth, "px")

let atual = 0;

function carrossel(){
    atual++;

    if(atual > itens - 1){
        atual = 0;
    }

    img.style.transform = `translateX(${-atual * width}px)`;

}

setInterval(carrossel, 4000);