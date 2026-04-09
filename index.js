"use strict";

import figlet from "figlet";
import cats from "cat-ascii-faces";
import prompt from "prompt-sync";
import { cowResponse } from "./magicCow.js";

const input = prompt();

figlet.text(
  "You found a Magic Cow!",
  {
    font: "Future Smooth",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  },
);

setTimeout(() => {
  const userQuestion = input("Approach the Magic Cow and ask your question-->");
  console.log(cats() + " You said -- ( " + userQuestion + " )");
  setTimeout(() => {
    cowResponse();
  }, 3000);
}, 3000);
