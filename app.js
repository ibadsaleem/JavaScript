// //q1 chap1
// alert("Welcome");
// //q2chap1
// alert("Error! Please enter a Valid Password");
// //q3chap1
// alert("Welcome to JS Land...\nHappy Coding!");
// //q4chap1
// alert("Welcome to JS Land..");
// //q5chap1
// alert("Happy Coding!");

// //q6chap1
// alert("Hello.. i can run JS through my web browser's console  ");
// //q7chap1
// alert("Welcome to JS Land..");
// //q4chap1
// alert("Welcome to JS Land..");
// //-------------------------------------------------------------------------------
// //          Chapter 2
// //1
// var username;
// //2
// var myName;
// myName = "Ibad Saleem";
// //3
// var message;
// message = "Hello World";
// alert(message);
// //4
// var name = "Ibad Saleem";
// var age = 20;
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// //5
// var variable = "PIZZA"
// var str = "";
// for(var i = 5 ; i > 0 ; i--){
//     for(var j = 0 ; j < i ; j++){
//         str += variable[j];
//     }
//     str += "\n";
// }
// alert(str);


// //6
// var email = "xyz@gmail.com"
// alert("my email address is " + email);

// //7
// var book = "A smarter wway to learn Javascript";
// alert("I am trying to learn from book " + book );

// document.write("Yah! I can write HTML content through Javascript");



// //9
// var str1 = "------------o.().o------------"
// alert(str1);


// //----------------------------------------------------------------------------------
// //      Chapter 3

// //q1
// var age = 20;
// alert("I am "  + age + " year old");

// //q2
//     var visted = 14;
//     alert("you have visited " +visted + " times" );
    
// //q3
//     var birth = 2000;
//     alert("My birth year is "+ birth + "\nDAta type of my birth is a number" );
// //q4
//     var name = "John Doe";
//     var title = "T-Shirts";
//     var quantity = 5;
// document.getElementById("div1").innerHTML = "<p>" + "<b>" + name + "</b> ordered <b>" + quantity + title + "</b>(s)" + "on XYZ Clothing Store" + "</p>"
    
// //-----------------------------------------------------------
// //Chapter 4
// //1
// var a = 2, b = "Ibad", c = 2.34;
// //2
// var a = 1, b = 'a', c = 1, d = 2.3, e = 2;
// var a b = 1, b@=1, b$ = 2.1, B ^= 'k', 2A = 's';

// //3

// document.write("<h1> Rules For Naming JS Variables</h1>\n\n\n\n");
// document.write(" Variable names can only contain numbers, &, _  and -. For example $my_1stVariable\n");
// document.write(" Variables must begin with a letter, & or _. For example $name, _name or name\n");
// document.write(" Variable names are case sensitive");
// document.write(" Variable names should not be JS keywords");
//-------------------------------------------------
//Chapter 5

// var x = parseInt(prompt("enter first number"));
// 			var y = parseInt(prompt("enter second number"));

// 			var result = x + y;
// 			document.getElementById("displaybox").innerHTML = "SUM OF " + x + " " + y +" is " + result;
// 			result = x - y;
// 			document.getElementById("minus").innerHTML = "Diff OF " + x + " " + y +" is " + result;
// 			result = x * y;
// 			document.getElementById("multiplication").innerHTML = "product OF " + x + " " + y +" is " + result;
// 			result = x /y;
// 			document.getElementById("division").innerHTML = "divident OF " + x + " " + y +" is " + result;
// 			result = x %y;
// 			document.getElementById("mod").innerHTML = "remainder OF " + x + " " + y +" is " + result;
			
            
// 			var variable;
//             document.getElementById("newbox").innerHTML += "    \nValue after variale declaration is " + variable  + ";<br>" ;
            
// 			variable =5;
//             document.getElementById("newbox").innerHTML += "  \n      Value after initializing is " + variable + "<br>";
//             variable++;
//             document.getElementById("newbox").innerHTML += "    \n     Value after increment = " + variable + "<br>";
//             variable += 7;
//             document.getElementById("newbox").innerHTML += "      \n  Value after adding 7  is " + variable + "<br>";
//             variable--;
//             document.getElementById("newbox").innerHTML += "      \n  Value after decrement is : " + variable + "<br>";
//             variable = variable %3;
//             document.getElementById("newbox").innerHTML += "   \n     Remainder after dividing by 3 is " + variable + "<br>";
            
//             var x =600;
//             document.getElementById("q4").innerHTML += "<br>Cost to buy 5 ticket is: " + (x * 5) + "<br><br>";
            
