const themeSwith = document.querySelector("#theme");
const body = document.querySelector('body')
console.log(body)

themeSwith.addEventListener("click", () => {
  if (body.classList.contains("initial-theme")) {
    body.classList.remove("initial-theme");
    body.classList.add("second-theme");
  } else if (body.classList.contains("second-theme")) {
    body.classList.remove("second-theme");
    body.classList.add("third-theme");
  } else {
    body.classList.remove("third-theme");
    body.classList.add("initial-theme");
  }
});
