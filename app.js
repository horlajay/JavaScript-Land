// alert("Calculator");
// var lbs = prompt("Input the pounds");
// var kg = lbs*0.454;
// alert("Weight in Kg = "+kg+" Kilograms")
// console.log("Conversion completed!")
//  var hot = false
//  var temp = 20
//  if (temp>80) {
//      console.log("hot outside");
//  }else if (temp <= 80 && temp >= 50) {
//      console.log("Average temp outside");
//  } else if (temp < 50 && temp >= 32) {
//      console.log("It is is pretty cold outside");
//  }else {
//      console.log("It is too cold outside");
//  }
    
// var ham = 10;
// var cheese = 10;

// var report = "blank";

// if (ham >= 10 && cheese >= 10) {
//     report = "STrong sales today"
// }else if (ham === 0 && cheese === 0) {
//     report = "Nothing was sold"
// }else {
//     report = "We had some slaes today"
// }

// console.log(report);

// var x = 0;

// while (x<5) {
//     console.log("x is currently:" +x);
//     if (x===3) {
//         console.log("X is equal to three");
//         break;
//     }
//     console.log("x is still less than 5, adding 1 to x");

//     x = x+1
// }


// var num = 1;

// while (num<11) {
//     if (num%2 === 0) {
//         console.log(num);
        
//     }
//     num = num+1
// }
 
//  for (var i = 0; i < 5; i++) {
//     console.log("number is:" +i);;
     
//  }

// var word = "ABCDEFGHIJK"

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
    
// }

// var x = 0;
//  while (x<6) {
    //      console.log("hello");
    
    //     x++
    
    //  }
    //  for (let i = 0; i < 5; i++) {
        //      console.log("hello with for loop");
        
        //  }
        //  var i = 0;
        
        //  while (i<=25) {
            //      if (i%2 !== 0) {
                //          console.log(i);
                //      }
                //      i++
                //  }
        
        //  for (let i = 0; i <=25; i++) {
            //     if (i%2 !== 0) {
//         console.log(i);

//     }
//  }



// //Exercise

// alert ("Welcome to the website");
// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name")
// var age = prompt("How old are you?")
// var height = prompt("Input Height in cm")
// var petName = prompt("Input your pet Name")
// alert ('Thank you for visiting the page')
 

// //condition
// nameCond = null;
// ageCond = null;
// heightCond = null;
// petCond = null;

// //Name Condition
// if (firstName[0] === lastName[0]) {
//     nameCond = true;
// }else {
//     nameCond = false;
// }
// //Age Condition
// if (age>20 && age<30) {
//     ageCond = true;
// } else {
//     ageCond = false;
// }
// //Height Condition
// if (height>=170) {
//     heightCond = true;
// } else {
//     heightCond = false;
// }
// //Pet Name Condition
// if (petName[petName.length-1]=== "y") {
//     petCond = true;
// } else {
//     petCond = false;
// }

// if (nameCond && ageCond && heightCond && petName) {
//     console.log("Comrade! You have succesfully passed the test!");
// } else {
//     console.log("Sorry, there is nothing to see here");
// }




//Functions


// function hello() {
//     console.log("helloo World");
// }

// function helloYou(name) {
//     console.log("Hello "+name);
// }
 

// function addNum(num1,num2) {
//     console.log(num1+num2);
// }

// function helloSomeone(name="Frankie") {
//     console.log("Hello "+name);
// }

// function formal(name="Sam",title='sir') {
//     console.log(title+""+name);
// }

// function formal(name="Sam",title='Sir') {
//     return title+""+name
// }

// function timesFive(numInput) {
//     var result = numInput * 5
//     return result
// }

// var v = " Global V"
// var stuff = "GOBAL STUFF"

// function fun(stuff) {
//     console.log(v);
//     stuff = "Reassign stuff inside func"
//     console.log(stuff);
// }
// fun();
// console.log(stuff);

// function sleepIn(weekdays, vacation) {
//     return (!weekdays || vacation)
// }

// function monkeyTrouble(aSmile, bSmile) {
//     return (aSmile && bSmile) || (!aSmile && !bSmile)
// }

// function stringTimes(str, n) {
//     var returnStr = "";
//     var i = 0;
//     while (i<n) {
//         returnStr += str
//         i++
//     }
//     return returnStr
// }
// function luckySum(a, b, c) {
//     // if (a === 13) {
//     //     return 0
//     // }
//     // if (b === 13) {
//     //     return a
//     // }
//     // if (c === 13) {
//     //     return a+b
//     // }
//     // return a+b+c
//     if (a === 13) {
//         return 0
//     }else if (b === 13) {
//         return a
//     }else if (c === 13) {
//         return a+b
//     }else {
//         return a+b+c
//     }
// }
// function caught_speeding(speed,  is_birthday) {
//     if (is_birthday) {
//         speed -= 5
//     }
//     if (speed<=60) {
//         return 0
//     }else if (60< speed <= 81) {
//         return 1
//     }else {
//         return 2
//     }

// }


//ARRAY
// var countries = ["USA", "Germany", "China"]




// do {
    
// } while (condition);


// var employee = {
//     name: "John Smith",
//     job: "Programmer",
//     age: 31,
//     nameLength: function () {
//         console.log(this.name.length);
//     }
// }

// var employee = {
//     name: "John Smith",
//     job: "Programmer",
//     age: 31,
//     report: function () {
//         alert("Name is"+ this.name+", Job is"+ this.job+", Age is"+ this.age)
//     }
// }


// var headOne = document.querySelector ('.body')
// var pOne = document.querySelector ('#p1')
// var pTwo = document.querySelector ('#p2')

// headOne.addEventListener('mouseover', function () {
//     headOne.textContent = "Mouse currently on";
//     headOne.style.color = 'blue';
// })

// headOne.addEventListener('mouseout', function () {
//     headOne.style.color = 'black';
//     headOne.textContent = "Welcome To Learning Javascript"
// })
// pTwo.addEventListener('click', function () {
//     pTwo.textContent = "Clicked On";
//     pTwo.style.color = 'purple'
// })
// pOne.addEventListener('dblclick', function () {
//     pOne.textContent = "Double Clicked ON"
//     pOne.style.color = 'pink'
// })

// Restart Game button
var button = document.querySelector('.btn');


//Grabs all the squares
var takBox = document.querySelectorAll('td')
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }else if (this.textContent === 'X') {
        this.textContent = 'O';
    }else {
        this.textContent = '';
    }
}
for (var i = 0; i < takBox.length; i++) {
    takBox[i].addEventListener('click', changeMarker);
    
}

// var cellOne = document.querySelector('td')

// cellOne.addEventListener('click', function () {
//     if (cellOne.textContent === '') {
//         cellOne.textContent = 'X'
//     }else if (cellOne.textContent === 'X') {
//         cellOne.textContent = 'O'
//     }else {
//         cellOne.textContent = ''
//     }
// })


// Clear the board
function clearBoard() {
    for (var i = 0; i < takBox.length; i++) {
        takBox[i].textContent = '';
    }
}
button.addEventListener('click', clearBoard);































