//             for(var i = 1 ; i <= 10 ; i++){
//                 document.getElementById("table").innerHTML += "<br>" + "4 x " + i + " = " + (4 * i); 
//             }
            
//             var ctemp = 25;
            
//             document.getElementById("q6").innerHTML += ctemp + " degree celsius is " + ((ctemp* 1.8) + 32) + " Feh <br>";
//             var ftemp = 70;
            
//             document.getElementById("q6").innerHTML += ftemp + " Feh is " + ((ftemp - 32) * (5/9) ) + " degree celius";
            
            
//             var pitem1 = 650;
//             var pitem2 = 100;
//             var qitem1 = 3;
//             var qitem2 = 7;
//             var scharges = 100;
            
//            document.getElementById("q7").innerHTML += "7. <br> <p> Price of item1 = " + pitem1  + "</p>"
//            document.getElementById("q7").innerHTML += "<p> quanitity of item1 = " + qitem1  + "</p>"
//             document.getElementById("q7").innerHTML += "<p> Price of item2 = " + pitem2  + "</p>"
//             document.getElementById("q7").innerHTML += "<p> quanitity of item2 = " + qitem2  + "</p>"
//             document.getElementById("q7").innerHTML += "<p> Shipping charges = " + scharges  + "</p>"
//             document.getElementById("q7").innerHTML += "<br>Total cost  = " + ((pitem1 * qitem1) + (pitem2 * qitem2) + scharges);
                
            
            
//             //question 8
//             var obtained = 804;
//             var totalmarks = 980;
//             document.getElementById("q8").innerHTML += "<p>Total Marks : " + totalmarks + "</p>"
//             document.getElementById("q8").innerHTML += "<p>Obtained marks : " + obtained + "</p>"
//             document.getElementById("q8").innerHTML += "<p>Percentage : " + (obtained/totalmarks)*100 + "</p>"
            
//             //q9
//             var dollars = 10;
//             var riyals = 25;
//             document.getElementById("q9").innerHTML += "<p>Total currecy in PKR : " + ((dollars * 104.80) + (riyals  * 28))    +   "</p>"
            
//             //q10
//             var num = 10;
//             num = ((num + 5) *10)/2;
//             document.getElementById("q10").innerHTML += "<p> RESULT : " +  num +   "</p>"
            
//             //q11
//             var cyear = 2016;
//             var byear =  1992;
//             var age = (cyear - byear);
//             document.getElementById("q11").innerHTML += "<p>They are either " + age +" or "+ (age -1) + " years old</p>" 
            
            
//             //q12
//             var radius = 20;
//             document.getElementById("q12").innerHTML += "<p>radius of a circle is " + radius + "</p>"
//             document.getElementById("q12").innerHTML += "<p>Circumference of a circle is " + (2 * 3.142 * radius) + "</p>"
//             document.getElementById("q12").innerHTML += "<p>Area of a circle is " + ( 3.142 * radius * radius) + "</p>"
                
//             //q13
//             var fsnack = "chocolate chip";
//             var age = 15;
//             var max_age = 65;
//             var estimate = 3;
//             var ndays = (max_age-age) * estimate;
//             document.getElementById("q13").innerHTML += "<p>Favourite snack : " + fsnack + "</p>";
//             document.getElementById("q13").innerHTML += "<p>Current age : " + age + "</p>";
//             document.getElementById("q13").innerHTML += "<p>Maximum age : " + max_age + "</p>";
//             document.getElementById("q13").innerHTML += "<p>snacks per day : " + estimate + "</p>";
//             document.getElementById("q13").innerHTML += "<p>You will need :"+  ndays +" " +fsnack + "to last you until the ripe old age of   " + max_age  +  "</p>";
            
            
                        
                        
                        
                        
			

// chapter 6-9 

//q1

// var a = 10;
// document.write("Result:" + "<br>" + "The value of a is: " + a);
// document.write("<br>" + "--------------------------------------------" + "<br>");
// document.write("<br>" + "The value of ++a is: " + ++a + "<br>");
// document.write( "Now the value of ++a is: " + a + "<br>");
// document.write("<br>" + "The value of ++a is: " + a++ + "<br>");
// document.write("Now the value of ++a is: " + a + "<br>");
// document.write("<br>" + "The value of --a is: " + --a + "<br>");
// document.write( "Now the value of a is: " + a + "<br>");
// document.write("<br>" + "The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

//q2
// var a = 2, b = 1, result = --a - --b + ++b + b--;
// document.write("<br>" + "The value of --a is: " + --a + "<br>");
// document.write( "The value of --a - --b + ++b is: " +( --a - --b + ++b) + "<br>");
// document.write("The value of--a - --b + ++b + b-- is: " + (--a - --b + ++b + b--) + "<br>");

