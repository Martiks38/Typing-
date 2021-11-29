import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Menu } from "./components/Menu.js";

export function App(){
 const $root = document.querySelector(".root");

 $root.appendChild(Header());
 $root.appendChild(Menu());
 $root.appendChild(Main());
}
