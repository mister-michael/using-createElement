// const targetContainer = document.querySelector("#messages");

// const section1 = document.createElement('section');
// section1.className = "message"
// section1.textContent = "Hi"

// const section2 = document.createElement('section');
// section2.className = "message"
// section2.textContent = "Sup"

// const section3 = document.createElement('section');
// section3.className = "message"
// section3.textContent = "Nothin"

// const section4 = document.createElement('section');
// section4.className = "message"
// section4.textContent = "Huh?"

// const section5 = document.createElement('section');
// section5.className = "message"
// section5.textContent = "Nothin's up"

// targetContainer.appendChild(section1);
// targetContainer.appendChild(section2);
// targetContainer.appendChild(section3);
// targetContainer.appendChild(section4);
// targetContainer.appendChild(section5);

// console.log(createContainer);

const fragment = document.createDocumentFragment()

const message1 = document.createElement('section')
message1.textContent = "Hi";
fragment.appendChild(message1);

const message2 = document.createElement('section')
message2.textContent = "Sup";
fragment.appendChild(message2);

const message3 = document.createElement('section')
message3.textContent = "Nothin";
fragment.appendChild(message3);

const message4 = document.createElement('section')
message4.textContent = "huh?";
fragment.appendChild(message4);

const message5 = document.createElement('section')
message5.textContent = "Nothin's up";
fragment.appendChild(message5);

document.querySelector("#messages").appendChild(fragment)