//q3

// var a = prompt("Enter Your Name", "Name");
// alert("Hello " + a);


//chapter 9-11

// q1
// var City = prompt("Enter City Name", "City");
// if (City === "Karachi")
// {
//     alert("Welcome to City of Lights");
//     }

//q2
//     var gender = prompt("Enter Gender", "Gender");
//     if (gender === "MALE")
//     {
//         alert("Good Morning Sir");
// }
        
// else if (gender === "Female")
//     {
//         alert("Good Morning Ma'am");
// }


//q3

// var tl = prompt("Enter Traffic Light Colour")
// if (tl === "Red") { 
//     alert("Must Stop");
// }
// else if (tl === "Yellow") {
//     alert("Ready to Move");
//  }
// else if (tl === "Green") {
//     alert("Move Now");
// }


//q4
// var rp = prompt("Enter Remaining Fuel")
// if (rp <= 0.25)
// {
//     alert("Please refill the fuel in your car")
// }

// Chapter 13-15
// //q1
// var students = [];
// //q2
// var students = ["Ibad", "Saleem"];
// //q3
// var nostudents = [1, 2];
// //q4
// var boolstd = [true, false]


//chapter 17-20

// var arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var i = 0; i < 10; i++)
// {
//     document.write(arrnum[i] + '<br>');    
// }

//chapter 21-25 q1


// var fname = prompt("Enter First Name: ", "First Name");
// var lname = prompt("Enter Last Name: ", "Last Name");
// var fullname = fname.concat("" + lname);

// alert("Hello " + fullname);


//q2
// var mobile = prompt("Enter Your Favorite Mobile Model: " , "Model");
// document.write("My Favorite Phone Is: " + mobile);
// document.write("<br>String length: " + mobile.length);

//q3

// var a = "Pakistani";
// document.write(a.indexOf('n'));


//q4

// var a = "Hello World";
//     document.write(a.indexOf('l'));

//q5
// var a = "Pakistani";
// document.write(a[3]);

//q7
// var city = "Hyderabad";
// if (city === "Hyderabad")
// {
//     city = "Islamabad";
//     document.write(city);
// }

//q8

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var msg = message.replace(/and/g, "&");
// document.write(msg);


//q9
// var snum = "472";
// var num = Number(snum);
// document.write("<b>"+ "Number: " + snum + "<br>Type: " + typeof(snum));
// document.write("<br>Number: " + num + "<br>Type: " + typeof (num)+ "</b>");

// //q10
// var b = "peanuts";
// document.write(b.toUpperCase());

//q11
// var a = "javascript";
// document.write(a[0].toUpperCase() + a.slice(1) );
//q12
// var fnum = 35.67*100;
// var ssnum = String(fnum);
// ssnum.slice(2);
// document.write(ssnum);


//q13


// var count=0;
// while (1) {
//     var username = prompt('Enter User Name: ', 'User Name');
//     for (var i = 0; i < username.length; i++) {
//         if (Number(username.charCodeAt(i) == 64 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 33))
//             {
//                 count++;
//             }
        
//     }
//         if (count == 0) {
//             alert("Hello " + username);

//         }
//         else {
//             alert("Kindly Enter Correct Username");
//             continue;
//         }
    
    
// }
//q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// while (1) {
//     var choice = prompt("Enter Item To Search: ", "Enter Item");

//     for (var i = 0; i < A.length; i++) {
//         if (choice.toLowerCase() === A[i] ) {
//             // alert("Item Available");
//             count = 1;
//             break;
//         }
//         else {
//             count = 0;
            
//         }
//     }
//     if (count == 0)
//     {
//         alert("Item Not Available");
//     }
//     else {
//         alert("Item Available");
//     }

// }

//q15
// var count = 1;

    
//     var password = prompt("Enter Password: ");
//     for (var i = 0; i < password.length; i++) {
//         if (password.length > 5) {
//             if (Number(password[0]) >= 48 && Number(password[0]) <= 56) {
            
//                 count = -1;
//                 break;
//             }
//             break;
//         }
//         else {
//             count = -2;
//             break;
//         }
//     }

//     if (count == -2)
//     {
//         alert("Password should be of atleast 6 characters");
//     }

//    else if (count == -1)
//     {
//         alert("Password should not begin with a number");
//     }
//     else if (count == password.length+1)
//     {
//         alert("Password should be alphanumeric")
//     }

//     else {
//         alert("Correct Password");
//     }

    




