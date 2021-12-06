import data from "../helpers/data.js";
import { showScore } from "../helpers/showScore.js";

export function EstadisticaSemanal(){
  const { SCORE } = data;

  const $aside = document.createElement("aside"),
    $button = document.createElement("input");

  $aside.classList.add("modal");
  
  $button.classList.add("exit");
  $button.type = "button";
  $button.value = "X";
  
  $button.addEventListener("click", e => {
    if(!(e.target === $button)) return false;
    
    location.hash = "#/";
  });
  
  $aside.appendChild($button);
    
  fetch(SCORE)
    .then(async response => {

      if(!response.ok) 
        throw {"Error:": 404, "TextContent:": "No se ha hallado el archivo con la información requerida"};
      
      return await response.json();
    })
    .then(json => {
      Object.entries(json).forEach(score => {
        $aside.appendChild(showScore(score[1]));
      });

    })
    .catch(error => {
      $aside.appendChild(showScore(error));
      console.error(error, `Error ${error.status}: ${error.statusText}`);
    });
 
  return $aside;
}