
function ToggleArrow(param) {
  if (param.getAttribute('aria-expanded') == 'true') {

    document.querySelector('.arrow').style.transform = "rotate(-180deg)";
  } else {
    document.querySelector('.arrow').style.transform = "rotate(0deg)";
  }
}