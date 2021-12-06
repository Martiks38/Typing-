import { searchText } from "../helpers/searchText.js";

export function DisplayText($text){

 $text.classList.add("practice", "practice__text");
 $text.appendChild(searchText());

 $text.querySelector("p").style.filter = "blur(3px)";

 setTimeout(() => {
  $text.querySelector("p").style.filter = "blur(0)";
 }, 3000);

 return $text;
}