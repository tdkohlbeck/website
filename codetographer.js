// main
window.onload = function() {
  var button = document.getElementById("submit_button");
  var terminal = document.getElementById("terminal");

  button.onclick = function() {
    var userInput = document.getElementById("user_input").value;
    var parsedCode = codeParser(userInput);

    terminal.className = "animate_pop_away";
    //wait duration of pop_away then create and load sidebar
    setTimeout(function(){ triggerSidebar(parsedCode) }, 1200);
  };
  

}

// create and load sidebar
function triggerSidebar(code) {
  createNode("div", //element
             document.body, //parent
             "code_text animate_show_sidebar", //class
             "sidebar", //id
             code //text node
  );  
}

// run through code, apply syntax highlighting, and generate data structure
function codeParser(codeInput) {
  var charCount = codeInput.length;
  var buffer = new Array();
  var currentPos = 0;
  var codeOutput = createNode("pre");

  for (i = 0; i < charCount; i++) {
    // encounter delimiter?
    if (codeObj.general.delimiters.indexOf(codeInput[i]) != -1) {
      var codeWord = buffer.join("");
      var codeWordNode = document.createTextNode(codeWord + codeInput[i]);
      if (codeObj.C.variable.indexOf(codeWord) != -1) {
        createNode("span", codeOutput, "syntax_var", null, codeWordNode);
      } else if (codeObj.C.logic.indexOf(codeWord) != -1) {
        createNode("span", codeOutput, "syntax_logic", null, codeWordNode);
      } else {
        var codeWord = document.createTextNode(codeWord + codeInput[i]);
        codeOutput.appendChild(codeWord);
      }
      buffer.length = 0;
      currentPos = i+1;
    }
    buffer[i-currentPos] = codeInput[i];
  } 
  return codeOutput;
}

function createNode(element, parentNode, className, id, text) {
  var args = arguments.length;
  if (args == 0) {
    console.log("We require more arguments!");
    return -1;
  }
  if (args >= 1) {
    elementNode = document.createElement(element);
    if (args == 1) {
      return elementNode;
    }
  }
  if (args >= 2) {
    elementNode = document.createElement(element);
    parentNode.appendChild(elementNode);
  }
  if (args >= 3) {
    elementNode.className = className;
  }
  if (args >= 4) {
    elementNode.id = id;
  }
  if (args == 5) {
    elementNode.appendChild(text);
  }
  if (args > 5) {
    console.log("Too many arguments!");
    return -1;
  }
  return 0;
} 
