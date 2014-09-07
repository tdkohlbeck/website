// main
window.onload = function() {
  var button = document.getElementById("submit_button");
  var terminal = document.getElementById("terminal");

  button.onclick = function() {
    var userInput = document.getElementById("user_input").value;
    var userInputParsed = codeParser(userInput);

    terminal.className = "animate_pop_away";
    //wait duration of pop_away then create and load sidebar
    setTimeout(function(){ sidebarCreateAndLoad(userInputParsed) }, 1200);
  };
  

}

// create and load sidebar
function sidebarCreateAndLoad(userInput) {
  var sidebar = document.createElement("pre");
  sidebar.id = "sidebar";

//  var code = document.createTextNode(userInput);
//  var elementPre = document.createElement("pre");

//  sidebar.appendChild(elementPre).appendChild(code);
  sidebar.appendChild(userInput);
  document.body.appendChild(sidebar);
  sidebar.className = "code_text animate_show_sidebar";
}

// run through code, apply syntax highlighting, and generate data structure
function codeParser(userInput) {
  var charCount = userInput.length;
  var buffer = new Array();
  var resetLength = 0;
  var blockCount = 0;
  var codeOutput = document.createElement("div");

  // iterate over code, storing temp strings before and after index position
  for (i = 0; i < charCount; i++) {

    console.log(i + ": \"" + userInput[i] + "\"");
    console.log("buffer: \"" + buffer + "\"");
    
//    if (userInput[i] == "\n") {
//      buffer.pop();
//    }

    // if post encounters the end of a word, determine prior word
    if (userInput[i] == " " || userInput[i] == "\n") {
      if (buffer.join("") == "int") {
        console.log("yay");
        var code = document.createTextNode("int" + userInput[i]);
        varSyntaxHL = document.createElement("span");
        varSyntaxHL.appendChild(code);
        varSyntaxHL.className = "code_syntax_var";
        codeOutput.appendChild(varSyntaxHL);
      } else {
        var code = document.createTextNode(buffer.join("") + userInput[i]);
        codeOutput.appendChild(code);
      }
      buffer.length = 0;
      resetLength = i+1;
      console.log("resetLength: " + resetLength);
    }

    if (userInput[i] == "{") {
      blockCount += 1;
      var codeBlock = document.createElement("div");
      codeBlockCurrentId = "test_block" + blockCount;
      codeBlock.id = codeBlockCurrentId;
      if (blockCount == 1) {
        document.body.appendChild(codeBlock);
      } else {
        document.getElementById("test_block1").appendChild(codeBlock);
      }
    }
    buffer[i-resetLength] = userInput[i];
  } 
  return codeOutput;
}

