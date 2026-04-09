"use strict";

import chalk from "chalk";
import boxen from "boxen";
import { say } from "cowsay";
const cowWisdom = [
  "The pasture is greenest for those who do not fence themselves in.",
  "Moo-ve with the spirit, and the path shall reveal itself.",
  "To find the truth, one must first chew the cud of reflection.",
  "Do not follow the herd; the secret clover grows in silence.",
  "The wise bull does not rush the gate before it is unlatched.",
  "A heavy bell does not mean the cow is lost.",
  "Seek the milk of wisdom, not the froth of the pail.",
  "The sky is vast, yet the cow remains grounded in the grass.",
  "One cannot find the barn if one is afraid of the mud.",
  "The butter of enlightenment is churned from the cream of patience.",
  "Steer your own course, for the rancher only knows the destination.",
  "Wait for the dew to dry, and the clover will taste sweeter.",
  "A closed gate is merely an invitation to find another field.",
  "The udder of destiny flows for those who remain calm.",
  "Be like the calf: curious, yet never far from the source.",
  "The wind whispers to the willow, but the cow just grazes on.",
  "Your horns are for balance, not for unnecessary bumping.",
  "He who seeks the hoofprint often misses the beast.",
  "The barn door of the heart must be swung wide to let in the light.",
  "To jump over the moon, one must first master the meadow.",
  "Even the sturdiest fence cannot contain a wandering soul.",
  "The salt lick of life is best enjoyed one lick at a time.",
  "Do not mistake the leather for the life that once wore it.",
  "The grass grows by itself; the cow simply appreciates the buffet.",
  "True peace is found when the tail swats the fly without effort.",
];
const eyeOptions = ["oo", "^^", "oO", "xx", "99", "66", "@@", "<<", ">>", ".."];
const tongueOptions = ["U ", " U", "  "]

export function cowResponse() {
  const cowAdvice = cowWisdom[Math.floor(Math.random() * cowWisdom.length)];
  const eyes = eyeOptions[Math.floor(Math.random() * eyeOptions.length)];
  const tongue = tongueOptions[Math.floor(Math.random() * tongueOptions.length)];

    const cowBubble = boxen(cowAdvice, { padding: 1, borderStyle: "classic" });
    console.log(
      say({
        text: cowBubble,
        e: eyes,
        T: tongue,
      }),
    );

    }

