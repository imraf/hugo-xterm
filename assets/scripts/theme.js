// Dark-only theme — no toggle needed.
// Sync body background for overscroll (elastic scrolling on macOS).
function setBodyBackground() {
  const tc = document.querySelector(".theme-container");
  if (tc) {
    const cs = window.getComputedStyle(tc);
    document.body.style.background = cs.background;
  }
}
setBodyBackground();
