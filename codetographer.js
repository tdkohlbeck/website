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
  var sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  var code = document.createTextNode(userInput);
  var elementPre = document.createElement("pre");

  sidebar.appendChild(elementPre).appendChild(code);
  document.body.appendChild(sidebar);
  sidebar.className = "code_text animate_show_sidebar";
}

// run through code, apply syntax highlighting, and generate data structure
function codeParser(userInput) {
  var charCount = userInput.length;
  var preBuffer = new Array();
  var postBuffer = new Array();
  var resetLength = 0;
  var blockCount = 0;

  // iterate over code, storing temp strings before and after index position
  for (i=0; i < charCount; i++) {
    preBuffer[i-resetLength] = userInput[i];
    postBuffer[0] = userInput[i+1];

    console.log(i + ": \"" + userInput[i] + "\"");
    console.log("pre: \"" + preBuffer + "\"");
    console.log("post: \"" + postBuffer + "\"");
    
    if (userInput[i] == "\n") {
      preBuffer.pop();
    }

    // if post encounters the end of a word, determine prior word
    if (userInput[i] == " ") {
      if (preBuffer.join("") == "int ") {
        console.log("yay");
      }
      preBuffer.length = 0;
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
  } 
  return userInput;
}

