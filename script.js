const buttonToggleMode = document.querySelector("button")
const body = document.body
const image = document.querySelector("#profile img")

buttonToggleMode.addEventListener("click", toggleMode)

function toggleMode() {
  body.classList.toggle("light")

  if (body.classList.contains("light")) {
    image.setAttribute("src", "./assets/img1.jpg")
  } else {
    image.setAttribute("src", "./assets/img2.jpg")
  }
}
