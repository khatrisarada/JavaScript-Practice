// What are some commonly used methods for manipulating strings in JavaScript? Provide examples demonstrating their usage.


//String Methods

const str = "Hello, JavaScript!";
console.log(str.toUpperCase()); 
console.log(str.toLowerCase()); 
console.log(str.includes("JavaScript")); 
console.log(str.split(", ")); 
console.log(str.replace("JavaScript", "World")); 


//Concatenation
console.log("=>Concatination");
let str1 ="Good";
let str2 ="Morning";
let result = str1.concat(" ",str2);
console.log(result);

//String Length
console.log("=>String Length");
let text ="Sarada";
let Length= text.length;
console.log(Length);



//toUpperCase
console.log("=>toUpperCase")
const upper = "sarada";
console.log(upper.toUpperCase());


//toLowerCase
console.log("=>toUpperCase")
const lower = "SARADA";
console.log(lower.toLowerCase());


//String Trim
console.log("=>trim");
const tri = "    SARADA     khatri    ";
console.log(tri.trim());


//slice (start, end)
console.log("=>slice start and end");
const slice = "sarada khatri"
console.log(slice.slice(0,6));
console.log(slice.slice(6));


//substring (start,end)
console.log("=>substring start and end");
const sub = "HelloEeryone"
console.log(sub.substring(0,5));
console.log(sub.substring(5));


//replace(searchValue, replaceValue)
console.log("=>slice start and end");
const replace = "My love to play football"
console.log(replace.replace("football", "batminton"));


//replaceAll (searchValue, replceValue)
console.log("=>replaceAll (SearchValue, replaceValue");
const All = "I love JavaScript. JavaScript is fun!";
console.log(All.replaceAll("JavaScript", "coding"));


//split (separator)
console.log("=>split(separator");
const separator = "apple,banana,cherry";
console.log(separator.split(","));


//Includes (substring)
console.log("=>includes (substring)");
const include = "Sarada Khatri";
console.log(include.includes("Khatri")); 
console.log(include.includes("khatri"));


//indexOf(substring)
console.log("=>indexOf(substring)");
const ind = "Hello Sarada";
console.log(ind.indexOf("Sarada")); 
console.log(ind.indexOf("sarada"));


//lastIndexOf(substring) Returns the index of the last occurrence of a specified value, or -1 if not found.
console.log("=>LastIndexOf(substring");
const las = "sarada";
console.log(las.lastIndexOf("a"));


//startsWith(substring)
console.log("=>startsWith(substring)");
const start = "JavaScript is great";
console.log(start.startsWith("Java"));
console.log(start.startsWith("Script"));



//endsWith(substring)
console.log("=>endsWith(substring)");
const end = "JavaScript is great";
console.log(end.endsWith("great")); 
console.log(end.endsWith("Java")); 


//charAt(index)
console.log("=>charAt(index)");
const strg = "JavaScript";
console.log(strg.charAt(4));


//charCodeAt(index)
console.log("=>charCodeAt(index)");
const cha = "s"
console.log(cha.charCodeAt(0));


//repeat(count)
console.log("=>repeat(count)");
const rep= "hello";
console.log(rep.repeat(2));


//padStart(targetLength, padString)
console.log("=>padStart(targetLength, padString)");
const pad = "5";
console.log(pad.padStart(3,"0"));



//padEnd(targetLength, padString)
console.log("=>padEnd(targetLength, padString)");
const padend = "5";
console.log(padend.padEnd(3,"0"));



//localeCompare(compareString)
console.log("=>localeCompare(compareString)");
const stre1="apple";
const stre2="banana";
console.log(str1.localeCompare(str2));



//Data Type
console.log("=>Data Type")
let myName = "Alice";             // String
let age = 25;                     // Number
let isStudent = true;             // Boolean
let hobbies = ["Reading", "Games"]; // Array
let userInfo = { name: "Alice", age: 25 }; // Object
let bigNum = 123456789n;          // BigInt
let uninitialized;

console.log(typeof myName);       
console.log(typeof age);          
console.log(typeof isStudent);   
console.log(typeof hobbies);      
console.log(typeof userInfo);     
console.log(typeof bigNum); 
console.log(uninitialized);  


//Non-Primitive Data Type
//Object
console.log("=>Object")
const user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  console.log(user.name); 


//Array
console.log("=>Array");
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); 


//Function
console.log("=>Function");
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice"));


//Date
console.log("=>Date");
const now = new Date();
console.log(now.toDateString()); 



//String Concatenation
console.log("=>String Concatenation");
const name = "Alice";
const old = 25;

const message = "Hello, my name is " + name + ". I am " + old + " years old.";
console.log(message);



  


  