// main
window.onload = function() {
  var button = document.getElementById("submit_button");
  var terminal = document.getElementById("terminal");

  button.onclick = function() {
    terminal.className = "animate_pop_away";
    //wait duration of pop_away then create and load sidebar
    setTimeout(function(){ sidebarCreateAndLoad() }, 1200);
  };
}

// create and load sidebar
function sidebarCreateAndLoad() {
  var sidebar = document.createElement("div");
  var userInput = document.getElementById("user_input").value;
  code = userInput.replace(/\r?\n/g, '\n');
  var code = document.createTextNode(code);

  sidebar.id = "sidebar";
  sidebar.appendChild(code);
  document.body.appendChild(sidebar);
  sidebar.className = "code_text animate_show_sidebar";
}
