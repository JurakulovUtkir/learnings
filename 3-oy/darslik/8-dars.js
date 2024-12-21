// DOM and DOM Tree
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// 1. Selecting elements:

// const h1_element = document.getElementById("title");
// console.log(h1_element);

// const h1_element = document.querySelector("h1"); // bittasini tanlab beradi
// console.log(h1_element.innerText);

// how to add element to document
// const new_element = document.createElement("h2");
// $("body").appendChild(new_element);
// new_element.innerText = "Hello World";

// // setInterval(() => {
// //   const now = Date.now();
// //   new_element.textContent = "time is now " + now.toLocaleString() + " seconds";
// // }, 1000);

// const element2 = document.createElement("h2");
// element2.textContent = "Element 2";
// $("body").insertBefore(element2, new_element);

// element2.innerHTML =
//   "<a target = '_blank' href = 'https://kun.uz'>Link beriladi bu yerda</a>";

// const createElementWithColor = (element, color) => {
//   const new_element = document.createElement(element);
//   new_element.style.color = color;
//   new_element.textContent = `${element} element rangi : ${color}`;
//   new_element.style.backgroundColor = color;
//   $("body").appendChild(new_element);
// };

// createElementWithColor("h3", "green");
// // getting fields with prompt
// const element_name = prompt("Enter your element name");
// const element_color = prompt("Enter color");
// createElementWithColor(element_name, element_color);
// $(
//   element_name
// ).textContent = `Sizning element : ${element_name}, color: ${element_color}`;

// // elementga class qo'shish
// $("h1").classList.add("hidden", "hidden");

// // elementga class o'chirish
// $("h1").classList.remove("hidden");

// // toggling element : agar bo'lsa o'chiradi bo'lmasa qo'shadi
// $("h1").classList.toggle("hidden");

// // sichqoncha bilan bo'gliq bo'gan elementlar  "click" event(1 marta bosilganda ishlaydi)
// document.getElementById("title").addEventListener("click", (event) => {
//   console.log("Title clicked");
//   const element = document.getElementById("title");
//   element.style.color = element.style.color == "red" ? "black" : "red";
// });

// // double click event
// document.getElementById("title").addEventListener("mousemove", (event) => {
//   document.getElementById("title").style.backgroundColor = "green";
// });

// // elementga attributes qo'shish yoki yangilash
// document.getElementById("title").setAttribute("id", "title");

// console.log(document.getElementById("title").getAttribute("id"));
