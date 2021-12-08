import { Comments } from "./form/Comment.js";
import { Home } from "./Home.js";
import { PracticaTextos } from "./PracticaTextos.js";
import { ShowStats } from "./ShowStats.js";
import { Score } from "./Score.js";

export function Router(){
  const { hash } = location;
 
  const routes = {
    "#/": () => {
      document.querySelector(".content").classList = "content";
      document.querySelector(".content").classList.add("content__home");
      Home();
    },
    "#/comentario": () => {
      document.querySelector("main").innerHTML = null;
      document.querySelector("main").classList.add("home__form");
      document.querySelector("main").appendChild(Comments());
    },
    "#/estadisticas/semanal" : () => {
      ShowStats("semana");
    },
    "#/estadisticas/dia": () => {
      ShowStats("dia");
    },
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
  
  if(!document.querySelector(".score__content")) document.querySelector("main").appendChild(Score());

  setTimeout(() => {
    let top = document.querySelector(".content").getBoundingClientRect().top;
    document.querySelector(".score__content").style.top = `${top}px`;
  }, 200);


  !hash ? routes["#/"]() : routes[hash]();
}
