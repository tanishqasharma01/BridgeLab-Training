// trim()
let msg = " hello world ";
console.log("Trimmed:", msg.trim());
// trim is used to remove the extra space wich is unnecessary in the code .

//includes()
let sentence = "i love Javascript";
console.log("Include 'love':", sentence.includes("love"));
//include is used to identify weather

//startsWith()
let email = "admin@gmail.com";
console.log("Starts with admin:", email.startwith("admin"));
//startwith is used to 
//endwith()
console.log("end with .com", email.endwith(".com"));

//slice()
let lang ="JavaScript";
console.log("Slice (0,4):",length.slice(0,4));

//substring
console.log("substring (4,0):",lang.substring(4,10));

//replace()
let greet = "hello world";
console.log("Replace:", greet.replace("World","JavaScript"));

//replaceAll
let hiText = "hi hi hi";
console.log("Replace All:",hiText.replaceAll("hi","hello"));

//split()
let names = "Aman,Ravi,Neha";
let namrArray = names.split(",");
console.log("Split:", nameArray);

//concat()
let a = "Hello";
let b = "World";
console.log("concar:"a.concat(" ", b));

//template Literals
let userName = "Aman";
let age = 22;
console.log('My name is ${userName} and age is ${age}');


