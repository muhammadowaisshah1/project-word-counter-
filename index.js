#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let counter = await inquirer_1.default.prompt({
    name: "word",
    type: "input",
    message: chalk_1.default.bold.cyan("Please Enter your sentence to count words")
});
let words_Counter = counter.word.trim().split(" ");
console.log(chalk_1.default.blue(words_Counter));
console.log(chalk_1.default.green.bold(`These are your words ${words_Counter.length}`));
