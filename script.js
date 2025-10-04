const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function() {
  const fortunes = ["大吉✨", "中吉😊", "小吉🍀", "凶💦"];
  const random = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[random];
});

