// main
window.onload = function() {
  var button = document.getElementById("submit_button");
  var terminal = document.getElementById("terminal");
  var ctx = document.getElementById("canvas").getContext("2d");
  var TreeRoot = new TreeNode;

  button.onclick = function() {
    var userInput = document.getElementById("user_input").value;
    var parsedCode = codeParser(userInput);

    terminal.className = "animate_pop_away";
    setTimeout(function(){ triggerSidebar(parsedCode) }, 1200);
  };
}

function triggerSidebar(code) {
  createNode("div", //element
             document.body, //parent
             "code_text animate_show_sidebar", //class
             "sidebar", //id
             code //text node
  );  
}

function codeParser(codeInput) {
  var charCount = codeInput.length;
  var buffer = new Array();
  var currentPos = 0;
  var codeOutput = createNode("pre");

  for (i = 0; i < charCount; i++) {
    // encounter delimiter?
    if (codeObj.general.delim.indexOf(codeInput[i]) != -1) {
      var codeWord = buffer.join("");
      var codeWordNode = document.createTextNode(codeWord + codeInput[i]);

      if (codeInput[i] == "("
          && codeObj.C.logic.indexOf(codeWord) == -1
          && codeObj.general.delim.indexOf(codeWord) == -1) {

        var Node = new TreeNode;
        Node.Name = codeWord;
        Node.X = 200;
        Node.Y = 200;
        Node.Width = 300;
        Node.Height = 100;
        Node.Value = "yay";
        Node.Parent = TreeRoot;
        console.log(Node);
      } 
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

function TreeNode() {
  this.Name = null;
  this.Value = null;

  this.X = 0;
  this.Y = 0;
  this.Width = 0;
  this.Height = 0;

  this.Parent = null;
  this.Child = new Array();
  this.Sibling = new Array();
}  


