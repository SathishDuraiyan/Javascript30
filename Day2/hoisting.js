// hoisting 
addDeclaration(); 

function addDeclaration() {
    console.log('adding declaration');
};

// Function Expression
let addExpression = function(){
    console.log('adding expression');
}
addExpression();