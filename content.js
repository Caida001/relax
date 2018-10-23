
let filenames = [
  "adventure-climb-cold-1518056.jpg",
  "beach-blue-clear-1179156.jpg",
  "clouds-high-lake-1118866.jpg"
];

let imgs = document.getElementsByTagName('img');

for(el of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'pics/' + filenames[r];
  let url = chrome.extension.getURL(file);
  el.src = url;
  console.log(url);
}
