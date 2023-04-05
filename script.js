// The following 9 lines of code were adapted from https://www.youtube.com/watch?v=-pRg_daFjfk&t=2s&ab_channel=CodeDuck
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputContainer');

addToDoButton.addEventListener('click', function createElement(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; //clears the input
    saveData();

    //Button remove
    const button = document.createElement("button");
    button.style = "background-color: #ffffff;";
    button.innerText = "🗑️";
    toDoContainer.appendChild(button);

    // Function onclick for button remove
    button.addEventListener("click", function removeElement(){
      toDoContainer.removeChild(paragraph);
      saveData();
      });

    //Button check
    const buttonDone = document.createElement("button");
    buttonDone.style = "background-color: #ffffff;";
    buttonDone.innerText = "✔";
    toDoContainer.appendChild(buttonDone);
    
    //Function onclick for button check
    buttonDone.addEventListener("click", function doneElement(){
      paragraph.style.textDecoration = "line-through";
      saveData();
      });

    //Button uncheck
    const buttonUncheck = document.createElement("button");
    buttonUncheck.style = "background-color: #ffffff;";
    buttonUncheck.innerText = "❎";
    toDoContainer.appendChild(buttonUncheck);

    //Function onclick for button uncheck
    buttonUncheck.addEventListener("click", function uncheckElement(){
    paragraph.style.textDecoration = "";
    saveData();
    });

    paragraph.appendChild(button);
    paragraph.appendChild(buttonDone);
    paragraph.appendChild(buttonUncheck);

    toDoContainer.appendChild(paragraph);
    saveData();
 })

 function saveData(){
  localStorage.setItem("data", toDoContainer.innerHTML);
  localStorage.setItem("button", toDoContainer.innerHTML);
 }
   
 function showTask(){
  toDoContainer.innerHTML = localStorage.getItem("data");
 }

 showTask();


 
