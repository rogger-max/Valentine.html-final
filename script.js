// Scroll to next page smoothly
function nextPage(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Play song then scroll
function playAndNext(id) {
  document.getElementById("song").play();
  nextPage(id);
}
