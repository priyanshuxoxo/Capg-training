// console.log("hello");
// console.log(window);
// console.log("hii");
// window.console.log("hii");

// console.log(document);
// console.log(document.body);
// console.log(document.title);
// console.log(document.head);

//? DOM--> Document Object Model (DOM)--> It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// console.log(document.body.childNodes);
// console.log(document.body.children);

//? document.body.childNodes--> it will give all the child nodes of the body tag including text nodes, comment nodes, and element nodes.

//? document.body.children--> it will give only the child elements of the body tag, excluding text nodes and comment nodes.

// console.log(document.body.firstChild);
//? document.body.firstChild--> it will give the first child node of the body tag, which could be a text node, comment node, or element node depending on the structure of the HTML document.
// console.log(document.body.firstElementChild);
//? document.body.firstElementChild--> it will give the first child element of the body tag, which is the first HTML element within the body, excluding any text nodes or comment nodes.
// console.log(document.body.lastChild);
//? document.body.lastChild--> it will give the last child node of the body tag, which could be a text node, comment node, or element node depending on the structure of the HTML document.
// console.log(document.body.lastElementChild);
//? document.body.lastElementChild--> it will give the last child element of the body tag, which is the last HTML element within the body, excluding any text nodes or comment nodes.

// let a = document.getElementById("btn");
// a.addEventListener("click", function () {
//   document.body.appendChild(document.createElement("h1")).innerText = "hii";
// });

// let btn1 = document.body.children[2];
// console.log(btn1);

// console.log(btn1.parentElement);
// console.log(btn1.parentNode);

// console.log(document.body.children[3]);
// let div1 = document.body.children[3];
// let head1 = div1.firstElementChild;
// console.log(head1.previousElementSibling);
// console.log(head1.outerHTML);

//? previousElementSibling--> it will give the previous sibling element of the specified element, excluding any text nodes or comment nodes.

//? outerHTML--> it will give the HTML content of the specified element, including the element itself and its children. It returns a string representation of the entire element, including its opening and closing tags, as well as any nested elements within it.

//? nextElementSibling--> it will give the next sibling element of the specified element, excluding any text nodes or comment nodes.
//? innerHTML--> it will give the HTML content of the specified element, excluding the element itself. It returns a string representation of the content within the element, including any nested elements, but does not include the opening and closing tags of the element itself.

//?previousSibling--> it will give the previous sibling node of the specified element, which could be a text node, comment node, or element node depending on the structure of the HTML document.

//!dom direct methods

let head4 = document.getElementsByClassName("h44");
console.log(head4);

let convertedArray = Array.from(head4);
console.log(convertedArray);

convertedArray.map(function (element) {
  console.log(element);
  element.innerHTML = element.innerHTML.toUpperCase();
  element.style.color = "red";
  element.style.backgroundColor = "yellow";
  element.style.fontSize = "30px";
  element.style.textAlign = "center";
  element.style.fontFamily = "Arial, sans-serif";
});

//!create element

// let img1 = document.createElement("img");
// img1.src = "https://www.w3schools.com/images/w3schools_green.jpg";
// img1.alt = "w3schools logo";
// document.body.appendChild(img1);

// let heading1 = document.createElement("h1");
// heading1.textContent = "welcome to playwright";
// heading1.id = "heading1";
// heading1.removeAttribute("id");
// document.body.appendChild(heading1);
// document.body.removeChild(heading1);

//! Event Listener

let bt = document.getElementById("btn");

// function buttonClicked() {
//   alert("button is clicked");
// }

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let count = document.querySelector(".count");
let counter = 0;
plus.addEventListener("click", () => {
  counter++;
  count.innerText = counter;
});

minus.addEventListener("click", () => {
  // if (counter == 0) {
  //   return;
  // }
  counter--;
  count.innerText = counter;
});

// let bt1 = document.getElementById("btn1");
// bt1.onclick = function buttonClicked2() {
//   alert("button is clicked2");
// };

let sta = true;
bt.addEventListener("click", () => {
  if (sta == false) {
    document.body.style.backgroundColor = "white";
    sta = true;
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    sta = false;
    document.body.style.color = "white";
    let pare = document.querySelector(".parent");
  }
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  counter = 0;
  count.innerText = counter;
});
