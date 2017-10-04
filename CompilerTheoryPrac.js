/*
Compiler Theory
1.Tokenizing/Lexing
2.Parsing:"AST" (Abstract Syntax Tree).
	VariableDeclaration ,Identifier ,AssignmentExpression ,NumericLiteral
3.Code-Generation
---------------------------------------------------------------------------------------------
Understanding Scope
The Cast
1.Engine: responsible for start-to-finish compilation and execution of our JavaScript program
2.Compiler: one of Engine's friends; handles all the dirty work of parsing and codegeneration
3.Scope: another friend of Engine; collects and maintains a look-up list of all the declared
identifiers (variables), and enforces a strict set of rules as to how these are accessible
to currently executing code.
-----------------------------------------------------------------------------------------------
Compiler will instead proceed as:
1. Encountering var a , Compiler asks Scope to see if a variable a already exists for
that particular scope collection. If so, Compiler ignores this declaration and moves on.
Otherwise, Compiler asks Scope to declare a new variable called a for that scope
collection
2. Compiler then produces code for Engine to later execute, to handle the a = 2
assignment. The code Engine runs will first ask Scope if there is a variable called a
accessible in the current scope collection. If so, Engine uses that variable. If not, Engine
looks elsewhere

If Engine eventually finds a variable, it assigns the value 2 to it. If not, Engine will raise its
hand and yell out an error
---------------------------------------------------------------------------------------------------
"Strict Mode" , which was added in ES5, has a number of different behaviors
from normal/relaxed/lazy mode
-------------------------------------------------------------------------------------------------
Scope Work
There are two predominant models for how scope works. The first of these is by far the most
common, used by the vast majority of programming languages. It's called Lexical Scope,
and we will examine it in-depth. The other model, which is still used by some languages
(such as Bash scripting, some modes in Perl, etc.) is called Dynamic Scope.
*/


//*************************** */
var d = function () { };

var c = d();

console.log(c);
//undefined
console.log(d);//ƒ (){}

//***************************
var d = function () { };

function e() { };

var c = e();

console.log(d);//ƒ (){}
console.log(e);//ƒ e(){}
console.log(c);//undefined

//***************************
var x = y();

function y() { console.log("This is function y") };

console.log(x); // Executing function y() and prints "This is function y" and prints x value as "Undefined"
console.log(y);
// ƒ y(){console.log("This is function y")}
console.log(y());//This is function y. and undefind.
//*************************************
var a = b();

function b() { console.log("Hello") };

var d = function () { console.log("Print Function d") };

console.log(a);//Executing function b() and prints "Hello" and prints a value "undefined" 
console.log(b);//ƒ b() {console.log("Hello")}
console.log(b());//Hello.,Undefined
console.log(d);// ƒ () {console.log("Print Function d")} and undefined

//*************************************************************
var a = b();

console.log(a);//  not defined.,undefined

console.log(b);// ƒ b() {console.log("not defined")}

console.log(b());//not defined.., undefined
console.log(d);// ƒ () {console.log("Print Function d")}., undefined

function b() { console.log("not defined") };

var d = function () { console.log("Print Function d") };

 

//*********************************************************
var a = b();

function b() { console.log("function b executed") };

console.log(a);// function b executed.,undefined

//************************************************************