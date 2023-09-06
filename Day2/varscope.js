// Variable Scope
// Function Scope  ----> could not declare from outsideof function
// global Scope   ----->can declare from outsideof function
// Block Scope ----> if you "let" keyword used is block scope otherwise not ... it not declare from outside

myfunction();

function myfunction(){
    let CarName = "Aadi";
    var demoElement = document.querySelector(".demo1");
    demoElement.innerHTML = typeof CarName + " " + CarName;
}
document.getElementById("demo2").innerHTML = typeof CarName;

// getElementById --> getElementById("idname").innerHTML = .....;
// if you call class
// To store in separate variable...
// var demoElement = document.querySelector(".demo1"); ---> mention class name within quotes and "." infornt of class name 
// demoElement.innerHTML = typeof CarName + " " + CarName;