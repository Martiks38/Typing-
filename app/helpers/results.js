import data from "./data.js";

export async function results(resultado){
 
  let { server } = data, options, orden;

  sessionStorage.setItem("score", JSON.stringify(resultado));

  await fetch(server)
  .then(async resolve => {
    if(!resolve.ok) throw {status: resolve.status}
    
    return await resolve.json();
  })
 .then(async json => {
    let datos = json.scoresDay;
    datos.push({
      "tiempo": resultado.tiempo,
      "pulsasiones": resultado.pulsaciones,
      "ppm": resultado.ppm,
      "wpm": resultado.wpm,
      "errores": `${resultado.errores} (${resultado.errorPorcentual}%)`
    });

   if(datos.length === 1){
     options = {
      method: "POST",
      headers: {"content-type": "application/json; charset=utf-8"},
      body: JSON.stringify({
         "id": 1,
         "scores": datos,
         "scoresDay": datos
          })
     };
     await fetch(server, options)
      .then(console.log("Se subió el resultado con éxito"))
      .catch(console.error("No se ha podido subir los datos de la partida."));
    }else if(datos.length < 8){
      orden = datos.sort((scoreA, scoreB) => scoreB.ppm - scoreA.ppm);

      options = {
      method: "PUT",
      headers: {"content-type": "application/json; charset=utf-8"},
      body: JSON.stringify({
        "id": 1,
        "scores": orden,
        "scoresDay": orden,
      })
     };
     await fetch(server, options)
      .then(console.log("Se subió el resultado con éxito"))
      .catch(console.error("No se ha podido subir los datos de la partida."));
   }else{
    orden = datos.sort((scoreA, scoreB) => scoreB.ppm - scoreA.ppm);
    
    options = {
        method: "PUT",
        headers: {"content-type": "application/json; charset=utf-8"},
        body: JSON.stringify({
          "id": 1,
          "scores": orden.slice(0, 7),
          "scoresDay": orden
        })
     };
     await fetch(server, options)
      .then(console.log("Se subió el resultado con éxito"))
      .catch(console.error("No se ha podido subir los datos de la partida."));
   }
 }).catch(err => {
  console.error(`Error ${err.status}`);
 });
}