console.log("loaded");

let rootElement = document.querySelector("#root");
//console.log(rootElement);

//let htmlContent = "<h2>Hello world, my name is Pali</h2>";

//rootElement.insertAdjacentHTML("beforeend", htmlContent);

/* let counter = 0;

while (counter < 3) {
  rootElement.insertAdjacentHTML("beforeend", htmlContent);
  counter++;
} */

/* let array = ["alma", "korte", "eper", "birs"];

for (let i = 0; i < array.length; i++) {
  rootElement.insertAdjacentHTML("beforeend", `<h2> ${array[i]} </h2>`);
}
 */

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); //itt tudunk a kapott adattal dolgozni

    for (let index = 0; index < data.length; index++) {
      let countryName = data[index].name.common;
      let countryPop = data[index].population;
      let countryArea = data[index].area;

      rootElement.insertAdjacentHTML(
        "beforeend",
        `
      <div class="country">
        <h2> ${countryName} </h2>
        <p> population: ${countryPop} </p>
        <p> area: ${countryArea} km2 </p>
      </div>
      `
      );
    }
  });
