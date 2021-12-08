import data from "../helpers/data.js";

export function  Score(){
 const $score = document.createElement("aside"),
  $scoreContent = document.createElement("article"),
  $h3 = document.createElement("h3");

 const { server } = data;

 $score.classList.add("score");

 $h3.innerHTML = `PUNTAJES`;
   
 $scoreContent.classList.add("score__content");
 $scoreContent.appendChild($h3);
 $score.appendChild($scoreContent);

 fetch(server)
  .then( async response => {

   if(!response.ok) throw {status: 404, statusText: "No se ha hallado el archivo con la información requerida"};   
   
   let obj = await response.json();

   return obj.scores;
  })
  .then(scores => {
   
   if(scores.length === 0){
    const $p = document.createElement("p");

    $p.textContent = "No hay estadísticas previas";
    $scoreContent.appendChild($p);

    return $score;
   }
   
   const $section = document.createElement("section"),
    $table = document.createElement("table"),
    $tbody = document.createElement("tbody");

    let maximo = scores.length >= 3 ? 3 : scores.length;

   $section.classList.add("scoreCard");

   maximo === 3 ? $scoreContent.classList.add("score__show") : $scoreContent.classList.remove("score__show");
  
   for(let ind = 0; ind < maximo; ind++){
    $tbody.innerHTML = `
     <tr>
      <td>p.p.m</td><td>${scores[ind].ppm}</td>
     </tr> 
     <tr>
      <td>Errores</td><td>${scores[ind].errores}</td>
     </tr> 
     `;

     $table.appendChild($tbody);
     $section.appendChild($table);

     let $clone = document.importNode($section, true);
     $scoreContent.appendChild($clone);
    }
  })
  .catch(error => {
   console.warn(`Error ${error.status}: ${error.statusText}`);
  });
  
  return $score;
}
