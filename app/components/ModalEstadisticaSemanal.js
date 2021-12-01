import DATA from "../helpers/data.js";

export function EstadisticaSemanal(){
 const $aside = document.createElement("aside"),
  { URL } = DATA;

 $aside.classList.add("modal", "modal__semanal");

 fetch(URL)
  .then(async response => {
   return response.ok 
    ? await response.json()
    : {status: response.status, statusText: response.statusText};
  })
  .then(json => {
    const $button = document.createElement("input");
    
    $button.type = "button";
    $button.value = "X";
    $button.classList.add("exit");

    Object.entries(json).forEach(score => {
      const $section = document.createElement("section"),
        $table = document.createElement("table"),
        $tbody = document.createElement("tbody"),
        $tr = document.createElement("tr");
  
      $section.classList.add("scoreCard");
      Object.entries(score[1]).forEach(scoreData => {
        $tr.innerHTML = `<td>${scoreData[0]}</td><td>${scoreData[1]}</td>`;
        
        let $clone = document.importNode($tr, true);
        
        $tbody.appendChild($clone);
      });

      $table.appendChild($tbody);
      $section.appendChild($table);
      $aside.appendChild($button);
      $aside.appendChild($section);
      
      $button.addEventListener("click", e => {
        if(!(e.target === $button)) return false;
        
        location.hash = "#/";
      });
    });
  })
  .catch(error => {
   console.log(error)
  });

 return $aside;
}