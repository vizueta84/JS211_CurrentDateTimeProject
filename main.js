// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("ShowDate").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const num2String = () => {
let num = document.getElementById("firstNum").value
  let convertedNum = num.toString();
  document.getElementById("ConvertedNum").innerHTML = convertedNum 
  return convertedNum;
}
// const results = num2String("5");
// console.log(typeof results)

// Write a JavaScript program to convert a string to the number.
const stringNum = () => {
  let str = document.getElementById("string").value
  // let converted = parseInt(str);
  document.getElementById("displayNum").innerHTML = parseInt(str)
  return str
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
 
  
const checkDataType = (something) => {
  let data = document.getElementById("dataType").value
  document.getElementById("display-element2").innerHTML = typeof data;
  return typeof something;
}
// // boolean
// console.log(checkDataType(true))
// // null
// let blackhole = null;
// console.log(checkDataType(blackhole))

// // undefined
// let apple;
// console.log(checkDataType(apple))

// // Number
// let age = 28;
// console.log(checkDataType(age))

// // NaN
// let x = NaN;
// console.log(checkDataType(x))

// // String
// let string1 = "A String"
// console.log(checkDataType(string1))



  
// Write a JavaScript program that adds 2 numbers together.
const addNum = () =>{
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  console.log(num1, num2)
  let total = Number(num1) + Number(num2);
  console.log(total)
  document.getElementById("display-number").innerHTML = total
  return total
}
// const res = sum(4, 5);
// console.log(res)

// Write a JavaScript program that runs only when 2 things are true.
const checkAgeAndHeight = () => {
  let age = document.getElementById("age").value
  let height = document.getElementById("height").value
  if(age == 10 && height == 108)
  return document.getElementById("display-element3").innerHTML =  'you may ride the rollercoaster'
  if(age != 10 && height != 108)
  return document.getElementById("display-element3").innerHTML = 'both are not correct'
  if(age == 10 || height == 108)
  return document.getElementById("display-element3").innerHTML = 'only one is correct'
  // return 'you may ride the rollercoaster'
}


// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
