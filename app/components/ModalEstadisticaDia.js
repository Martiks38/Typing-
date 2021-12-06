import { showScore } from "../helpers/showScore.js";

export function EstadisticaDia(){
 
 const $aside = document.createElement("aside"),
 $button = document.createElement("input");

 const score = JSON.parse(localStorage.getItem("scoare"));
 
 $aside.classList.add("modal");
 
 $button.classList.add("exit");
 $button.type = "button";
 $button.value = "X";
 
 $button.addEventListener("click", e => {
  if(!(e.target === $button)) return false;
  
  location.hash = "#/";
 });
 
 $aside.appendChild($button);
 $aside.appendChild(showScore(score));

 return $aside;
}