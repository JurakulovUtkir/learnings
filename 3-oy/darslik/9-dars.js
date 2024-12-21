// event and event listeners
// keyup =>  keyboard events when a key is pressed
// keydown => mouse events when a key is is pressing
// keypress => mouse events when a key is is pressed // deprecated

import axios from "../../node_modules/axios/dist/esm/axios.js";

// change event and event listeners
// const task_button = document.getElementById("task");

// task_button.addEventListener("submit", function (e) {
//   e.preventDefault(); // prevent form from submitting
//   const task = this.name.value;
//   console.log(task);

//   const task_list = document.getElementById("task-list");
//   task_list.insertAdjacentHTML(
//     "beforeend",
//     `
//       <li>
//              <span>${task} at ${new Date().toLocaleDateTimeString()}</span>
//         </li>
//     `
//   );
//   this.reset();
// });

axios;

const countriesByRegion = async function (region) {
  const response = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );
  const data = await response.data;
  console.log(data);

  const country_list = data
    .map((country) => {
      return `<li>${country.name.common} ${country.flag}</li>`;
    })
    .join("");

  document.getElementById("country-list").innerHTML = country_list;
};

countriesByRegion("asia");
