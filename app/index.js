import { App } from "./App.js"
import { Router } from "./components/Router.js";

Date.prototype.getWeekNumber = function () {
  var d = new Date(+this);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
};

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", Router);
document.addEventListener("click", e => {
  e.preventDefault();
  
  if(!e.target.href) return false;
  
  let { hash } = location,
   index = e.target.href.indexOf("#");
   
  hash == e.target.href.slice(index) ? location.reload() : location.hash = e.target.href.slice(index);
});