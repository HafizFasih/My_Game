#! /usr/bin/env node
import inquirer from "inquirer";
let computerGuessed = Math.floor(Math.random() * 3 + 1);
let result = "";
if (computerGuessed === 1) {
    result = "rock";
}
else if (computerGuessed === 2) {
    result = "paper";
}
else {
    result = "scissor";
}
const answer = await inquirer.prompt([
    {
        name: "userGuessed",
        type: "list",
        message: "SELECT ONE OF THE FOLLOWING: ",
        choices: ["rock", "paper", "scissor"]
    }
]);
if (result === "paper" && answer.userGuessed === "rock" || result === "rock" && answer.userGuessed === "scissor" || result === "scissor" && answer.userGuessed === "paper") {
    console.log("YOU HAVE BEEN DEFEATED.");
    console.log(`The computer selected ${result}`);
}
else if (result === "paper" && answer.userGuessed === "scissor" || result === "rock" && answer.userGuessed === "paper" || result === "scissor" && answer.userGuessed === "rock") {
    console.log("CONGRATULATIONS YOU WIN.");
    console.log(`The computer selected ${result}`);
}
else if (result === "paper" && answer.userGuessed === "paper" || result === "rock" && answer.userGuessed === "rock" || result === "scissor" && answer.userGuessed === "scissor") {
    console.log("TIE.");
    console.log(`The computer selected ${result}`);
}
else {
    console.log("Please choosa a valid option.");
}
