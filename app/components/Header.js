export function Header(){
 const $header = document.createElement("header");

 $header.classList.add("header");

 $header.innerHTML = `
  <article class="header-content">
   <section class="logo">
    <img src="app/assets/images/favicon.png" alt="logo">
   </section>
   <section class="titlePage"><i>TypingSo</i></section>
  </article>
 `;

 return $header;
}
