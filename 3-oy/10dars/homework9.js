import axios from "../../node_modules/axios/dist/esm/axios.js";

// getting a list of countries
const countries = await axios.get("https://restcountries.com/v3.1/all");
console.log(countries.data);

let showings = countries.data;

function makeHTMLFromArray(array) {
  return array
    .map((country) => {
      return `<li>${country.name.common} ${country.flag} ${
        country.independent ? "🟢" : "🟥"
      }\t\tPupulation : ${country?.population.toLocaleString()}</li>`;
    })
    .join("");
}

const html_to_view = makeHTMLFromArray(showings);

document.getElementById("country-list").innerHTML = html_to_view;

// getting element add keyup listener to element
const typing_element = document.getElementById("input-text");
typing_element.addEventListener("keyup", async (event) => {
  const search_text = event.target.value.toLowerCase();
  showings = countries.data.filter((country) =>
    country.name.common.toLowerCase().includes(search_text)
  );

  const html_to_view = makeHTMLFromArray(showings);

  document.getElementById("country-list").innerHTML = html_to_view;
});

const sortElement = document.getElementById("sort");

let sort = -1;
sortElement.addEventListener("click", (e) => {
  sort *= -1;
  showings.sort((a, b) => sort * a.name.common.localeCompare(b.name.common));

  const html_to_view = makeHTMLFromArray(showings);

  document.getElementById("country-list").innerHTML = html_to_view;
});

const independentElement = document.getElementById("independent");

let independent = -1;
independentElement.addEventListener("click", (e) => {
  independent *= -1;
  showings.sort((a, b) => independent * (a.independent - b.independent));

  const html_to_view = makeHTMLFromArray(showings);

  document.getElementById("country-list").innerHTML = html_to_view;
});

const pupulationElement = document.getElementById("population");

let population = -1;
pupulationElement.addEventListener("click", (e) => {
  population *= -1;
  showings.sort((a, b) => {
    a.population = a.population ? a.population : 0;
    b.population = b.population ? b.population : 0;
    return population * (a.population - b.population);
  });

  const html_to_view = makeHTMLFromArray(showings);

  document.getElementById("country-list").innerHTML = html_to_view;
});

const selection = document.getElementById("selection");
const option_1 = document.createElement("option");
option_1.textContent = "eng";
const option_2 = document.createElement("option");
option_2.textContent = "uzb";
const option_3 = document.createElement("option");
option_3.textContent = "rus";
const option_4 = document.createElement("option");
option_4.textContent = "fra";

selection.add(option_1);
selection.add(option_2);
selection.add(option_3);
selection.add(option_4);

selection.addEventListener("change", (e) => {
  const selected_language = e.target.value;
  showings = countries.data.filter((country) => {
    if (country.languages) {
      const object = country.languages;
      return object.hasOwnProperty(selected_language);
    }
  });
  const html_to_view = makeHTMLFromArray(showings);
  document.getElementById("country-list").innerHTML = html_to_view;
});
