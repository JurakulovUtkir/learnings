/*

Massivni qabul qiladigan funksiya yozing, bu funksiya ularning kvadratlarining yig'indisini qaytaradi, map va reducedan foydalaning.

Bir massivni qabul qilib, faqat unikal qiymatlardan iborat yangi massiv qaytaradigan funksiya yozing, setdan foydalaning Bir massivni gabul qilib, faqat unikal qiymatlardan iborat yangi massiv qaytaradigan funksiya yozing, setdan foydalanmang!.

Stringni qabul qilib, uning har bir belgisini sanaydigan funksiya yozing.

Ikki set kesishmasini hisoblaydigan va umumiy elementlardan iborat yangi set qaytaradigan funksiya yozing.

Higher-order funksiyalar orqali arraylar uchun eng oddiy metodlarni qayta yozish, masalan, reduce yoki mapdan foydalanish.

Foydalanuvchining tug'ilgan sanasi kiritilganida keyingi tug'ilgan kunigacha necha oy va necha kun qolganligini aniqlab beruvchi dastur tuzing

*/

// sum of 2nd degrees of elements in array
// function secondDegrees(arr) {
//   return arr.map((num) => num * num);
// }

// // sum of array
// function sumArray(arr) {
//   return arr.reduce((prev, next) => prev + next);
// }
// const array = [1, 2, 3, 4];
// console.log(secondDegrees(array));
// console.log(sumArray(array));

// const array = [1, 2, 3, 4, 5, 23, 21, 4];

// // unique array
// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

// console.log(uniqueArray(array));

// function countChars(str) {
//   return str.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
// }

// const string = "Hello, world!";
// console.log(countChars(string));

// get 2 sets and return universal array
// function getUniversalArray(set1, set2) {
//   return [...set1].filter((item) => set2.has(item));
// }

// const set1 = new Set([1, 2, 3, 4, 5]);
// const set2 = new Set([4, 5, 6, 7, 8]);

// console.log(getUniversalArray(set1, set2));

// find days count to next birthday
// function countToNextBirthday(day , month)
