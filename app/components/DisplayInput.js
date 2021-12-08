import { highlightWord } from "../helpers/highlightWord.js";
import { results } from "../helpers/results.js";


export function DisplayInput($writingPad){
  const $display = document.createElement("input"),
    $ppm = document.createElement("p");
  
  let text,
    start,
    offsetWord = 0,
    indexWord = 1,
    contador = 0,
    pulsaciones = 0,
    errores = 0,
    statecorrectionStatus = true;

  $ppm.textContent = "0";

  $display.type = "text";
  $display.placeholder = "..."; 
  
  $writingPad.appendChild($display);
  $writingPad.appendChild($ppm);
  $writingPad.classList.add("practice", "practice__display"); 

  setTimeout(() => {
    text = document.querySelector(".practice__text p").textContent;
    offsetWord = text.indexOf(text.split(" ")[1], 0);
  }, 100);
  
  $display.addEventListener("keyup", e => {
    let $soni = document.querySelector(".soni"),
    $fondo = document.querySelector(".practice__fondo"),
    highlightedWord = document.querySelector(".resaltar").textContent,
    expReg = new RegExp(`^${$display.value}`),
    width = $fondo.clientWidth,
    timeNow = new Date().getTime();
    
    const divisiones = text.split(" ").length * (1 + $soni.clientWidth / width);
        
    if(pulsaciones === 0){
      start = new Date().getTime();
      pulsaciones++;
      
      $soni.src = "/app/assets/images/sonic-running.gif"
    }else{
      pulsaciones++;
    }
    
    let ppm = pulsaciones / ( timeNow - start );

    $ppm.textContent = `${Math.floor(ppm / 1.667e-5)}`;

    if(e.key === " " && highlightedWord === $display.value.slice(0, -1)){  
      contador++;
      
      let {textView, newOffset} = highlightWord(text, indexWord, offsetWord),
      x = ((contador / divisiones) * width);
      
      $soni.style.transform = `translate(${x}px, -50%)`;
      
      if(ppm > 0.0084){
        $soni.src = "/app/assets/images/omg.gif"
      }
      if(ppm > 0.005){
        $soni.src = "/app/assets/images/sonic-running.gif"
      }
      if(ppm > 0.001667){
        $soni.src = "/app/assets/images/caminando.gif"
      }else{
        $soni.src = "/app/assets/images/waiting-slow.gif";
      }

      indexWord++;
      offsetWord = newOffset;
      
      document.querySelector(".practice__text p").innerHTML = textView;
      
      $display.value = null;
      expReg = null;
    }else{
      if(!expReg.test(highlightedWord) && statecorrectionStatus && !(highlightedWord === $display.value.slice(0, -1))){
        $display.classList.add("error");
        errores++;
        statecorrectionStatus = false;
      }

      if(expReg.test(highlightedWord) && !statecorrectionStatus){
        $display.classList.remove("error")
        statecorrectionStatus = true;
      }
    }
    
    if(indexWord === text.split(" ").length && highlightedWord === $display.value) {
      sessionStorage.setItem("time", timeNow - start)
      let resultado = {
        tiempo: ("0" + Math.floor((timeNow - start) / 60000)).slice(-2) + ":" + ("0" + Math.floor(((timeNow - start) % 60000) / 1000)).slice(-2),
        pulsaciones: pulsaciones,
        ppm: Math.floor(ppm / 1.667e-5),
        wpm: Math.floor(text.split(" ").length / ((timeNow - start) * 1.667e-5)),
        errores,
        errorPorcentual: Math.floor(errores / text.split("").length * 100)
      }
      results(resultado);
    }
  });

  return $writingPad;
}