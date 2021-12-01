import { Header } from "./components/Header.js";
import {Beginning} from "./components/Beginning.js";
import { Menu } from "./components/Menu.js";
import { Router } from "./components/Router.js";

export function App(){
 const $root = document.querySelector(".root");

 $root.insertAdjacentElement("afterbegin", Beginning());
 $root.insertAdjacentElement("afterbegin", Menu());
 $root.insertAdjacentElement("afterbegin", Header());

 Router();
}
