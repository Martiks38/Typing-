export function Score(){
 const $score = document.createElement("aside"),
  $h3 = document.createElement("h3");
 
 $score.classList.add("score");
 $h3.innerHTML = "PUNTAJES";

 $score.appendChild($h3);

 return $score;
}
