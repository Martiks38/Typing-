import data from "./data.js";
import { highlightWord } from "./highlightWord.js";

export function searchText(){
 const { TEXTS } = data,
  $p = document.createElement("p");

 fetch(TEXTS)
 .then( async response => {

  if(!response.ok) throw {status: 404, statusText: "EggMan se robó los textos. Sonic se está encargando de ello vuelve más tarde 😃"}

  return await response.json();
 })
 .then(json => {
  let texts = Object.values(json),
    index = Math.floor(20 * Math.random());
    // index = Math.floor(Math.random());

  $p.innerHTML = highlightWord(texts[index]);
 })
 .catch(error => {
  $p.textContent = `Error ${error.status}<br>${error.statusText}`;
 });
 
 return $p;
}