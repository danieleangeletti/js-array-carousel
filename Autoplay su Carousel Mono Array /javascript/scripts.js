const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

const my_cont = document.querySelector(".my-cont");
const elements_cont = document.querySelector(".elements");

// const previous = document.querySelector(".previous");
// const next = document.querySelector(".next");

for (let i = 0; i < images.length; i++) {
    const img_cont = document.createElement("div");
    img_cont.setAttribute("id", `img${i}`);
    img_cont.classList.add("h-100");

    if (i == 0) {
        img_cont.classList.add("d-block");
    }

    else {
        img_cont.classList.add("d-none");
    }
    
    img_cont.innerHTML = `
        <img class="w-100 h-100" src="${images[i]}" alt="">
    `
    elements_cont.append(img_cont);
}

let counter = 0;

let clock = setInterval(next_foto, 3000);

// FUNCTION

function next_foto() {
    
    immagine = document.getElementById(`img${counter}`);
    immagine.classList.remove("d-block");
    immagine.classList.add("d-none");
    counter++;

    if (counter == images.length) {
        counter = 0;
    }
    
    immagine = document.getElementById(`img${counter}`);
    immagine.classList.remove("d-none");
    immagine.classList.add("d-block");
    
}