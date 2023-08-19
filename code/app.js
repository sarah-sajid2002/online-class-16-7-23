// // simplest class                                                       1
// class person {
//   greet() {
//     console.log("hi oop kasi lag rahi ha??");
//   }
// }
// let object_1 = new person();
// object_1.greet();

// // creating 2 classes                                                    2

// class person {
//   greet() {
//     console.log("hi oop kasi lag rahi ha??");
//   }
// }
// class car {
//   engine() {
//     console.log("car is moving!");
//   }
// }
// let objectPerson = new person();
// objectPerson.greet();
// let objectCar = new car();
// objectCar.engine();

// // objects inside class                                                     3
// class bank {
//   bankWork = {
//     customerName: "ayesha",
//     amount: 1000,
//     withdrawMoney: 200,
//     display: function () {
//       console.log("i am in bankWork object");
//     },
//   };
//   toShow() {
//     console.log("i am in bank class");
//   }
// }
// let bankObject = new bank();
// bankObject.toShow();
// console.log(bankObject.bankWork.customerName);
// console.log(bankObject.bankWork.amount);
// console.log(bankObject.bankWork.withdrawMoney);
// console.log(bankObject.bankWork.display());

// //creating different objects of same class                                   4
// class SMIT {
//   auditorium = {
//     seat: 100,
//     studentsPresent: 80,
//     studentAbsent: 20,
//     display() {
//       return "i am in auditorium";
//     },
//   };
//   toShow() {
//     return "i am in SMIT";
//   }
// }
// let object_1 = new SMIT();
// let object_2 = new SMIT();
// let object_3 = new SMIT();
// console.log(object_1.toShow());
// console.log(object_2.auditorium.display());
// console.log(object_3.auditorium.seat);

// // constructors                                                              5
// class constructedClass {
//     constructor() {
//         console.log("constructor with no parameter");
//     }
// }
// let object_1 = new constructedClass();

// // final code to sum up                                                       6
// class calculation {
//   constructor() {
//     console.log("we are doing calculations");
//   }
//   addition(number1, number2) {
//     return number1 + number2;
//   }
//   subtraction(number1, number2) {
//     return number1 - number2;
//   }
//   multiplication(number1, number2) {
//     return number1 * number2;
//   }
//   division(number1, number2) {
//     if (number2 == 0) {
//       return "math error";
//     } else {
//       return number1 / number2;
//     }
//   }
// }
// let object = new calculation();
// console.log(object.addition(1, 2));
// console.log(object.subtraction(3, 9));
// console.log(object.multiplication(9, 9));
// console.log(object.division(1, 0));
