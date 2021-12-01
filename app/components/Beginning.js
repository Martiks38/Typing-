import { Content } from "./Content.js";
import { Score } from "./Score.js";

export function Beginning(){
 const $main = document.createElement("main");

 $main.classList.add("home");

 $main.appendChild(Score());
 $main.appendChild(Content());
 
 return $main; 
}
