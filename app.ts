import { allowedNodeEnvironmentFlags } from "process";

// Personal message: store a name in a variable, and print a message to that person.
//Your message shuold be simple, such as "hello world" , would you like to to learn some python today?  

let personName :string ='Eric';

personName =prompt('What is your name?') || '';

if(personName !== null && personName !==''){
    alert ('Hello ${personName}, Would you like to learn some Python today?')
}
else{
    alert('You have to fill your name!')
}