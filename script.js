const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const list = document.querySelector(".list");
const searchBtn = document.querySelector(".search-btn");

function fetchGifs(handleSearch) {
  const API_KEY = "1I30QlcjptfbMRUOGz34S0hmWF30aT7N";
  const count = 50;
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${count}&q=${handleSearch}`;

  list.innerHTML = "";

  const fetchingUrl = fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP failed ${res.status}`);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      // console.log(data);
      let totalData = data.data;
      totalData.forEach((gif) => {
        let div = document.createElement("div");
        div.className = "item";

        let img = document.createElement("img");
        img.classList.add("item-img");
        img.src = gif.images.fixed_height.url;

        div.appendChild(img);
        list.appendChild(div);
      });
    })
    .catch((error) => console.error("Error:", error));
}

function handleSearch() {
  const searchElement = searchInput.value.trim();
  if (searchElement) {
    fetchGifs(searchElement);
  } else {
    console.log("Введите запрос для поиска");
  }
}

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", () => {
  handleSearch();
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
