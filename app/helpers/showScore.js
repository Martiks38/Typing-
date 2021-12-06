export function showScore(score){

 const $section = document.createElement("section"),
 $table = document.createElement("table"),
 $tbody = document.createElement("tbody"),
 $tr = document.createElement("tr");;
 
 $section.classList.add("scoreCard");

 if (!score || Object.keys(score).length === 0){
  const $div = document.createElement("div");

  $div.classList.add("scoreCard", "scoreCard__error")
  $div.innerHTML = "<p>No hay estadísticas previas.<br>Juega ahora mismo!!!</p>";

  return $div;
 }

 Object.entries(score).forEach(scoreData => {
  $tr.innerHTML = `<td>${scoreData[0]}</td><td>${scoreData[1]}</td>`;

  let $clone = document.importNode($tr, true);

  $tbody.appendChild($clone);
 })

 $table.appendChild($tbody);
 $section.appendChild($table);

 return $section;
}