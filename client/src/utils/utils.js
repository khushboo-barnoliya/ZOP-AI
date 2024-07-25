import { surpriseMePrompts } from "../constant/index.js";

export const getRandomPrompts = (ranPrompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === ranPrompt){
    return getRandomPrompts(ranPrompt);
  }


  return randomPrompt;
}