//q16
// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++)
// {
//     document.write(university[i] + "<br>"); 
// }

//q17
// var name = prompt("Enter Name: ", "Name");
// var a = name.length;
// document.write(name[a - 1]);





//q18

// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < string.length; i++)
// {
//     if (string[i].toLowerCase()=='t' && string[i+1].toLowerCase()=='h' && string[i+2].toLowerCase()=='e')    
//     {
//         count++;
//     }
// }

// document.write(count);


//-----------------------------------------------------------------------------



/*
    Chapter 26-30
 */

 //Q1

// var a = +prompt("Enter Positive integer Number: ", "integer number");
// document.write("Number: " + a + "<br>");
// document.write("Round off Number: " + Math.round(a) + "<br>" );
// document.write("Ceil Value: " + Math.ceil(a) + "<br>" );
// document.write("Floor Value: " + Math.floor(a) + "<br>");


//Q2
// var b = +prompt("Enter Negative Floating Number: ", " number");
// document.write("Number: " + b + "<br>");
// document.write("Round off Number: " + Math.round(b) + "<br>" );
// document.write("Ceil Value: " + Math.ceil(b) + "<br>" );
// document.write("Floor Value: " + Math.floor(b) + "<br>");

//Q3
// var c = +prompt("Enter Number: ", " number");
// document.write("Number: " + c + "<br>");
// document.write("Absolute Number: " + Math.abs(c) + "<br>");

//Q4


// var e = Math.floor(Math.random() * 6) + 1;
// document.write("Random Dice Value: " + e);

//Q5

// var e = Math.floor(Math.random() * 2) + 1;
// document.write(e);
// if (e === 2)
// {
//     document.write("<br>Random Coin Value: " + "Heads");   
// }
// else if (e === 1)
// {
//     document.write("<br>Random Coin Value: " + "Tails");   
// }

// else {
//     document.write("Undefined");
// }


//Q6

// var e = Math.floor(Math.random() * 100) + 1;
// document.write("Random Value between 1 and 100: " + e);

//Q7

// var Weight = +prompt("Enter Weight: ", "Weight Kg");
// document.write("Weight: " + Weight + " kgs");

//Q8

// while (1) {
//     var rand = Math.floor(Math.random() * 10) + 1;
//     var pred = +prompt("Enter Number: ", "Number");
//     if (pred === rand) {
//         alert("Congratulations You Are Correct!");
//         break;
//     }
//     else {
//         alert("Try Again!");
//     }
// }

/* 
    Chapter 31-34
*/
//Q1

// document.write(Date());

//Q2
//Q3
// var day = new Date();
// var dy = day.getDay();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// document.write(weekday[dy].slice(0,3));

//Q4
// var day = new Date();
// var dy = day.getDay();
// if (dy === 5 || dy === 6)
// {
//     document.write("Its a fun day");
// }

//Q5

// var day = new Date();
// var dt = day.getDate();

// if (dt <= 15)
// {
//     document.write("First 15 days of the month");
// }
// else 
// {
//     document.write("Last days of the month");
// }

/*
Chapter 35-38

*/

//q1

// function date()
// {
//     var d = new Date();
//     return d;
// }


// document.write(date());



//q2

// function fullName() {
//     var fname = prompt("Enter First Name: ", "First Name");
//     var lname = prompt("Enter Last Name: ", "Last Name");
//     var fullname = fname.concat(" ", lname);
//     return fullname;
// }

// alert("Hello " + fullName());


//q3

// function sum()
// {
//     var num1 = +prompt("Enter Num 1 : ", "Num 1");
//     var num2 = +prompt("Enter Num 2 : ", "Num 2");
//     return (num1 + num2);
// }


// alert("Sum: " + sum());


//q4

// function calculate( Num1,  Num2,  operator)
// {
//     if (operator === '+')
//     {
//         return (Num1 + Num2);
//     }

//     else if (operator === '-')
//     {
//         return (Num1 - Num2);
//     }
        
//     else if (operator === '*')
//     {
//         return (Num1 * Num2);
//     }
        
//     else if (operator === '/')
//     {
//         return (Num1 / Num2);
//     }

//     else
//     {
//         alert("Wrong Option");
//     }
// }
// var num1 = +prompt("Enter Num 1 : ", "Num 1");
// var num2 = +prompt("Enter Num 2 : ", "Num 2");
// var op = prompt("Enter Operator : ", "sign");
// var c=calculate(num1, num2, op);
// alert("Answer: " + c);


//q5

// function square(a)
// {
//     return a * a;
// }

// var num = prompt('Enter Number: ', "Num");
// alert("Answer: " + square(num));


