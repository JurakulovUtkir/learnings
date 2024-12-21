// nasib bo'lsa bu yerda tasbeh yaratamiz

let quantity = 0;

function getElementById(id) {
  return document.getElementById(id);
}

function updateElement(id, update) {
  const element = getElementById(id);
  if (element) {
    element.innerText = update;
  }
}

const plus_button = getElementById("plus");
plus_button.addEventListener("click", () => {
  quantity++;
  updateElement("count", `Count : ${quantity}`);
});

const minus_button = getElementById("minus");
minus_button.addEventListener("click", () => {
  quantity--;
  if (quantity < 0) {
    quantity = 0;
  }
  updateElement("count", `Count : ${quantity}`);
});

const reset_button = getElementById("reset");
reset_button.addEventListener("click", () => {
  quantity = 0;
  updateElement("count", `Count : ${quantity}`);
});

// changing salom => xayr
const p_button = getElementById("p");
p_button.addEventListener("click", () => {
  updateElement("p", "Xayr");
});

// changing body color to random color
const change_body_color_button = document.createElement("h2");
document.body.appendChild(change_body_color_button);
change_body_color_button.innerText = "Change body color to random color";
change_body_color_button.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
