export function TextAreaForm(){
  const $textarea = document.createElement("textarea"); 

  $textarea.name = "comments";
  $textarea.placeholder = "Escribe tu comentario...";
  $textarea.title = "Sólo se puede escribir una cantidad máxima de 255 caracteres";
  $textarea.dataset.pattern = "^.{1,255}$";
  $textarea.required = true;
  $textarea.cols = 50
  $textarea.rows = 10;

  $textarea.addEventListener("keyup", e => {
    let pattern = $textarea.dataset.pattern,
      regExp = new RegExp(pattern, "g");

    !regExp.exec(e.target.value)
      ? document.querySelector("textarea + span").classList.add("is-active")
      : document.querySelector("textarea + span").classList.remove("is-active");
  });

 return $textarea;
}