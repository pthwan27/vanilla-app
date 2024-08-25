const imagesNum = 4;

const bg_img = document.createElement("img");

const selectedNum = Math.floor(Math.random() * imagesNum);

bg_img.src = `src/img/bg_${selectedNum + 1}.jpg`;
bg_img.id = "bg_img";

document.body.appendChild(bg_img);
