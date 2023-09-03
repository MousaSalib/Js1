console.log("========first step========")
function ageInDays(ageInYears) {
    
    var daysInYear = 365;
    var ageInDays = ageInYears * daysInYear;
    return ageInDays;
  }
  var ageInYears = 24; 
  var ageInDaysResult = ageInDays(ageInYears);
  console.log("age in days is --->",ageInDaysResult, "for my age");
  console.log("------------------------------------")

console.log("==========second step==========")  
// function findSmallestNumber(numbers) {
//     if (numbers.length === 0) {
//       return undefined;
//     }
//     let smallest = numbers[0]; 
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] < smallest) {
//         smallest = numbers[i]; 
//       }
//     }
//     return smallest;
//   }
//   var numbers = [4, 2, 9, 5, 5, 7]; 
//   var smallestNumber = findSmallestNumber(numbers);
//   console.log(smallestNumber);
  function findTheSmallNumber (numbers) {
    let smallest = numbers[0];
    for (let i =0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i]
        }
    }
    return smallest
  }
  let numbers = [2,4,6,8,10,12,14,1]
  console.log("the smallest number is --->", findTheSmallNumber(numbers));
  console.log("-------------------------------------------")

console.log("=========third step========")
function descendingOrder(number) {
    if (number < 0) {
      return -1; 
    }
    var numberStr = number.toString();
    var sortedDigits = numberStr.split('').map(Number).sort(function(a, b) {
      return b - a;
    }).join('');
    return parseInt(sortedDigits, 10);
  }
  var inputNumber = 583219;
  var result = descendingOrder(inputNumber);
  console.log("the result it is ----->", result);
  console.log("---------------------------------------------")

console.log("=======forth step======") 
function calculateAverage(Numbers) {
    if (Numbers.length === 0) {
      return 0;
    }
    var sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
      sum += Numbers[i];
    }
    var average = sum / Numbers.length;
    return average;
  }
  var Numbers = [2,4,6,8,10,12,14];
  var averageResult = calculateAverage(Numbers);
  console.log("the average of the given numbers is ---->", averageResult);
  console.log("-----------------------------------------");

console.log("=========fifth step=============");
console.log(`
*what is the output of:-

1-Console.log( [ ] == [ ] ) --->in this case will return false, because they have different address in the heap.

2-Console.log( { } == { } ) --->in this case will return false, because they have diffrent address in the heap.
`)
console.log("------------------------------------")

console.log("=========sixth step==========");
console.log(`
*what is the output of this code with explaination:-

function main() {
console.log("A");
setTimeout(function print() {
console.log("B");
}, 0);
console.log("C");
}
main();
==The answer is:-
-it will be printed (A,C,B)--->because the js is a non blocking language.
`)
console.log("---------------------------------------")
console.log("========seventh step=======");
console.log(`
*what is the output of this code with explaination:-

var num = 8;
var num = 10;
console.log(num)
== the answer will be (10)---> because the variable of var accepts the redeclar;
`)
console.log("-------------------------------")

console.log("======eighth step=====")
console.log(`
*what is the output of this code with explaination:-

function sayHi() {
console.log(name);
console.log(age);
var name = 'Ayush';
let age = 21;
}
sayHi();
==the ouput in var will be --> undefined, bacause i made acces before initialisation;
==the ouput in let will be --> Cannot access 'age' before initialization 
`)
// function sayHi() {
//     //console.log(name);
//     console.log(age);
//     //var name = 'Ayush';
//     let age = 21;
    
//     }
//     sayHi();
