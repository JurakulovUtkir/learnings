// /*

// Massivni qabul qiladigan funksiya yozing, bu funksiya ularning kvadratlarining yig'indisini qaytaradi, map va reducedan foydalaning.

// Bir massivni qabul qilib, faqat unikal qiymatlardan iborat yangi massiv qaytaradigan funksiya yozing, setdan foydalaning Bir massivni gabul qilib, faqat unikal qiymatlardan iborat yangi massiv qaytaradigan funksiya yozing, setdan foydalanmang!.

// Stringni qabul qilib, uning har bir belgisini sanaydigan funksiya yozing.

// Ikki set kesishmasini hisoblaydigan va umumiy elementlardan iborat yangi set qaytaradigan funksiya yozing.

// Higher-order funksiyalar orqali arraylar uchun eng oddiy metodlarni qayta yozish, masalan, reduce yoki mapdan foydalanish.

// Foydalanuvchining tug'ilgan sanasi kiritilganida keyingi tug'ilgan kunigacha necha oy va necha kun qolganligini aniqlab beruvchi dastur tuzing

// */

// // sum of 2nd degrees of elements in array
// // function secondDegrees(arr) {
// //   return arr.map((num) => num * num);
// // }

// // // sum of array
// // function sumArray(arr) {
// //   return arr.reduce((prev, next) => prev + next);
// // }
// // const array = [1, 2, 3, 4];
// // console.log(secondDegrees(array));
// // console.log(sumArray(array));

// // const array = [1, 2, 3, 4, 5, 23, 21, 4];

// // // unique array
// // function uniqueArray(arr) {
// //   return [...new Set(arr)];
// // }

// // console.log(uniqueArray(array));

// // function countChars(str) {
// //   return str.split("").reduce((acc, char) => {
// //     acc[char] = (acc[char] || 0) + 1;
// //     return acc;
// //   }, {});
// // }

// // const string = "Hello, world!";
// // console.log(countChars(string));

// // get 2 sets and return universal array
// // function getUniversalArray(set1, set2) {
// //   return [...set1].filter((item) => set2.has(item));
// // }

// // const set1 = new Set([1, 2, 3, 4, 5]);
// // const set2 = new Set([4, 5, 6, 7, 8]);

// // console.log(getUniversalArray(set1, set2));

// // find days count to next birthday
// // function countToNextBirthday(day , month)

// // const result = new Calculator(10)
// // . add (5)
// // • subtract (3)
// // - multiply(4)
// // • divide (2)
// // • getResult() ;
// // console.log(result); |/ 24

// class Calculator {
//   constructor(value = 0) {
//     this.value = value;
//   }

//   add(num) {
//     this.value += num;
//     return this;
//   }

//   subtract(num) {
//     this.value -= num;
//     return this;
//   }

//   multiply(num) {
//     this.value *= num;
//     return this;
//   }

//   divide(num) {
//     if (num === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     this.value /= num;
//     return this.value;
//   }

//   getResult() {
//     return this.value;
//   }

//   static add(a, b) {
//     return new Calculator(a).add(b).getResult();
//   }

//   static subtract(a, b) {
//     return new Calculator(a).subtract(b).getResult();
//   }

//   static multiply(a, b) {
//     return new Calculator(a).multiply(b).getResult();
//   }
// }

// const result = new Calculator(12).add(12, 3).multiply(3).getResult();
// console.log(result); // 30

// console.log("Topshiriqlar 3-dars");

// // Topshiriq.
// // User sinfini yarating
// // xususiyatlar: ism, password, username, email

// class User {
//   constructor(name, password, username, email) {
//     this.name = name;
//     this.password = password;
//     this.username = username;
//     this.email = email;
//   }
// }

// // UserController sinf yaratamiz
// // methodlar: addUser, login
// // login (username, password) qilganda agar foydalanuvchi ma'lumoti topilmasa -> NotFoundException
// // addUser qilganda agar bu foydalanuvchi bo'lsa -> ConflictException (409)

// class UserController {
//   constructor() {
//     this.users = [];
//   }

//   addUser(user) {
//     if (this.users.some((u) => u.username === user.username)) {
//       throw new ConflictException("Bu foydalanuvchi bo'ldi");
//     }
//     this.users.push(user);
//   }

//   login(username, password) {
//     const user = this.users.find(
//       (u) => u.username === username && u.password === password
//     );
//     if (!user) {
//       throw new NotFoundException("Foydalanuvchi ma'lumoti topilmadi");
//     }
//     return user;
//   }
// }

// // Masala
// // Book nomli sinf(class) yarating
// // xususiyatlari: title, description, author, year, price, count

// class Book {
//   constructor(title, description, author, year, price, count) {
//     this.title = title;
//     this.description = description;
//     this.author = author;
//     this.year = year;
//     this.price = price;
//     this.count = count;
//   }
// }

// // BookController nomli sinf(class) yarating
// // metodlari: addBooks, updateBook, deleteBook, getBooks, getSingleBook, searchBooks, getAuthorBooks

// class BookController {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(book);
//   }
//   updateBook(title, updatedBook) {
//     const index = this.books.findIndex((b) => b.title === title);
//     if (index === -1) {
//       throw new NotFoundException("Bu book mavjud emas");
//     }
//     this.books[index] = updatedBook;
//   }

//   deleteBook(title) {
//     const index = this.books.findIndex((b) => b.title === title);
//     if (index === -1) {
//       throw new NotFoundException("Bu book mavjud emas");
//     }
//     this.books.splice(index, 1);
//   }

//   getBooks() {
//     return this.books;
//   }

//   getSingleBook(title) {
//     const book = this.books.find((b) => b.title === title);
//     if (!book) {
//       throw new NotFoundException("Bu book mavjud emas");
//     }
//     return book;
//   }
// }
