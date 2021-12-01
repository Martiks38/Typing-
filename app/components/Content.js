import { CardContent } from "./CardContent.js";
import DATA from "../helpers/data.js";

export function Content(){
 const $article = document.createElement("article");
 
 $article.classList.add("content");

 return $article;
}
