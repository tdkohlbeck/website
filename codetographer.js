window.onload = function() {
  var button = document.getElementById("submit_button");
  var terminal = document.getElementById("terminal");

  button.onmouseenter = function() {
    terminal.setAttribute("-webkit-animation", "pop_away");
  };
}