//q6

// function factorial(num)
// {
//     if (num === 1 || num===0)
//         return 1;
//     else if (num < 0)
//        return -1 
//     else {
//         return (num * factorial(num - 1));
//     }
    
// }

// var num = +prompt("Enter Number");
// alert("Factorial: " + factorial(num));


//q7





//chapter 39-42

//q1
// function power(a, b) {

//     var prod = 1;
//     for (var i = 0; i < b; i++){
//         prod *= a;
//     }
//     document.write(prod);
// }

// power (2,2)

//q2

// function leap(year)
// {
//     if (year % 4 === 0)
//     {
//         alert("Leap Year");    
//     }
//     else {
//         alert("Not a leap year");
//     }
// }
// var yr = +prompt("Enter Year", "Year");
// leap(yr);

//q3

// function Scalc(a,b,c) {
//     var S = (a + b + c) / 2;
//     return S;
// }
// function area(a, b, c) {
//     var S = Scalc(a, b, c);
//     var Area = S * (S - a) * (S - b) * (S - c);
//     document.write("Area: " + Area + " units<sup>2</sup>");
// }

// area(2, 3, 4);


//q4

// function average(a, b, c) {
//     var avg = (a + b + c) / 3;
//     return avg;
// }
// function percentage(a, b, c) {
//     var percent = ((a + b + c) / 240) * 100
//     return percent;
// }
// function mainFunction() {
//     var a = average(67, 71, 55);
//     var p = percentage(67, 71, 55);
//     document.write("Average: " + Math.ceil(a) + " marks<br>");
//     document.write("Percentage: " + Math.ceil(p) + "%");
// }
// mainFunction()
//q5

// function Index(word,letter)
// {
//     var index = -1;

//     for (var i = 0; i <4; i++)
//     {
//         if (word[i] === letter)
//         {
//             index = i;   
//         }
//     }
//     if (index === -1)
//     {
//         document.write("Not found");

//     }
//     else {
//         document.write('Found at index: ' + index);
//     }
// }
// var name = "Ibad";
// Index(name, a);
//q6

//q7
// function remvowel() {
    // var newSent = [];
    // var sent = "Hello i am Ibad";
    // for (var i = 0; i < sent.length; i++)
    // {
    //     if (sent[i].toLowerCase() === 'a' || sent[i].toLowerCase() === 'e' || sent[i].toLowerCase() === 'i' || sent[i].toLowerCase() === 'o' || sent[i].toLowerCase() === 'u') {
    //     }
    //     else 
    //     {
    //         newSent[i] = sent[i]; 
    //     }
    // }


    // document.write(newSent);
// }
    // remvowel();


//chapter 43-48


//q1
// function alertclick()
// {
//     alert("Thanks for response");
// }

//q2
// function purchase()
// {
//     alert("Thanks For Purchasing!");    
// }


//q4

// function imouseout()
// {
//     var img = document.getElementById("1");
//     img.src="1.jpg"
// }
// function imouseover()
// {
//     var img = document.getElementById("1");
//     img.src="2.jpg"
// }
//q5
// var counter=0;
// function increase()
// {
   
//     var btninc = document.getElementById("count");
//     counter = counter + 1;
//     btninc.innerHTML = counter;
// }
// function decrease()
// {
//     var btninc = document.getElementById("count");
//     if (btninc.innerHTML == 0) { }
//     else {
//         counter = counter - 1;
//         btninc.innerHTML = counter;

//     }
// }


//chapter 49-52

//q1

// function display() {
//     var mail = "";
//     var email = document.getElementById("email");
//     var ps;
//     var pswd = document.getElementById("password");
//     if (pswd.value === "" || email.value==="") {
//         alert("enter your credentials please")
//         email.value = "";
//         pswd.value = "";
//     }
//     else {
//         document.write("Email:" + email.value);
//         document.write("<br>Password:" + pswd.value);
//     }
// }

//chapter 58-67

// var a = document.getElementById("main-content");
// var b = document.getElementById("main-content").childNodes;
// console.log(b);

// var a = document.getElementsByClassName("render").innerHTML;
// document.write(a);

// var a = document.getElementById("first-name");
// a.value = 'Ibad';
// var a = document.getElementById("last-name");
// a.value = 'saleem';
// var a = document.getElementById("email");
// a.value = 'ibadsaleem@hotmail.com';

// var a = document.getElementById("form-content").nodeType
// document.write(a);

// var b = document.getElementById("lastName").nodeType
// document.write(b);

// var b = document.getElementById("lastName").childNodes;
// document.write(b.nodeType);



