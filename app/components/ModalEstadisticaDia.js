export function EstadisticaDia(){
 
 const score = JSON.parse(localStorage.getItem("day"));
 
 const $aside = document.createElement("aside"),
 $section = document.createElement("section"),
 $button = document.createElement("input"),
 $table = document.createElement("table"),
 $tbody = document.createElement("tbody"),
 $tr = document.createElement("tr");;
 
 
 $button.type = "button";
 $button.value = "X";
 
 $aside.classList.add("modal", "modal__dia");
 $section.classList.add("scoreCard");
 $button.classList.add("exit");

 $aside.appendChild($button);
 
 $button.addEventListener("click", e => {
  if(!(e.target === $button)) return false;
  
  location.hash = "#/";
 });

 if (!score){
  $aside.innerHTML = "<p>No hay estadísticas previas. Juega ahora!!!</p>";

  return $aside;
 }

 Object.entries(score).forEach(scoreData => {
  $tr.innerHTML = `<td>${scoreData[0]}</td><td>${scoreData[1]}</td>`;

  let $clone = document.importNode($tr, true);

  $tbody.appendChild($clone);
 })

 $table.appendChild($tbody);
 $section.appendChild($table);
 $aside.appendChild($section);

 return $aside;
}