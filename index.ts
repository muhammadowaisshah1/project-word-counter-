#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"


let counter=await inquirer.prompt({
    name:"word",
    type:"input",
    message:chalk.bold.cyan("Please Enter your sentence to count words")
})

let words_Counter=counter.word.trim().split(" ")

console.log(chalk.blue(words_Counter));

console.log(chalk.green.bold(`These are your words ${words_Counter.length}`))

