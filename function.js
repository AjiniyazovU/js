// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }

//   const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };

//   console.log(myCar.make); // "Honda"
//   myFunc(myCar);
//   console.log(myCar.make); // "Toyota"

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// function task1(str) {
//     return str.slice(0, 5).length
// }
// console.log(task1( 'Nevis ITDB TECH'));

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// function task2(str) {
//     return str.slice(11)
// }
// console.log(task2('Максимально УЖАСНО'));

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// function task3(str) {
//   return str.slice(0, 11).toUpperCase( );
// }
// console.log(task3("максимально УЖАСНО"));

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// function task6(str) {
//     return str.slice(5)
// }
// console.log(task6('Максимально Ужасно'));

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// function task7(str) {
//     return str.charAt(12)
// } console.log(task7('Максимально Ужасно'));

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// function num(str, str2) {
//     return str + str2
// }console.log(num(str = 'Максимально', str2 = ' Ужасно'));
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// function num(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
// }console.log(num ('макСИМАЛЬНО ужаСНО'));

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// function num(str) {
//     return str[1]
// } console.log(num('Максимально Ужасно'));

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// function num(str) {
//     return  str[17]
// } console.log(num ('Максимально Ужасно' ));

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.

// function num(str) {
//     // return str.slice(4, 7)
//     // return str.substr(4, 3)
//     // return str.substring(4, 7)

// } console.log(num('aaa bbb ccc'));

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// function num(a) {
//         if (a === 10) {
//                return 'Верно'
//             }else{
//                return 'Неверно'
//             }
//         } console.log(num(10));

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// function num(a, b) {
//     if (a > b) {
//         return 'a больше b'
//     }else{
//         return 'a меньше b'
//     }
// }console.log(num(50, 100));

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// function num(a) {
//   if (a > 0) {
//     return 'positive'
//   }  else if  (a === 0) {
//     return'равно'
//   } else{
//     return "negative"
//   }
// } console.log(num(-2));

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
// function num(number) {
//     if (number % 2 ===  0) {
//         return "Четное число"
//     }else{
//         return "Нечетное число"
//     }
// }console.log(num (45));

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// function num(a, b) {
//     if (a % b === 0) {
//         return "Четное число"
//     }else{
//         return"Нечетное число"
//     }

