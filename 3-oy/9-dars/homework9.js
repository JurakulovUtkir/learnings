import axios from "../../node_modules/axios/dist/esm/axios.js";

// getting a list of countries
const countries = await axios.get("https://restcountries.com/v3.1/all");
console.log(countries);

// getting element add keyup listener to element
const typing_element = document.getElementById("input-text");
typing_element.addEventListener("keyup", async (event) => {
  const search_text = event.target.value.toLowerCase();
  const filtered_countries = countries.data.filter((country) =>
    country.name.common.toLowerCase().includes(search_text)
  );

  const html_to_view = filtered_countries
    .map((country) => {
      return `<li>${country.name.common} ${country.flag}</li>`;
    })
    .join("");

  document.getElementById("country-list").innerHTML = html_to_view;
});
