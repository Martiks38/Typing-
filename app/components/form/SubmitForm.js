export function SubmitForm(){
  const $submit = document.createElement("button");

  $submit.type = "submit";
  $submit.innerHTML = "Enviar";
  // $submit.value = "Enviar";

  $submit.addEventListener("click", e => {
console.log("hi")
    const $loader = document.querySelector(".comment-form-loader"),
      $response = document.querySelector(".comment-form-response");
    console.log($loader)
    $loader.classList.remove("none");
    const $form = document.querySelector("form");

    fetch("https://formsubmit.co/ajax/858a5a0982ceedf497039cca619b0c6b", {
      "method": "POST",
      "body": new FormData($form)
    })
      .then(res => {
        res.ok ? res.json() : Promise.reject(res);
      })
      .then(json => {
        console.log(json)
        $response.innerHTML = `<p>${json.message}</p>`;
        document.querySelector(".comment-form").reset();
      })
      .catch(err => {
        let message = err.statusText ?? "Ocurrió un error al enviar, intenta nuevamente";
        $response.innerHTML = `Error ${err.status}: ${message}`;
        $response.classList.remove("none");
      })
      .finally(setTimeout(()=>{
        $loader.classList.add("none");
        $response.classList.add("none");
        $response.innerHTML = "";
      }, 3000))
  });

  return $submit;
}
