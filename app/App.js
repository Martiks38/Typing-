import { Header } from "./components/Header.js";
import {Beginning} from "./components/Beginning.js";
import { Menu } from "./components/Menu.js";
import { Router } from "./components/Router.js";
import { control } from "./helpers/control.js";

export function App(){
  const $root = document.querySelector(".root");

  if(!localStorage.getItem("reset")){
   let setting = {
    week: new Date().getWeekNumber(),
    today: new Date().getDay()
   };

   localStorage.setItem("reset", JSON.stringify(setting));
  }

  control();

  $root.insertAdjacentElement("afterbegin", Beginning());
  $root.insertAdjacentElement("afterbegin", Menu());
  $root.insertAdjacentElement("afterbegin", Header());

  Router();
}
