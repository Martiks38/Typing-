import DATA from "../helpers/data.js";

export function Menu(){
 
 const $nav = document.createElement("nav"),
  $ul = document.createElement("ul");
 
 const { ELEMENT_MENU } = DATA;
 
 $nav.classList.add("navBar");
 $ul.classList.add("menu");
 
 ELEMENT_MENU.forEach(item => {
  
  let $li = document.createElement("li");
  
  if(!item[1]){
   $li.innerHTML = `<a href="#">${item[0]}</a>`;
  }else{
   let $subUl = document.createElement("ul");
   $subUl.classList.add("subMenu");

   $li.innerHTML = `<span>${item[0]}</span>`;
   
   item[1].forEach(subItem => {
    $subUl.innerHTML += `<li><a href="#">${subItem}</a></li>`;
   });
   $li.appendChild($subUl);
  }
  $ul.appendChild($li);
 });
 $nav.appendChild($ul);

 return $nav;
}
