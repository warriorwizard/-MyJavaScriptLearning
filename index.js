// //java script console API
// console.log('helloworld');
// //alert("me")
// //document.write("this is document write")
// console.warn("this is a warning");
// console.error("this is an error")

//javascript variables
//Containers to store data values
// var number2 =34
// var number3=45
// console.log(number1+number2);
// multi line 
// comment

// Datatypes in Javascript
var num1 = 34;
var num2 = 56.34;
var str1 ="this is a string";
var marks ={ravi:34,
    amit:97,
    harry:70
}
//boolean in javascript (true or false)       
var tru = true;
var fls= false;
// console.log(str1 +" and am i a fool " + a)
 
//undefined;
var und = undefined;
// console.log(und)

//null
var nothing = null
// console.log(nothing)
//at high level java script have two type of data structure
// 1.primitive : undefined , number, boolean, string, symbol, null
// 2.reference data type : Array , object
// array is the storage of all type of primitive data

var arr = [1,2,3 ,"ram"]  //her counting starts from 0 as in many other programming languages
// console.log(arr)
// console.log(arr[0])

// operators in javascript 

// var a = 1000; 
// var b = 10;
/*console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)*/


// Assignment value  (nothing else but the value assigned to it )
// var c = b
// c += 2
// similarly -= ,*= ,/=
// console.log(c)

//comparorion variable 
// console.log(a==b) //similarily <= , < ,> , >= comparision variables

// logical operators and
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

// logical operator or
// console.log(false || false)
// console.log(false || true)
// console.log(true || true)
// console.log(true|| false)

// not logical operator
// console.log(!false)
// console.log(!true)
  

// FUNCTIONS
/*
function avg(a,b){
c=(a+b)/2
return c;}
c1 = avg(2,3);
console.log(c)

// conditionals in javascript

var age1= 34;
if (age1>4){
    console.log('u are not a kid')
}
else {'u are a kid'}

// else if ladder

if (age1<5){console.log('u are just a kid')}
else if (age >15){console.log('u re no loonger a kid ')}
else if (age >45){console.log('are are no longer young man')}
else {console.log('are are fucking teenager')} */

// Loops in javascript
//for loop

var str=[1,2,3,4,5,6];
// for (var i = 0;
//     i<str.length;
//     i++)
//     console.log(str[i])

//For each loop
// str.forEach(function(elements){
// console.log(elements)
// })

//while loop

//  let j = 0;
// while (j<str.length){
// console.log([j]);
// j++ } 
 
//do while loop  

// do {
//     console.log([j]);
//     j++;
// }while (j<str.length)

// break and continue in javascript

// for (var j=0 ; j<str.length;j++)
//   {if (j==2){
// //   break *here the answer will be 2
// continue}
//   console.log(str[j])
//   }

var mystr = ['hey', 'man', ' i am ram', 'jackfruit','mango']
// console.log(mystr.length)
// console.log(
//  mystr.push('amit is handsome')
//     )
// mystr.pop()  
// console.log(mystr)
// const name_leng =mystr.unshift("hey")
// console.log('length of hey is : '+ name_leng)

//string method in javascript

// let quote='amit is good good good boy'
// console.log(quote.length);
// console.log(quote.indexOf("boy"))
// console.log(quote.lastIndexOf("boy"))
// console.log(quote.slice(1,3))   //used for slicing a word
// let d = 'i am a good boy'
// console.log(d.replace('i','amit'))

//date format
// let mydate = new Date();
// console.log(mydate)

//DOM document object model manipulation (used by javascript to acces html)

// let elem = document.getElementById('click')
// console.log(elem)

//local storage
// localStorage.setItem('amit','yadav','ram','kumar')
// localStorage.getItem(amit)
// localStorage.removeItem(amit)
// localStorage.clear()
// JSON

// obj ={name:'amit',surname:'yadav',age:'nineteen'}
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(typeof obj)
// parsed = JSON.parse
