//Dom selectors
const entryInput = document.getElementById("entry");
const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const pickButton = document.getElementById("pick");
const listElement = document.getElementById("list");
const notice = document.querySelector(".notice");
const emptyListText = document.querySelector("#empty-list-text");

let library = [];
let hideMessageTimeout;

//Event listener to th addButton
addButton.addEventListener("click", function () {
  const newEntry = entryInput.value.trim();
  if (newEntry === "") {
    logMessage("No value was entered");
    return;
  }
  library.push(newEntry);
  entryInput.value = "";
  logMessage("Book added");
  displayLibrary();
});

function logMessage(message, isVisible = false) {
  if (hideMessageTimeout) {
    clearTimeout(hideMessageTimeout);
  }
  notice.textContent = message;
  notice.classList.add("show");
  if (!isVisible) {
    hideMessageTimeout = setTimeout(() => {
      notice.style.opacity = 0;
      setTimeout(() => {
        notice.style.display = "none";
      }, 500);
    }, 5000);
  }
}

function displayLibrary() {
  listElement.innerHTML = "";
  if (library.length !== 0) {
    emptyListText.style.display = "none";
  } else {
    emptyListText.style.display = "block";
  }
  for (const lib of library) {
    const listItem = document.createElement("li");
    listItem.textContent = lib;
    listElement.appendChild(listItem);
  }
}

// Event Listener to remove an item from the library
removeButton.addEventListener("click", function () {
  let itemToRemove = entryInput.value.trim();
  const itemIndex = library.indexOf(itemToRemove);
  if (library.length === 0) {
    logMessage("The list is empty. There is nothing to remove.");
    return;
  }
  if (itemIndex === -1) {
    if (itemToRemove === "") {
      logMessage("Empty field, Please enter a book in your library to delete.");
      return;
    } else {
      logMessage(`The item "${itemToRemove}" does not exist in the library.`);
      return;
    }
  }
  library.splice(itemIndex, 1);
  entryInput.value = "";
  logMessage(`"${itemToRemove}" has been removed from the library.`);
  displayLibrary();
});

pickButton.addEventListener("click", function () {
  if (library.length === 0) {
    logMessage("The library is empty, nothing to pick at random");
    return;
  }
  const randomIndex = Math.floor(Math.random() * library.length);
  const pickedItem = library[randomIndex];
  logMessage(`${pickedItem}`, true);
});
