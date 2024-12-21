fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    const regions = [
      "Antarctic",
      "Americas",
      "Europe",
      "Africa",
      "Asia",
      "Oceania",
    ];

    const countries = [];

    let html_to_view = "";

    for (let i = 0; i < regions.length; i++) {
      const region_countries = data.filter((data) => data.region == regions[i]);
      html_to_view += `
      
      There are ${region_countries.length} countries in ${regions[i]}
      
      `;
      for (const country of region_countries) {
        const one_html =
          country.name?.common + " " + country.flag + `(${country.region})`;
        html_to_view += ` ${one_html}
        `;
      }
    }

    // for (const country of data) {
    //   const one_html =
    //     country.name?.common + " " + country.flag + `(${country.region})`;
    //   html_to_view += ` ${one_html}
    //   `;
    // }

    document.getElementById("countries-list").innerText = html_to_view;
  });

function data_exists(region, regionArray) {
  return regionArray.includes(region);
}
