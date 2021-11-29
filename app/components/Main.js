import { ContentHome } from "./ContentHome.js";
import { Score } from "./Score.js";

export function Main(){
 const $main = document.createElement("main");

 $main.appendChild(Score());
 $main.appendChild(ContentHome());

 return $main; 
}
