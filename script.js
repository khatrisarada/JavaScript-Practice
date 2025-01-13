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
const tri = "SARADA khatri";
console.log(tri.trim());
