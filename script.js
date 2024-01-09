const searchInput = document.querySelector(".search-input");
const list = document.querySelector(".main-gif__list");

function giphyFetch() {
  const apiKey = "1I30QlcjptfbMRUOGz34S0hmWF30aT7N";
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  const result = fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Fetch error:", error));

  return result.map((result) => {});
}

giphyFetch();

// .searchInput.addEventListener()
