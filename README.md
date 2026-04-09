# lvl3-w1-d3-assignment
Build a small Node.js project that shows you can initialize an app, use modules, and install a library.

prompt
import prompt from "prompt-sync";
const input = prompt();

cowsay
npm i cowsay
import { say } from 'cowsay';
console.log(say({ text: 'grazing in the browser' }));


console.log(say({ text: 'grazing in the browser' }));

cat-ascii-faces
var cats = require('cat-ascii-faces')
or 
import cats from "cat-ascii-faces'
console.log(cats()) // returns a random cat
ლ(=ↀωↀ=)ლ
cats.cats  // all the cats in an array
cats.catStream() // a readable stream of all cats
e.g. cats.catStream().pipe(process.stdout)

chalk
import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));
themes:
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
console.log(error('Error!'));
console.log(warning('Warning!'));

figlet
import figlet from "figlet";

Input Text - A string of text to turn into ASCII Art.
Options - Either a string indicating the font name or an options object (description below).
Callback - Optional function to execute with the generated ASCII Art.

example

figlet.text(
  "Boo!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

get all available fonts:
figlet.fonts(function (err, fonts) {
  if (err) {
    console.log("something went wrong...");
    console.dir(err);
    return;
  }
  console.dir(fonts);
});