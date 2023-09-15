const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-right");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current");
  });
});

function mascaraDeTelefone(telefone){
  const textoAtual = telefone.value
  const isCelular = textoAtual.length === 11
  const isTelefone = textoAtual.length === 10
  let textoAjustado;
    if(isCelular) {
      const parte1 = textoAtual.slice(0,2);
      const parte2 = textoAtual.slice(2,7);
      const parte3 = textoAtual.slice(7,11);
      textoAjustado = `(${parte1}) ${parte2}-${parte3}`
    } else {
      if(isTelefone) {
        const parte1 = textoAtual.slice(0,2);
        const parte2 = textoAtual.slice(2,6);
        const parte3 = textoAtual.slice(6,10);
        textoAjustado = `(${parte1}) ${parte2}-${parte3}`
      } else {
        telefone.value = "Número Inválido"
      }
    }

  telefone.value = textoAjustado
}

function tiraHifen(telefone) {
  const textoAtual = telefone.value;
  const textoAjustado = textoAtual.replace(/\-/g, '').replace(/\(|\)/g,"").replace(/\s/g, '')

  telefone.value = textoAjustado
}