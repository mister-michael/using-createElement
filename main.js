const targetContainer = document.querySelector("#messages");

const section1 = document.createElement('section');
section1.className = "message"
section1.textContent = "Hi"

const section2 = document.createElement('section');
section2.className = "message"
section2.textContent = "Sup"

const section3 = document.createElement('section');
section3.className = "message"
section3.textContent = "Nothin"

const section4 = document.createElement('section');
section4.className = "message"
section4.textContent = "Huh?"

const section5 = document.createElement('section');
section5.className = "message"
section5.textContent = "Nothin's up"

targetContainer.appendChild(section1);
targetContainer.appendChild(section2);
targetContainer.appendChild(section3);
targetContainer.appendChild(section4);
targetContainer.appendChild(section5);

// console.log(createContainer);

// // Create an unordered list element
// const list = document.createElement('ul')

// // Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// // Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)


