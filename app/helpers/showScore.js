export function showScore(scores){

 const $article = document.createElement("article"),
 $section = document.createElement("section"),
 $table = document.createElement("table"),
 $tbody = document.createElement("tbody"),
 $tr = document.createElement("tr");

 $section.classList.add("scoreCard");

 if (!scores){
  const $div = document.createElement("div");

  $div.innerHTML = "<p>No hay estadísticas previas.<br>Juega ahora mismo!!!</p>";

  return $div;
 }
 
 scores.forEach(scoreData => {
  $tbody.innerHTML = null;
  Object.entries(scoreData).forEach(data => {
   $tr.innerHTML = `<td>${data[0]}</td><td>${data[1]}</td>`;
 
   let $clone = document.importNode($tr, true);
   $tbody.appendChild($clone);
  });
  $table.appendChild($tbody);
  $section.appendChild($table);

  let $clone = document.importNode($section, true);
  $article.appendChild($clone);
 })
 document.querySelector(".content").classList = "content";
 document.querySelector(".content").classList.add("content__stats");
 
 document.querySelector(".content").innerHTML = null;
 document.querySelector(".content").insertAdjacentElement("beforeend", $article);
}