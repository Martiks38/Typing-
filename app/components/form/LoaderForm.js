export function LoaderForm(){
  const $contentLoader = document.createElement("div"),
   $imgLoader = document.createElement("img");

  $imgLoader.src = "app/assets/images/sonic-running.gif";
  $imgLoader.alt = "Enviando...";
  $imgLoader.classList.add("loader");
  
  $contentLoader.appendChild($imgLoader);
  $contentLoader.classList.add("comment-form-loader", "none");

  return $contentLoader;
}