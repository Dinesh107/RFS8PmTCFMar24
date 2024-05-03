// console.log("Welcome To JS");

// console.log("Welcome To JS");

// console.log("Welcome To JS");

// console.log("Welcome To JS");

// console.log("Welcome To JS");

// window.alert("Welcome To JS sathish");

// below code is Variable

// let a;  Decalarization

// a = 12 initialization

// let a = 12; // Decalarization + initialization.

// console.log(a);

// let firstName = "Sathish"; // strings

// let age = 20;  // numbers

// let student = true; //  booleans

// age = age + 3;

// console.log("Hello ", firstName);

// console.log("Your age is ", age);

// console.log("You have Enrolled:- ", student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;

// document.getElementById("p2").innerHTML = "Your age is " + age;

// document.getElementById("p3").innerHTML = "Enrolled:- " + student;

//Arithemetic Expressions

// it is combination of operands (values, variables, etc), operators (+ - * / % modulus)

// let a = 10;
// let b = 20;

// let c = a + b;
// let d = b - a;
// let e = b * a;
// let f = b / a;
// let g = b % a;

// let students = 20;

// students = students + 1;

// students = students - 2;

// students = students * 2;

// students = students / 2;

// students = students % 2;

// students += 1; // agumented assignment operator

// students -= 1;

// students *= 1;

// students /= 1;

// students %= 1;

// console.log(students);

// console.log(c);

// console.log(d);

// console.log(e);

// console.log(f);

// console.log(g);

// let username = window.prompt("What is your Name?");

// console.log(username);

// let username;

// document.getElementById("myButton").onclick = function() {

//      username = document.getElementById("myText").value;

//      console.log("Your name is", username);

//      document.getElementById("myLabel").innerHTML = "Hello " + username;

// }

// let age = window.prompt("How old are you?");

// console.log(typeof age);

// age = Number(age);

// console.log(typeof age);

// age += 1;

// console.log("Happy Birthday You are", age, "years old");

// let x;

// let y;

// let z;

// x = Number("3");

// y = String(2.56);

// z = Boolean("sathish");

// console.log(typeof x, x);

// console.log(typeof y, y);

// console.log(typeof z, z);

// const PI = 3.14159;

// let radius;

// let circumference;

// radius = window.prompt("Enter the radius of a circle");

// radius = Number(radius);

// // PI = 489.544;

// circumference = 2 * PI * radius;

// console.log("The circumference of the circle is " + circumference);

// let username  = "sathish Student";

// let length = username.length;

// console.log(length);

// let characterMethod = username.charAt(2);

// console.log(characterMethod);

// let indexMethod = username.indexOf("s");

// console.log(indexMethod);

// let lastIndexMethod = username.lastIndexOf("s");

// console.log(lastIndexMethod);

// let trimFunc = username.trim();

// console.log(username);

// console.log(trimFunc);

// let uc = username.toUpperCase();

// console.log(uc);

// let lc = username.toLowerCase();

// console.log(lc);

// let phoneNumber = "91-49494-93939";

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);

// let fullName = "Sathish Kumar";

// let firstName;

// let lastName;

// firstName = fullName.slice(0, fullName.indexOf(" "));

// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// // lastName = fullName.slice(8);

// console.log(firstName);

// console.log(lastName);

// firstName = fullName.slice(0, 7);

// let username = "sathish";

// // let letter = username.charAt(0);

// // letter = letter.toUpperCase();

// let letter = username.charAt(0).toUpperCase();

// console.log(letter);

// let age = 10;

// if(age >= 18) {

//     console.log("You are eligible to vote");

// }

// let age = 10;

// if(age >= 18) {

//     console.log("You are eligible to vote");

// } else {

//     console.log("You are not eligible to vote");

// }

// grade = 105;

// if(grade <= 50) {

//     console.log("Fail and no grade");

// } else if(grade >= 50 && grade < 70) {

//     console.log("Pass and your grade is C");

// } else if(grade >= 70 && grade < 90) {

//     console.log("you did good and your grade is B");

// } else if(grade >= 90 && grade <= 100) {

//     console.log("you did great and your grade is A");

// } else {

//     console.log("invaild mark");

// }

// grade = "B";

// switch (grade) {
//   case "A":
//     console.log("you did great and your grade is A");
//     break;

//   case "B":
//     console.log("you did great and your grade is B");
//     break;

//   case "C":
//     console.log("you did great and your grade is C");
//     break;

//   case "D":
//     console.log("you did great and your grade is D");
//     break;

//   default:
//     console.log("invaild input");
// }



// print 1 to 10


// let i = 1;

// while(i <= 10) {  // i = 1, i = 2, i = 3, i = 4, i = 5

//   console.log(i);

//   i = i + 1;

// }

// print 1 to 10

// let i = 100;

// do {

//    console.log(i);

//    i = i + 1;

// }while(i <= 5);

//   1          2step     4step
// for(let i = 1;  i<=3;    i++) {  // i = 1, i = 2, i = 3, i = 4

// // 3rd step

//    document.write(i + " ");
// }


//  1 step       2step    8th 
// for(let i = 1;  i <= 6;   i++) {  // i = 1, i = 2, i = 3, i = 4 
 
//     // 3step
   
//     //   4th        5th    7th  
//     for(let j = 1; j <= 5; j++) { // 

//         // 6th step 
//          document.write("&" + " ")

//     }

//     document.write("<br>");
// }

// Break and Continue


// for(let i = 1; i <= 10; i++) {

//      if(i == 8) {

//         break;

//      }

//      console.log(i);

// }

// for(let i = 1; i <= 10; i++) {

//     if(i == 5) {

//        continue;

//     }

//     console.log(i);

// }

// nested loop --> loops in another loop 



//      1          2   8
for(let i = 1; i <= 10; i++) { //i=3
// 3

//        4          5      7
    for(let j = 1; j <= i; j++) { // 
      //6

        document.write("*"," ")

    }

    document.write("<br>");

}














