 const IMGS = [["Practicar teclas", "app/assets/images/img1.png"], ["Practicar textos", "app/assets/images/img2.png"]];

 const ELEMENT_MENU = [
  ["Inicio", null],
  ["practicar", ["teclas", "textos"]],
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