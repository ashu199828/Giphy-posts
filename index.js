var apiKey = "vz6lMSC7pCatfHqjqWFDDFsTvx9Efid9";

document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("search").addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=18&q=`;
    let str = document.getElementById("input").value.trim();
    url = url.concat(str);

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        let output = document.getElementById("output");
        let giphyImages = document.getElementById("giphyImages");

        for (var i = 0; i < content.data.length; i++) {
          data = content.data[i].images.downsized.url;
          id = content.data[i].id;

          var imgString = `<img onclick="grab(id)" id="${data}" src="${data}" alt="">`;
          giphyImages.innerHTML += imgString;
        }
      })

      .catch((err) => {
        console.log(err);
      });
  });
}

let textMsg = document.getElementById("textMsg");
let emoji = document.getElementById("emoji");
var newStr = "&GET analytics->onclick->url";

let grab = (id) => {
  let str = `<img src="${id}" alt="">`;
  emoji.innerHTML += str;
  let outputStr = ` <div id="giphyImages"></div>`;
  output.innerHTML = outputStr;
};

let post = document.getElementById("post");
let postOutput = document.getElementById("postOutput");
let input = document.getElementById("input");

post.addEventListener("click", (e) => {
  e.preventDefault();
  postOutput.innerHTML += textMsg.value + emoji.innerHTML;
  emoji.innerHTML = "";
  textMsg.value = "";
  input.value = "";
});
