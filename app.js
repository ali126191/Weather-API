const btn = document.querySelector("#btn");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
const p = document.querySelector("#paragraph");

btn.addEventListener("click", loadAll());
btn.addEventListener("touch", loadAll());


function loadAll()  {
  const ajax = new XMLHttpRequest();
  const url =
    "http://api.apixu.com/v1//forecast.json?key=e9ca59d54bc34ce882004220192502&q=Calgary";
  ajax.open("GET", url, true);

  ajax.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);

      temp.textContent = data.current.temp_c;
      feelsLike.textContent = data.current.feelslike_c;
      p.textContent = data.current.condition.text;
      // const { icon_url: img, value: joke } = data;

      console.log(this.responseText);
      // result.textContent = joke;
      // imgContainer.src = img;
    }
  };

  ajax.onerror = function () {
    console.log("there was an error");
  };
  ajax.send();
}