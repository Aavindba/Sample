var a = b();
var c = d();
a;
c;

function b() {
    return c;
}

var d = function () {
    return b();
}
/*****************************************************************************************************
Compilation:
Line 1: Hey global scope, I have a declaration for a variable named a.
Line 2: Hey global scope, I have a declaration for a variable named c.
Line 3: Hey global scope, a was registered on line 1 
Line 4: Hey global scope, c was registered on line 2
Line 6: Hey global scope, I have a declaration for a function1 b.
Line 10: Hey global scope, I have a declaration for a variable name d.

Execution:

line 1 : Hey global scope, I have an LHS reference for variable called a, do you have it ?
=> The global scope has it and give it to perform the assignment.

line 2 : Hey global scope, I have an LHS reference for variable called c, do you have it ?
=> The global scope has it and give it to perform the assignment.

line 3 : Hey global scope, I have an RHS reference for variable called a, do you have it ?
=> The global scope has because a was registered on line 1 in the compilation phase, its value is b().

line 4 : Hey global scope, I have an RHS reference for variable called c, do you have it ?
=> The global scope has because c was registered on line 2 in the compilation phase, its value is d().

**********************************************************************************************************/

var foo = 'bar';
function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        baz = "yay";
    }
    baz();
}

bar();
console.log(foo);
console.log(bam);
baz();

/*
Compilation:
Line 38: Hey global scope, I have a declaration for a variable named foo.
Line 39: Hey global scope, I have a declaration for a function named bar.
Line 40: Hey bar scope, I have a declaration for a variable named foo.
Line 42: Hey bar scope, I have a declaration for a function named baz.
Line 43: Hey baz scope, I have a declaration for a parameter named foo.

Execution:

Line 38: Hey global scope, I have an LHS reference for a variable named foo. Ever heard of it?
The global scope has because foo was registered on line 38 in the compilation phase, so the assignment occurs.

Line 49: Hey global scope, I have an RHS reference for a variable named bar. Ever heard of it?
The global scope has because bar was registered as a function on line 39 in the compilation phase, so the function executes.

Line 40: Hey bar scope, I have an LHS reference for a variable named foo. Ever heard of it?
The bar scope has because foo was registered on line 38 in the compilation phase, so the the assignment occurs.

Line 46: Hey bar scope, I have an RHS reference for a variable named baz. Ever heard of it?
The bar scope has because baz was registered as a function on line 42 in the compilation phase, so the function executes.

Line 43: Hey baz scope, I have an LHS reference for a variable named foo. Ever heard of it?
The baz scope has because foo was declared as a parameter of the baz function on line 42 in the compilation phase, so the assignment occurs.

Line 44: Hey baz scope, I have an LHS reference for a variable named bam. Ever heard of it?
The baz scope has not. Therefore we look for bam in the next outer scope, the bar scope.

Line 44: Hey bar scope, I have an LHS reference for a variable named bam. Ever heard of it?
The bar scope has not. Therefore we look for bam in the next outer scope, the global scope.

Line 44: Hey global scope, I have an LHS reference for a variable named bam. Ever heard of it?
The global scope has not. Therefore the global scope automatically registers a variable named bam.

Line 50: Hey global scope, I have an RHS reference for a variable named foo. Ever heard of it?
The global scope has because foo was declared on line 38 in the compilation phase, its value is the string “bar”.

Line 51: Hey global scope, I have an RHS reference for a variable named bam. Ever heard of it?
The global scope has because bar was automatically created two steps back, its value is the string “yay”.

Line 52
: Hey global scope, I have an RHS reference for a variable named baz. Ever heard of it?
The global scope has not because baz was exists in the function scope of bar. Therefore, baz is inaccessible to the global scope and a reference error is thrown.

*/