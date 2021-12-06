import { DisplayImg } from "./DisplayImg.js";
import { DisplayInput } from "./DisplayInput.js";
import { DisplayText } from "./DisplayText.js";

export function PracticaTextos(){
 const $road = document.createElement("section"),
  $text = document.createElement("section"),
  $writingPad = document.createElement("section");

  document.querySelector(".content").classList.add("content__practice");

  return [DisplayImg($road), DisplayText($text), DisplayInput($writingPad)];
}