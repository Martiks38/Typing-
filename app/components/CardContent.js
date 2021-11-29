export function CardContent(imgData){
 const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption");

 $figure.classList.add("practiceCard");
 
 $img.src = imgData[1];
 $img.alt = `Imágen ${imgData[0]}`;
 $figcaption.innerHTML = imgData[0];

 $figure.appendChild($img);
 $figure.appendChild($figcaption);

 return $figure;
}
