const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const box = document.querySelector('.gallery');
let widthTotal = Number(0);
let widthGallery = String(document.defaultView.getComputedStyle(document.querySelector(".carrossel-obras"), null)["max-width"]);
  widthGallery = widthGallery.replace(/px/g, "");
  widthGallery = parseInt(widthGallery);

let currentWidth = 0;
let currentItem = 0;

//Valor do gap entre as imagens

let gap = String(document.defaultView.getComputedStyle(box, null)["gap"]);
  gap = gap.replace(/px/g, "");
  gap = parseInt(gap);

//Função da seta para a direita

function scrollItemsRight(){
  currentItem++;

  items.forEach((item) => item.classList.remove("current"));

  if(currentItem < maxItems){
  currentWidth = (((items[currentItem-1].clientWidth)/2) + (items[currentItem].clientWidth/2) + gap);

  console.log("Current intem width: ", items[currentItem].clientWidth)

  console.log("Current Width: " + currentWidth);

  //deslocamento total
  widthTotal += currentWidth;

  console.log("Width Total: ", widthTotal);
  }
  else if(currentItem = maxItems-1){
    currentItem = 0;
    widthTotal = 0;
  }
  else if(currentItem < 0){
  
  }

  box.style.transform = `translateX(${-widthTotal}px)`

  items[currentItem].classList.add("current");
}

//Função da seta para esquerda

function scrollItemsLeft(){
  
  if(currentItem > 0){
  currentItem--;

  items.forEach((item) => item.classList.remove("current"));

  currentWidth = (((items[currentItem+1].clientWidth)/2) + (items[currentItem].clientWidth/2 + gap));

  widthTotal -= currentWidth;

  box.style.transform = `translateX(${-widthTotal}px)`
  }
  else{
    items.forEach((item) => item.classList.remove("current"));

    currentWidth = 0;

    for(currentItem = 0; currentItem < maxItems-1; currentItem++){
      currentWidth = currentWidth + (((items[currentItem+1].clientWidth)/2) + (items[currentItem].clientWidth/2) + gap);
    }  
    widthTotal = currentWidth;

    currentItem = maxItems-1;

    box.style.transform = `translateX(${-widthTotal}px)`
  }

  items[currentItem].classList.add("current");
}

//Define ações dos botões

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-right");

    if (isLeft) {
      scrollItemsLeft();
    } else {
      scrollItemsRight();
    }

  });
});

//Altura do Header

const navHeight = document.querySelector('header').offsetHeight;

//Altera var CSS

document.documentElement.style.setProperty('--scroll-padding', navHeight + "px");
