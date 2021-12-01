export function CardContent(imgData){
 const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption");

 $figure.classList.add("practiceCard");
 
 /teclas/i.test(imgData[0])
  ? $figure.dataset.id = "practicar/teclas"
  : $figure.dataset.id = "practicar/textos";

 $img.src = imgData[1];
 $img.alt = `Imágen ${imgData[0]}`;
 $figcaption.innerHTML = imgData[0];

 $figure.appendChild($img);
 $figure.appendChild($figcaption);

 return $figure;
}
