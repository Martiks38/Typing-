 const IMGS = [["Practicar textos", "app/assets/images/img2.png"]];

 const ELEMENT_MENU = [
  ["Inicio", null],
  ["practicar", ["textos"]],
  ["estadisticas", ["dia", "semanal"]],
  ["comentario", null]
 ];
 
 const SCORE = "/db.json";
 const TEXTS = "app/assets/data/texts.json";
 const server = "http://localhost:3000/historyScore/";

 export default {
  IMGS,
  ELEMENT_MENU,
  SCORE,
  TEXTS,
  server
 }