let items = ["👊", "✋", "✌"];

let stageEl = document.getElementById("stage");
function play() {
  let randomIndexOne = Math.floor(Math.random() * items.length);
  let randomIndexTwo = Math.floor(Math.random() * items.length);
  stageEl.textContent = items[randomIndexOne] + "vs" + items[randomIndexTwo];
}
