  /*document.write("<h1>I am External Javascript<h1>");
  function showDate(){
    document.getElementById('datep').innerHTML = Date();
  } 

  <===  Declaring Variable  ===>
    let a = 5;
    let b = 2;
    let sum = a+b;
    let mul = a*b;
    let div = a/b;
    let mod = a%b;

    const pi = 3.14;
    let r = 45;
    let area = pi*r*r;

    let fname = "Dipesh"
    let lname = "Chaudhary"

 <===  if Condition :-  ===>
    let myAge = 18;
    if(myAge > 18){
      document.writeln("You are voter")
    }else if(myAge == 18){
      document.writeln("Age is equal to 18")
    }
    else{
      document.writeln("You are not voter")
    } 

  <===  Alert User  ===>

    alert("I am Hacker") 
   
<===  Print result :  ===>

    document.writeln(area.toFixed(2));
    document.writeln(fname+" "+lname)  

<===  Looping Tutorial :- 1) For Loop  ===>

    for(let i = 1; i<=100; i++){
      document.writeln("<br>Dipesh")
    } 

  <===   2) while Loop  ===>
      let i = 0;
      while(i<=100){
        document.writeln("<br>"+i);
        i++;
      } 

 <===  3) Do while Loop  ===>
    let a = 0;
    do{
      document.writeln("<br>"+a);
      a++
    } while(a<=100); 
     
  <===   Array  ===>
    let student1 = "Dipesh Chaudhary";
    let student2 = "Biplab Tharu";
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    days.forEach(function(abc){document.writeln(abc + " ") } )
     
    days.shift()  >>> Removes First data 
    days.unshift("Dipesh") >>> Add data to First
     days.pop() >>> Removes Last data
    days.push("Don") >>> Add data to last
    days.splice(1,3,"Hello") >>> Add data between strings
    document.writeln("<br>")

   <===  For Each Loop  ===>
    days.forEach(function(abc){document.writeln(abc + " ") } ) 

 //  <=== Function ===>
  function printName(){
    document.getElementById('info').innerHTML="Dipesh Chaudhary"
  } 
 
    <=== Calculate Simple Interest  ===> 
    function calculateInterest(){
      let principle = document.getElementById('p').value
      let time = document.getElementById('t').value
      let rate = document.getElementById('r').value

      let si = principle * rate * time / 100

      document.getElementById('info').innerHTML = si
    }  

    <===  Object  ===>

      let person = {
        fname: "Dipesh",
        lname: "Chaudhary",
        age: 19,
        location: "Bardiya",
        fullname: function(){
         return this.fname +" "+ this.lname
          
        }
      }
document.writeln(person.fullname())  */

let value = 2
let a = (Math.random()*6).toFixed(0)
//let a = Math.sqrt(64)
//let a = Math.pow(2,3)
//let a = Math.round(value)
//let a = Math.PI
document.writeln(a) 