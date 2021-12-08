export function SubjectForm(){  
  const $subject = document.createElement("input");

  $subject.type = "text";
  $subject.name = "subject";
  $subject.placeholder = "Asunto a tratar";
  $subject.title = "El asunto es requerido";
  $subject.required = true;

  $subject.addEventListener("keyup", e => {
    e.target.value === ""
      ? document.querySelector("input[name='subject'] + span").classList.add("is-active")
      : document.querySelector("input[name='subject'] + span").classList.remove("is-active");
  });

  return $subject;
}