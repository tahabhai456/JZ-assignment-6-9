// //6 assignments
// //Q1

// var a = 1;
// console.log(++a);

// var b = 2;
// console.log(b++);

// var c = 5;
// console.log(--c);

// var d = 6;
// console.log(d--);

// //Q2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);

// //Q3
// var name = prompt("Enter your name");
// alert("Hello " + name);

// //Q4
// var table = prompt("Enter a number to show its multiplication table");
// if (table === null || table === "") {
//   table = 5;
// } else {
//   table = parseInt(table);
// }
// // Display multiplication table
// for (var i = 1; i <= 10; i++) {
//   console.log(table + " x " + i + " = " + (table * i));
// }

// //Q5
// var subject1 = prompt("Enter the name of subject 1");
// var subject2 = prompt("Enter the name of subject 2");
// var subject3 = prompt("Enter the name of subject 3");

// var totalMarks = 100;
// var marks1 = parseInt(prompt("Enter obtained marks for " + subject1));
// var marks2 = parseInt(prompt("Enter obtained marks for " + subject2));
// var marks3 = parseInt(prompt("Enter obtained marks for " + subject3));

// var totalObtainedMarks = marks1 + marks2 + marks3;
// var percentage1 = (marks1 / totalMarks) * 100;
// var percentage2 = (marks2 / totalMarks) * 100;
// var percentage3 = (marks3 / totalMarks) * 100;
// var overallPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// console.log("Subject\tTotal Marks\tObtained Marks\tPercentage");
// console.log(subject1 + "\t" + totalMarks + "\t\t" + marks1 + "\t\t" + percentage1.toFixed(2) + "%");
// console.log(subject2 + "\t" + totalMarks + "\t\t" + marks2 + "\t\t" + percentage2.toFixed(2) + "%");
// console.log(subject3 + "\t" + totalMarks + "\t\t" + marks3 + "\t\t" + percentage3.toFixed(2) + "%");
// console.log("Total\t" + (totalMarks * 3) + "\t\t" + totalObtainedMarks + "\t\t" + overallPercentage.toFixed(2) + "%");

// //Q6
// var num1 = parseFloat(prompt("Enter the first number"));
// var num2 = parseFloat(prompt("Enter the second number"));
// var operation = prompt("Enter the operation (+, -, *, /, %)");

// var result;
// switch (operation) {
//   case "+":
//     result = num1 + num2;
//     break;
//     case "-":
    
//     result = num1 - num2;
//     break;
//     case "*":
    
//     result = num1 * num2;
//     break;
//     case "/":

//     result = num1 / num2;
//     break;
//     case "%":
//     result = num1 % num2;
//     break;}
//     console.log("Result: " + result);

// //Q7
// var city = prompt("Enter your city");
// if (city.toLowerCase() === "karachi") 
//   alert("Welcome to the city of lights!");

// //Q8
// var gender = prompt("Enter your gender (male/female)");
// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir!");
// }

// //Q9
// var trafficSignal = prompt("Enter the color of the traffic signal (red/yellow/green)");
// if (trafficSignal.toLowerCase() === "red") {
//   alert("Stop!");
// } else if (trafficSignal.toLowerCase() === "yellow") {
//   alert("Get Ready!");
// } else if (trafficSignal.toLowerCase() === "green") {
//   alert("Go!");
// }