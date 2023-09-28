const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const URL = "https://www.thecolorapi.com/random?format=json";
const boton = document.getElementById("btn");
const color = document.getElementById("color");

boton.addEventListener("click", () => {
  const fetchData = async () => {
    try {
      const request = await fetch(URL);
      const response = await request.json();
      let myHex = response.hex.value;
      document.body.style.backgroundColor = myHex;
      color.textContent = myHex;
      console.log(response.hex.value);
    } catch (error) {
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumberHex()];
      }
      color.textContent = hexColor;
      document.body.style.backgroundColor = hexColor;
    }
  };

  fetchData();
});
function getRandomNumberHex() {
  return Math.floor(Math.random() * hex.length);
}
