const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

const my_cont = document.querySelector(".my-cont");


for (let i = 0; i < images.length; i++) {
    const img_cont = document.createElement("div");
    img_cont.classList.add(['w-100', 'h-100']);

    img_cont.innerHTML = `
        <img class="w-100 h-100" src="${images[i]}" alt="">
    `
    my_cont.append(img_cont);
}
