# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

error

1b. Test the function. Explain why the function returned what it did.

  Your answer:
  
  undefined

  Researched answer:
  
  You are overriding the variable text.The reason is that inside the function there is a variable called text from the parent scope or global scope and you are changing it then disposing of it as you leave the function.


2. What is JSON?

  Your answer: javascript object notation

  Researched answer:
  
  JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications 


3. What does CRUD stand for?

  Your answer: 
  
  dont know

  Researched answer: 
  
  Express is a framework for building web applications on top of Node. js. It simplifies the server creation process that is already available in Node. In case you were wondering, Node allows you to use JavaScript as your server-side language. MongoDB is a database.



4. What does are the 5 HTTP verbs?

  Your answer: 
  
  dont know 

  Researched answer:
  
  The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE.


5. What is a higher-order function?

  Your answer: 
  
  .map() .filter()

  Researched answer: 
  
  Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:
  
  dont know 

  Researched answer:
  
  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.


7. STRETCH: What is an API?

  Your answer:
  
  dont know

  Researched answer:

  A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?



2. What was your favorite topic this week?
react state 


3. What was your "A-ha!" moment this week?
when i realized that react is almost like working with classes 