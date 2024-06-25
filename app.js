"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = '';
personName = prompt('What is your name?') || '';
if (personName !== null && personName !== '') {
    alert('Hello ${personName}, Would you like to learn some Python today?');
}
else {
    alert('You have to fill your name!');
}
