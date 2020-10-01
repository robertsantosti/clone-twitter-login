const body = document.querySelector("body");
const btnTheme = document.querySelector("#btn-theme-switch");

btnTheme.addEventListener("click", event => {
  event.preventDefault();

  if (body.classList.contains("darkmode")) {
    body.classList.remove("darkmode");
    return;
  }

  body.classList.add("darkmode");
});
