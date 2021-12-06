export function DisplayImg($road){
 const $soni = document.createElement("img");

  $soni.classList.add("soni");
  $soni.src = "app/assets/images/waiting-slow.gif";
  $soni.alt = "Soni running";

  $road.classList.add("practice", "practice__fondo");
  $road.appendChild($soni);

  return $road;
}