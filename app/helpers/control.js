import data from "./data.js"

export async function control(){
 let { server } = data;
 let options,
  today = new Date(),
  resetData = JSON.parse(localStorage.getItem("reset"));

  if(resetData.today == today.getDay()) return false;

 await fetch(server)
  .then(async response => {
    if(!response.ok) throw {status: response.status, statusText: response.statusText};
 
    return await response.json();
   })
  .then(async json => {
   
   if(resetData.week != today.getWeekNumber()){
    options = {
      method: "PUT",
       headers: {"content-type": "application/json; charset=utf-8"},
       body: JSON.stringify({
        "id": 1,
        "scores": [],
        "scoresDay": []
       })
    }

    localStorage.setItem("reset", JSON.stringify({
     "week": today.getWeekNumber(),
     "today": today.getDay()
    }));
   }else if(resetData.today != today.getDay()){
    options = {
       method: "PUT",
       headers: {"content-type": "application/json; charset=utf-8"},
       body: JSON.stringify({
        "id": 1,
        "scores": json.scores,
        "scoresDay": []
       })
    }
    localStorage.setItem("reset", JSON.stringify({
     "week": resetData.week,
     "today": today.getDay()
    }));
   }

    await fetch(server, options)
    .then(console.log("Se subió el resultado con éxito"))
    .catch(console.error("No se ha logrado reiniciar el historial diario"));
  })
 .catch(err => {
   console.log(`Error ${err.status}: ${err.statusText}`);
  });
}
