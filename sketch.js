let filenames = [
  "adventure-climb-cold-1518056.jpg",
  "beach-blue-clear-1179156.jpg",
  "clouds-high-lake-1118866.jpg"
];



function setup() {
  noCanvas();
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'pics/' + filenames[r];
  let img = createImg(file);
  img.size(windowWidth, windowHeight);
  img.position(0, 0);

}
