import { CardContent } from "./CardContent.js";
import DATA from "../helpers/data.js";

export function ContentHome(){
 const $article = document.createElement("article");
 const { IMGS } = DATA;

 $article.classList.add("content");

 IMGS.forEach(img => {
  $article.appendChild(CardContent(img));
 })

 return $article;
}
