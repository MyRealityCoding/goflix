function toggle() {
  var buttons = document.getElementsByClassName('continue-playing');
  console.log(buttons.length);
  if (buttons.length > 0) {
  buttons[0].click();
  }
  setTimeout(toggle, 200);
}

setTimeout(toggle, 200);
