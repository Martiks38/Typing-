import { App } from "./App.js"
import { Router } from "./components/Router.js";
import { control } from "./helpers/control.js";

if(!localStorage.getItem("reset")){
 let setting = {
  week: new Date().getDay(),
  today: new Date().getDay()
 };

 localStorage.setItem("reset", JSON.stringify(setting));
}

control();
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", Router);