// main
window.onload = function() {
  var button = id("submit_button");
  var terminal = id("terminal");

  button.onclick = function() {
    var input = id("user_input").value;
    var parsedCode = parser(input);

    terminal.className = "animate_pop_away";
    setTimeout(
      function() {
        triggerSidebar(parsedCode)
      },
      1200
    );
  };
}

function triggerSidebar(code) {
  createNode(
    "div", //element
    document.body, //parent
    "code_text animate_show_sidebar", //class
    "sidebar" //id
  );  
  id("sidebar").appendChild(code);
}

function parser(codeInput) {
  var charCount = codeInput.length;
  var buffer = new Array();
  var bufferPos = 0;
  var codeOutput = new String();
  var outputNode = createNode("pre");

  for (i = 0; i < charCount; i++) {
    currChar = codeInput[i];

    if (general.delim.contains(currChar)) {
      var codeWord = buffer.join("");
      
      if (C.variable.contains(codeWord)) {
        highlight("var", codeWord, currChar);
      } else if (C.logic.contains(codeWord)) {
        highlight("logic", codeWord, currChar);
      } else if (codeWord.match(/[0-9]/)) {
        highlight("num", codeWord, currChar);
      } else if (codeWord.startsWith('"') &&
                 codeWord.endsWith('"')) {
        highlight("string", codeWord, currChar);
      } else {
        codeOutput += codeWord + currChar; 
      }

      buffer = [];
      bufferPos = 0;
    } else {
      buffer[bufferPos] = currChar;
      bufferPos++;
    }
  } 
  codeOutput = document.createTextNode(codeOutput);
  outputNode.appendChild(codeOutput);
  return outputNode;
  
  // attach, highlight, then clear code text
  function highlight(type, word, character) {
    var codeNode = textNode(codeOutput);
    outputNode.appendChild(codeNode);
    var span = createNode("span");
    span.className = type;
    var word = textNode(word);
    span.appendChild(word);
    outputNode.appendChild(span);
    outputNode.appendChild(textNode(character));
    codeOutput = new String();
  }
}

function createNode(
  element,
  parentNode,
  className,
  id,
  text
) {
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

  
function id(str) {
  return document.getElementById(str);
}

function textNode(str) {
  return document.createTextNode(str);
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
