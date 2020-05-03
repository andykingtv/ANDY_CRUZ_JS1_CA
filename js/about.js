const text = document.querySelector(".about");
const newText = text.innerText;

function timeOutText() {
  const fixedText = newText.replace(/the/g, "banana").replace(/The/g, "Banana");
  text.innerText = fixedText;
}

setTimeout(timeOutText, 3000);
