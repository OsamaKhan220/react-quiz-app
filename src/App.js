import React, { Component } from 'react';
import { Grid, Navbar, NavItem,Nav , Button} from 'react-bootstrap';
import './App.css';
import LoginPage from './login/login';
import SignupPage from './login/signup';
import QuizListScreen from './screens/quizListScreen';
import OpenQuiz from './screens/openQuiz';
import StartQuiz from './screens/start';
import McqsPage from './screens/mcqz';
import ResultPage from './screens/result';
import ResultPage2 from './screens/result2';

class App extends Component {

  constructor(){
    super();

    this.upDateLocalStorage();
    
    this.state = {
      quizList:[
        {name: "JavaScript",list: [
         {
           key: 12312,
           time: '50 min',
           questions: 
           [
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        },
        {
          key: 123120,
          time: '10 min',
          questions: 
          [
            {
              question: "How do you write 'Hello World' in an alert box?",
              options:['msg("Hello World");','alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");'],
              ans: 'alert("Hello World");'
            },
            {
              question: "How do you create a function in JavaScript?",
              options:["function:myFunction()","function = myFunction()","function myFunction()"],
              ans: "function myFunction()"
            },
            {
              question: "How do you call a function named 'myFunction'?",
              options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
              ans: "myFunction()"
            },
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        },
        {
          key: 123120,
          time: '5 min',
          questions: 
          [
            
            {
              question: "How do you create a function in JavaScript?",
              options:["function:myFunction()","function = myFunction()","function myFunction()"],
              ans: "function myFunction()"
            },
            {
              question: "How do you call a function named 'myFunction'?",
              options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
              ans: "myFunction()"
            },
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        },
        {
          key: 123120,
          time: '30 min',
          questions: 
          [
            {
              question: "How to write an IF statement in JavaScript?",
              options:['if (i == 5)','if i == 5 then','if i = 5','if i = 5 then'],
              ans: 'if (i == 5)'
            },
            {
              question: "How do you create a function in JavaScript?",
              options:["function:myFunction()","function = myFunction()","function myFunction()"],
              ans: "function myFunction()"
            },
            {
              question: "How do you call a function named 'myFunction'?",
              options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
              ans: "myFunction()"
            },
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        },
        {
          key: 123120,
          time: '10 min',
          questions: 
          [
            {
              question: "How does a WHILE loop start?",
              options:['while i = 1 to 10','while (i <= 10)','while (i <= 10; i++)'],
              ans: 'while (i <= 10)'
            },
            {
              question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
              options:['if i =! 5 then','if (i != 5)','if i <> 5','if (i <> 5)'],
              ans: 'if (i != 5)'
            },
            {
              question: "How do you write 'Hello World' in an alert box?",
              options:['msg("Hello World");','alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");'],
              ans: 'alert("Hello World");'
            },
            {
              question: "How do you create a function in JavaScript?",
              options:["function:myFunction()","function = myFunction()","function myFunction()"],
              ans: "function myFunction()"
            },
            {
              question: "How do you call a function named 'myFunction'?",
              options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
              ans: "myFunction()"
            },
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        },
        {
          key: 123120,
          time: '12 min',
          questions: 
          [
            {
              question: "How does a FOR loop start?",
              options:['for i = 1 to 5','for (i = 0; i <= 5; i++)','for (i = 0; i <= 5)','for (i <= 5; i++)'],
              ans: 'for (i = 0; i <= 5; i++)'
            },
            {
              question: "How do you create a function in JavaScript?",
              options:["function:myFunction()","function = myFunction()","function myFunction()"],
              ans: "function myFunction()"
            },
            {
              question: "How do you call a function named 'myFunction'?",
              options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
              ans: "myFunction()"
            },
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        },
        {
          key: 123120,
          time: '50 min',
          questions: 
          [
            {
              question: "How can you add a comment in a JavaScript?",
              options:['This is a comment','//This is a comment','<!--This is a comment-->'],
              ans: '//This is a comment'
            },
            {
              question: "How do you create a function in JavaScript?",
              options:["function:myFunction()","function = myFunction()","function myFunction()"],
              ans: "function myFunction()"
            },
            {
              question: "How do you call a function named 'myFunction'?",
              options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
              ans: "myFunction()"
            },
            {
            question: "Inside which HTML element do we put the JavaScript?",
            options:["<js>","<script>","<scripting>","<javascript>"],
            ans: "<script>"
          },{
            question: "Where is the correct place to insert a JavaScript?",
            options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
            ans: "The <body> section"
          },{
            question: 'What is the correct syntax for referring to an external script called "xxx.js"',
            options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
            ans: '<script src="xxx.js">'
          },{
            question: "The external JavaScript file must contain the <script> tag.",
            options:["True","False"],
            ans: "False"
          },
        ]
        }
       
        ]},
        {name: "HTML",list: [
          {
            key: 12312,
            time: '50 min',
            questions: 
            [{
              question: "What does HTML stand for?",
              options:["Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyper Text Markup Language"],
              ans: "Hyper Text Markup Language"
            },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "Who is making the Web standards?",
               options:['Mozilla','Microsoft','Google','The World Wide Web Consortium'],
               ans: 'The World Wide Web Consortium'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '5 min',
           questions: 
           [
             
             {
               question: "Choose the correct HTML element for the largest heading:",
               options:["<h1>","<h6>","<heading>"],
               ans: "<h1>"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '30 min',
           questions: 
           [
             {
               question: "How to write an IF statement in JavaScript?",
               options:['if (i == 5)','if i == 5 then','if i = 5','if i = 5 then'],
               ans: 'if (i == 5)'
             },
             {
              question: "Choose the correct HTML element for the largest heading:",
              options:["<h1>","<h6>","<heading>"],
              ans: "<h1>"
            },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "What is the correct HTML element for inserting a line break?",
               options:['<br>','<break>','<lb>'],
               ans: '<br>'
             },
             {
               question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
               options:['if i =! 5 then','if (i != 5)','if i <> 5','if (i <> 5)'],
               ans: 'if (i != 5)'
             },
             {
               question: "How do you write 'Hello World' in an alert box?",
               options:['msg("Hello World");','alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");'],
               ans: 'alert("Hello World");'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
        
        
         ]},
        {name: "CSS",list: [
          {
            key: 12312,
            time: '50 min',
            questions: 
            [
             {
             question: "What does CSS stand for?",
             options:["Computer Style Sheets","Cascading Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
             ans: "Cascading Style Sheets"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "What is the correct HTML for referring to an external style sheet?",
               options:['<stylesheet>mystyle.css</stylesheet>','<link rel="stylesheet" type="text/css" href="mystyle.css">','<style src="mystyle.css">'],
               ans: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '5 min',
           questions: 
           [
             
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
              question: "What is the correct HTML for referring to an external style sheet?",
              options:['<stylesheet>mystyle.css</stylesheet>','<link rel="stylesheet" type="text/css" href="mystyle.css">','<style src="mystyle.css">'],
              ans: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
            },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '30 min',
           questions: 
           [
             {
               question: "How to write an IF statement in JavaScript?",
               options:['if (i == 5)','if i == 5 then','if i = 5','if i = 5 then'],
               ans: 'if (i == 5)'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
              question: "What is the correct HTML for referring to an external style sheet?",
              options:['<stylesheet>mystyle.css</stylesheet>','<link rel="stylesheet" type="text/css" href="mystyle.css">','<style src="mystyle.css">'],
              ans: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
            },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "How does a WHILE loop start?",
               options:['while i = 1 to 10','while (i <= 10)','while (i <= 10; i++)'],
               ans: 'while (i <= 10)'
             },
             {
               question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
               options:['if i =! 5 then','if (i != 5)','if i <> 5','if (i <> 5)'],
               ans: 'if (i != 5)'
             },
             {
               question: "How do you write 'Hello World' in an alert box?",
               options:['msg("Hello World");','alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");'],
               ans: 'alert("Hello World");'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },
           {
            question: "What is the correct HTML for referring to an external style sheet?",
            options:['<stylesheet>mystyle.css</stylesheet>','<link rel="stylesheet" type="text/css" href="mystyle.css">','<style src="mystyle.css">'],
            ans: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
          }
           ,{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
        
        
         ]},
        {name: "React",list: [
          {
            key: 12312,
            time: '50 min',
            questions: 
            [
             {
             question: "Everything in React is a _____________",
             options:["Module","Component"],
             ans: "Component"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "In which directory React Components are saved?",
               options:['Inside js/components/','Inside vendor/components/'],
               ans: 'Inside vendor/components/'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '5 min',
           questions: 
           [
             
             {
               question: "How many elements does a react component return?",
               options:["1 Element","2 Element"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '30 min',
           questions: 
           [
             {
               question: "What is state in React?",
               options:['A persistant storage.','An internal data store (object) of a component.'],
               ans: 'An internal data store (object) of a component.'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "What is Babel?",
               options:['A transpiler.','A Compiler that compiles react Code.'],
               ans: 'A transpiler.'
             },
             {
               question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
               options:['if i =! 5 then','if (i != 5)','if i <> 5','if (i <> 5)'],
               ans: 'if (i != 5)'
             },
             {
               question: "How do you write 'Hello World' in an alert box?",
               options:['msg("Hello World");','alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");'],
               ans: 'alert("Hello World");'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '12 min',
           questions: 
           [
             {
               question: "What does the “webpack” command do?",
               options:['Transpiles all the Javascript down into one file','Runs react local development server.'],
               ans: 'Runs react local development server.'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '50 min',
           questions: 
           [
             {
               question: "What port is the default where the webpack-dev-server will run?",
               options:['3306','8080.'],
               ans: '8080.'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         }
        
         ]},
        {name: "MongoDb",list: [
          {
            key: 12312,
            time: '50 min',
            questions: 
            [
             {
             question: "In a collection that contains 100 post documents, what does the following command do'db.posts.find().skip(5).limit(5)'",
             options:["Skip and limit nullify each other. Hence returning the first five documents.",
             "Skips the first five documents and returns the sixth document five times",
             "Skips the first five documents and returns the next five",
             "Limits the first five documents and then return them in reverse order"],
             ans: "Skips the first five documents and returns the next five"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '10 min',
           questions: 
           [
             {
               question: "Which of the following is true about sharding?",
               options:['Sharding is enabled at the database level',
               'alert("Hello World");',
               'Creating a sharded key automatically creates an index on the collection using that key',
               'msgBox("Hello World");'],
               ans: 'Creating a sharded key automatically creates an index on the collection using that key'
             },
             {
               question: "How do you create a function in JavaScript?",
               options:["function:myFunction()","function = myFunction()","function myFunction()"],
               ans: "function myFunction()"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         {
           key: 123120,
           time: '5 min',
           questions: 
           [
             
             {
               question: "Which of the following is the most important consideration while designing the schema for MongoDB?",
               options:["The schema should match the data access and query patterns",
               "The schema should match the data patterns","function myFunction()"],
               ans: "The schema should match the data access and query patterns"
             },
             {
               question: "How do you call a function named 'myFunction'?",
               options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
               ans: "myFunction()"
             },
             {
             question: "Inside which HTML element do we put the JavaScript?",
             options:["<js>","<script>","<scripting>","<javascript>"],
             ans: "<script>"
           },{
             question: "Where is the correct place to insert a JavaScript?",
             options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
             ans: "The <body> section"
           },{
             question: 'What is the correct syntax for referring to an external script called "xxx.js"',
             options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
             ans: '<script src="xxx.js">'
           },{
             question: "The external JavaScript file must contain the <script> tag.",
             options:["True","False"],
             ans: "False"
           },
         ]
         },
         
        
         ]}
      ],
      listDis : true,
      openQuizPage: {},
      startPage: false,
      startedQuiz: {},
      keyChecked: false,
      msqNum: 0,
      length: 0,
      chks: [],
      trues: [],
      result: false,
      rightMcqs: 0,
      percentage: 0,
      user: false,
      result2: false

    }

    this.disableList = this.disableList.bind(this);
    this.back = this.back.bind(this);
    this.startFunc = this.startFunc.bind(this);
    this.keyChecked =this.keyChecked.bind(this);
    this.nextNum = this.nextNum.bind(this);
    this.tr = this.tr.bind(this);
    this.fl = this.fl.bind(this);
    this.finishMsq = this.finishMsq.bind(this);
    this.resulted = this.resulted.bind(this);
    this.resTwo = this.resTwo.bind(this);
    this.startPageBack = this.startPageBack.bind(this);

    var chk= localStorage.getItem('quizAppLogin');
  if(chk == "yes"){
  console.log(chk);

    this.state.user = true;
    if(localStorage.getItem('quizStarted') == 'yes'){
      var thisjs = JSON.parse(localStorage.getItem('thisjs'));
      this.state = thisjs;
    }
  }
  }
    clear(){
        localStorage.removeItem('quizAppLogin');
        window.location.reload();
    }
  render() {

    const { quizList,listDis,openQuizPage,result2,user,startedQuiz,startPage,keyChecked,msqNum,chks,result,length,percentage,trues } = this.state;
    return (
        <Grid fluid={true}>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Welcom To QuizApp</a>
                    </Navbar.Brand>
                </Navbar.Header>
                {user && listDis && <Nav pullRight>
                    <NavItem>
                        <Button bsStyle="primary"  onClick={this.clear}>Logout</Button>
                    </NavItem>
                </Nav>}
            </Navbar>
       {!user && <LoginPage login={this.onLogin}/>}
       {!user && <SignupPage />}
       {user && listDis && <QuizListScreen quizList={quizList} listDisa={this.disableList}/>}
       {user && !listDis && !startPage && <OpenQuiz openQuizPage={openQuizPage} back={this.back}  startFunc={this.startFunc}/>}
       {user && !listDis && startPage && !keyChecked &&!result2 &&  <StartQuiz openQuizPage={openQuizPage} startedQuiz={startedQuiz} keyCheckedFunc={this.keyChecked} thisjs={this.state} startPageBack={this.startPageBack}  resTwo={this.resTwo}/>}
       {user && !listDis && startPage && keyChecked && !result && !result2 && <McqsPage openQuizPage={openQuizPage} startedQuiz={startedQuiz} msqNum={msqNum} nextNum={this.nextNum} finishMsq={this.finishMsq} tr={this.tr} fl={this.fl} thisjs={this.state} resTwo={this.resTwo}/>}
       {user && !listDis && startPage && keyChecked && result && !result2 && <ResultPage length={length} percentage={percentage} trues={trues} resulted={this.resulted} thisjs={this.state}/>}
       {result2 && <ResultPage2 />}
      </Grid>
    );
  }

  resTwo(){
    console.log("chlaa");
    this.setState({
      result2: true,
      
    })
  }
  startPageBack(){
    this.setState({
      startPage: false
    })
  }
  nextNum(){
    console.log("click");
    const { msqNum } = this.state;
    this.setState({
      msqNum: (msqNum+1)
    })
  }
  resulted(){
    localStorage.removeItem('quizStarted');
    localStorage.removeItem('startedQuiz');
    localStorage.removeItem('openQuizPage');
    localStorage.removeItem('msqNum');
  }

  finishMsq(){
    const { chks,startedQuiz,length,result,rightMcqs,trues,percentage } = this.state;
    var len = startedQuiz.questions.length;

    var perc = (trues.length / len * 100);
    this.setState({
        result: true,
        length: len,
        percentage: perc
      })
  }
  tr(){
    const { chks,rightMcqs,trues } = this.state;
    var tr = chks;
    var tr2 = trues;
    tr.push(true);
    tr2.push(true);
    this.setState({chks: tr,trues: trues})
  }
  fl(){
    const { chks,rightMcqs } = this.state;
    var tr = chks;
    
    tr.push(false);
    this.setState({chks: tr})

  }

upDateLocalStorage(){
  console.log('chlgya1');
  var acounts = [
      {name: "osama",email: "osama@gmail.com",password:"123456"},
      {name: "admin",email: "admin",password:"admin"},
  ]
if(localStorage.getItem("accounts")){
  console.log('hai acounts');
}
else{
  localStorage.setItem("accounts",JSON.stringify(acounts));

}
}

chkLogin(){
  var chk= localStorage.getItem('quizAppLogin');
  if(chk == "yes"){
    this.setState({
      user: true
    })
  }

}

 startFunc(index){
    const { startPage,openQuizPage,startedQuiz } = this.state;

    var obj = (openQuizPage.list[index]);
    this.setState({
      startPage: true,
      startedQuiz: obj
    });
  }

  keyChecked(){
    const { keyChecked } = this.state;
    this.setState({keyChecked: true})
  }

  onLogin=()=>{
    console.log("login");
    this.setState({
      user: true
    })
  }
  disableList(res){
    const { listDis,openQuizPage,quizList } = this.state; 

    this.setState({
      listDis: false,
      openQuizPage: quizList[res]
    })
    console.log(res);
  }
  back(){
    const { listDis } = this.state; 
    this.setState({
      listDis: true,
      
    })
  }
}

export default App;
