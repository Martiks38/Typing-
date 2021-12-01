import data from "../helpers/data.js";
import { CardContent } from "./CardContent.js";

export function Home(){
  const $article = document.querySelector(".content");
  const { IMGS } = data;
  $article.classList.add("content__home");

  $article.innerHTML = null;

 IMGS.forEach(img => {
  $article.appendChild(CardContent(img));
 })

 document.addEventListener("click", e => {
  if(!e.target.closest(".practiceCard")) return false;

  let $article = document.querySelector(".content");

  e.target.parentNode === $article
   ? location.hash = `#/${e.target.dataset.id}`
   : location.hash = `#/${e.target.parentNode.dataset.id}`;
 });
}