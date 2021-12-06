import { Home } from "./Home.js";
import { EstadisticaDia } from "./ModalEstadisticaDia.js";
import { EstadisticaSemanal } from "./ModalEstadisticaSemanal.js";
import { PracticaTextos } from "./PracticaTextos.js";

export function Router(){
 const { hash } = location;
 
 const routes = {
  "#/": () => {
    Home()
  },
  "#/estadisticas/semanal" : () => {
    location.reload();
   document.querySelector("main").appendChild(EstadisticaSemanal());
  },
  "#/estadisticas/dia": () => {
   document.querySelector("main").appendChild(EstadisticaDia());
  },
  // "#/practicar/teclas": () => {

  // },
  "#/practicar/textos": () => {
    document.querySelector(".content").innerHTML = null;
if(sessionStorage.getItem("score")){
    const $button = document.createElement("button");

    let score = JSON.parse(sessionStorage.getItem("score"));
    
    $button.innerHTML = '<i class="fas fa-redo-alt"></i>';
    $button.classList.add("retry");

    document.querySelector(".content").classList.add("content__results");
    document.querySelector(".content").innerHTML = `
      <section class="scoreCard">
        <table>
          <tbody>
            <tr>
              <td>Tiempo:</td>
              <td>${score.tiempo}</td>
            </tr> 
            <tr>
              <td>Pulsaciones:</td>
              <td>${score.pulsaciones}</td>
            </tr>
            <tr>
              <td>ppm:</td>
              <td>${score.ppm}</td>
            </tr>
            <tr>
              <td>wpm:</td>
              <td>${score.wpm}</td>
            </tr>
            <tr>
              <td>Errores:</td>
              <td>${score.errores} (${score.errorPorcentual}%)</td>
            </tr>
          </tbody>
        </table>
      </section>`;

      document.querySelector(".content").appendChild($button);
      sessionStorage.removeItem("score");

      $button.addEventListener("click", () => location.reload());
  }else{
    document.querySelector(".content").classList.remove("content__home");
  
    PracticaTextos().forEach(section => document.querySelector(".content").appendChild(section));
  
    document.querySelector("input").focus();
  }
  }
 }

 if(document.querySelector(".modal")){
  let nodo = document.querySelector(".modal");
  document.querySelector("main").removeChild(nodo); 
 }

 !hash ? routes["#/"]() : routes[hash]();
}
