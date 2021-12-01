import { Home } from "./Home.js";
import { EstadisticaDia } from "./ModalEstadisticaDia.js";
import { EstadisticaSemanal } from "./ModalEstadisticaSemanal.js";

export function Router(){
 const { hash } = location;
 
 const routes = {
  "#/": () => {
    Home()
  },
  "#/estadisticas/semanal" : () => {
   document.querySelector("main").appendChild(EstadisticaSemanal());
  },
  "#/estadisticas/dia": () => {
   document.querySelector("main").appendChild(EstadisticaDia());
  }
 }

 if(document.querySelector(".modal")){
  let nodo = document.querySelector(".modal");
  document.querySelector("main").removeChild(nodo); 
 }

 !hash ? routes["#/"]() : routes[hash]();

 // if(routes.hasOwnProperty(hash)){
 //   ;
 // }else if(routes.hasOwnProperty(hash)){
 //  routes[hash]();
 // }else if(hash.includes("textos")){
  // console.log("textos")
}
