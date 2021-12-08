import { AnswerForm } from "./AnswerForm.js";
import { LoaderForm } from "./LoaderForm.js";
import { SubjectForm } from "./SubjectForm.js";
import { SubmitForm } from "./SubmitForm.js";
import { TextAreaForm } from "./TextAreaForm.js";

export function Comments(){

  const $section = document.createElement("section"),
    $form = document.createElement("form"),
    content = [SubjectForm(), TextAreaForm(), SubmitForm(), LoaderForm(), AnswerForm()];

  $form.innerHTML = "<legend>Comentarios</legend>";
  $form.classList.add("comment-form");

  content.forEach( ($el, index) => {
    $form.appendChild($el);

    if(index < 2){
      const $span = document.createElement("span");

      $span.id = $el.name;
      $span.textContent = $el.title;
      $span.classList.add("comment-form-error", "none");
      $el.insertAdjacentElement("afterend", $span);
    }
  });
  
  $section.appendChild($form);

  $section.classList.add("content", "content__form");

  return $section;
}