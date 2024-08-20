const images = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg", "bg_4.jpg", "bg_5.jpg", "bg_6.jpg"];

const bg_img = document.createElement("img");

const selected_img = Math.floor(Math.random() * images.length);

bg_img.src = `img/${images[selected_img]}`;
bg_img.id = "bg_img";

document.body.appendChild(bg_img);
console.log(bg_img);
