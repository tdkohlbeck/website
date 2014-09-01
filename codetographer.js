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
  sidebar.id = "sidebar";

  var userInput = document.getElementById("user_input").value;
  var code = document.createTextNode(userInput);
  var elementPre = document.createElement("pre");

  sidebar.appendChild(elementPre).appendChild(code);
  document.body.appendChild(sidebar);
  sidebar.className = "code_text animate_show_sidebar";
}

// TODO: get code ready for parsing
function cleanForParser() {
  var cleanCode = document.getElementById("user_input").value;
  cleanCode = cleanCode.replace(" ", "");
  console.log(cleanCode);
}