// }console.log(num(10,2));

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function num(s) {
//     return typeof s;
// }
// console.log(num());

// 1. Проверка первой буквы
// Пользователь вводит строку. Нужно проверить, начинается ли
//  строка с буквы "A". Если да — вывести "Строка начинается с A", если
//  нет — "Строка не начинается с A".
// let str = "apple";
// if (str[0] === `a`) {
//   console.log("Строка начинается с A");
// } else {
//   console.log("Строка не начинается с A");
// }

// function strA (num) {
//     if (num[0] === `a`) {
//        return "Строка начинается с A"
//       } else {
//        return "Строка не начинается с A"
//       }
// }
// console.log(strA("apple"));

// 2. Определение длины строки
// Пользователь вводит строку. Нужно вывести длину этой строки.
// let str = "cara";
// console.log(str.length);

// function Aibek (num2) {
//    return num2.length
// }
// console.log(Aibek("cara"));

// 3. Сравнение строк
// Пользователь вводит две строки. Нужно сравнить их. Если строки
//  одинаковые, вывести "Строки равны", если разные — "Строки не равны".
// function cars (car1, car2) {
//     if (car1.length === car2.length) {
//         return 'Строки равны'
//     }else if(car1.length < car2.length){
//         return `404 `
//     }
//     else {
//         return `Строки не равны`
//     }
// }console.log(cars("black", "blue"));

// 4. Проверка последней буквы
// Пользователь вводит строку. Нужно проверить, заканчивается ли
//  строка на букву "Z". Если да — вывести "Строка заканчивается на Z", если нет — "Строка не заканчивается на Z".
// function str(num) {
//   if (num[num.length - 1] == `z`) {
//     return "Строка заканчивается на Z";
//   }
//   return "Строка не заканчивается на Z";
// }

// console.log(str("dogz"));

// 5. Проверка длины строки
// Пользователь вводит строку. Нужно проверить, равна ли длина
// строки 5. Если да — вывести "Длина строки равна 5", если нет — "Длина строки не равна 5".
// function str(cer) {
//   if (cer.length === 5) {
//     return "Длина строки равна 5";
//   } else {
//     return "Длина строки не равна 5";
//   }
// }
// console.log(str("lorem"));

// 6. Проверка наличия пробела
// Пользователь вводит строку. Нужно проверить, содержит ли
//  строка пробел. Если да — вывести "Строка содержит пробел", если нет — "Пробелов нет".
// function str(num) {
//   if (num.includes(" ")) {
//     return "Строка содержит пробел";
//   }else {
//     return "Пробелов нет"
//   }
// }
// console.log(str("blakc "));

// 7. Удаление последнего символа
// Пользователь вводит строку. Нужно удалить последний символ строки и вывести результат.
// function str(num) {
//   let str = num.slice(0, num.length -1)
//     return str
//   }

// console.log(str("ig"));

// 8. Проверка пароля
// Пользователь вводит пароль. Если пароль равен "admin123",
//  вывести сообщение "Доступ разрешен", иначе — "Неверный пароль".
// let password = "admin123"
// function num(password = "admin123" ) {
//     if (password === "admin123") {
//         return "Доступ разрешен"
//     }else{
//         return "Неверный пароль"
//     }

// let log = prompt("name");

// let pass = "";
// if (log === "admin") {
//   pass = prompt("password");
//   pass == 123 ? console.log("true") : console.log("неверно");
// } else {
//   console.log("Неверный логин");
// }

// aaaaaaaaaaaaaaaaaa

// 1. Проверка числа на четность
// Задача: Напишите функцию, которая принимает число и возвращает, является ли оно четным,
// используя тернарный оператор.
// function task1(num) {
//     return num % 2 === 0 ? num : false
// }
// console.log(task1(21));

// 2.Сравнение двух чисел
// Задача: Напишите функцию, которая принимает два числа и возвращает большее из них с помощью
// тернарного оператора.
// function str(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }
// console.log(str(30, 90));
// 3.Проверка длины строки
// Задача: Напишите функцию, которая принимает строку и проверяет, длиннее ли она 5 символов,
// используя тернарный оператор.
// function str(num) {
//   return num.length > 5 ? num : 5;
// }
// console.log(str("black"));

// 4.Возвращение положительного числа
// Задача: Напишите функцию, которая принимает число и возвращает его, если оно положительное,
// иначе возвращает 0.
// function str(num) {
//   return num > 0 ? "положительное" : false
// }console.log(str(4));

// 5.Проверка возраста на совершеннолетие
// Задача: Напишите функцию, которая принимает возраст и возвращает "Совершеннолетний" или
// "Несовершеннолетний" в зависимости от значения.
// function str(num) {
//   return num >=18 ? "Совершеннолетний" : "Несовершеннолетний"
// }console.log(str(99));

// 6.Определение, является ли число нулём
// Задача: Напишите функцию, которая принимает число и возвращает "Ноль", если это 0, или
// само число в противном случае.
// function str(num) {
//   return num === 0 ? "Ноль" : num
// } console.log(str(10));

// 7. Проверка на отрицательное число
// Задача: Напишите функцию, которая принимает число и возвращает сообщение, является ли число
// отрицательным, используя тернарный оператор.
// function str(num) {
//   return  num > 0 ? "отрицательным" : "положителный"
// } console.log(str(4));

// 8. Преобразование строки в заглавные буквы (если она больше 3 символов)
// Задача: Напишите функцию, которая принимает строку и преобразует её в заглавные буквы, если
// её длина больше 3 символов.
//  function str(num) {
//   return num.length >  3 ? num.toUpperCase (): num
//  }console.log(str("welcome"));

// 9. Проверка на кратность числа
// Задача: Напишите функцию, которая принимает два числа: число и делитель, и возвращает,
// делится ли число на делитель без остатка.
//  function str(num, sun) {
//   return num % sun === 0 ? num : false
//  }console.log(str(88,22));

// bbbbbbbbbbbbbbb

// 1. Проверка, пустая ли строка
// Задача: Напишите функцию, которая принимает строку и возвращает "Пустая строка", если она пустая, иначе возвращает саму строку.
// function str(num) {
//   return !num.length ? "Пустая строка" : ""
// }console.log(str(""));

// 2. Выбор приветствия в зависимости от времени суток
// Задача: Напишите функцию, которая принимает часы (от 0 до 23) и возвращает приветствие: "Доброе утро", "Добрый день" или "Добрый вечер".
// function str(num) {
//     if(num > 6 && num <= 12){
//         return "Доброе утро"
//     } else if (num > 12 && num <= 18){
//         return "Добрый день"
//     }else if (num > 18 && num <= 23){
//         return "Добрый вечер"
//     }else{
//         return "404"
//     }
// }
// console.log(str(23));

// 3. Определение высокого или низкого роста
// Задача: Напишите функцию, которая принимает рост (в см) и возвращает "Высокий", если рост больше 170 см, или "Низкий", если меньше или равен 170 см.

// function str(num) {
//   return num > 170 ? "Высокий" :"Низкий"
// }console.log(str(170));

//////////////

// window.requestAnimationFrame = function () {
//   return (
//     window.requestAnimationFrame ||
//     window.wedbkitRequestAnimtionFrame ||
//     window.mozRequestAnimtionFrame ||
//     window.oRequestAnimtionFrame ||
//     window.msRequestAnimtionFrame ||
//     function (callback) {
//       window.setTimeout(callback);
//     }
//   );
// };

// let x = 4;
// let y = x;
// let z = (x+y) / 2;
// console.log((x + y + z) % 3);

// let lap = [10] == [10] ? true : false;
// console.log(lap);
