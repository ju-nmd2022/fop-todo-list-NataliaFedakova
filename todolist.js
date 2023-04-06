// The following 9 lines of code were adapted from https://www.youtube.com/watch?v=-pRg_daFjfk&t=2s&ab_channel=CodeDuck
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputContainer');

addToDoButton.addEventListener('click', function createElement() {
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = ""; //clears the input

  //Button remove
  const button = document.createElement("button");
  button.style = "background-color: #ffffff;";
  button.innerText = "🗑️";
  toDoContainer.appendChild(button);

  // Function click for button remove
  button.addEventListener("click", function removeElement() {
    toDoContainer.removeChild(paragraph);
    saveToLocalStorage();
  });

  //Button check
  const buttonDone = document.createElement("button");
  buttonDone.style = "background-color: #ffffff;";
  buttonDone.innerText = "✔";
  toDoContainer.appendChild(buttonDone);

  //Function click for button check
  buttonDone.addEventListener("click", function doneElement() {
    paragraph.style.textDecoration = "line-through";
    saveToLocalStorage();
  });

  //Button uncheck
  const buttonUncheck = document.createElement("button");
  buttonUncheck.style = "background-color: #ffffff;";
  buttonUncheck.innerText = "❎";
  toDoContainer.appendChild(buttonUncheck);

  //Function click for button uncheck
  buttonUncheck.addEventListener("click", function uncheckElement() {
    paragraph.style.textDecoration = "";
    saveToLocalStorage();
  });

  paragraph.appendChild(button);
  paragraph.appendChild(buttonDone);
  paragraph.appendChild(buttonUncheck);

  toDoContainer.appendChild(paragraph);

  // Save updated items to local storage
  saveToLocalStorage();
});

// Function to save items to local storage
function saveToLocalStorage() {
  localStorage.setItem("toDoItems", toDoContainer.innerHTML);
}

// Load existing items from local storage
if (localStorage.getItem("toDoItems")) {
  toDoContainer.innerHTML = localStorage.getItem("toDoItems");
  
  // Add event listeners to existing buttons
  let buttons = toDoContainer.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (button.innerText === "🗑️") {
      button.addEventListener("click", function() {
        this.parentElement.remove();
        saveToLocalStorage();
      });
    } else if (button.innerText === "✔") {
      button.addEventListener("click", function() {
        this.parentElement.style.textDecoration = "line-through";
        saveToLocalStorage();
      });
    } else if (button.innerText === "❎") {
      button.addEventListener("click", function() {
        this.parentElement.style.textDecoration = "";
        saveToLocalStorage();
      });
    }
  }
}
