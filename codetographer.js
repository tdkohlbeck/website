window.onload = function() {
  var button = document.getElementById("submit_button");
  var terminal = document.getElementById("terminal");

  button.onclick = function() {
    terminal.className = "animate";
    var sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    document.body.appendChild(sidebar);
  };
}
