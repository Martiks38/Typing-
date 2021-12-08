import { showScore } from "../helpers/showScore.js";
import data from "../helpers/data.js"

export function ShowStats(whatShow){ 
 const { server } = data;

 fetch(server)
 .then(async response => {
  
  if(!response.ok) 
    throw {"Error:": 404, "TextContent:": "No se ha hallado el archivo con la información requerida"};

  return await response.json();
 })
 .then(json => {
   whatShow == "dia" ? showScore(json.scoresDay) : showScore(json.scores);
 })
 .catch(err => {
  content.innerHTML = `<p>Error ${err.status}: ${err.statusText}</p>`
 });
}