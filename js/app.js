let btnThemeLight = document.querySelector("#btnThemeLight");
let btnThemeDark = document.querySelector("#btnThemeDark");
let cambiarLogo = document.getElementById("cambiarLogo")
btnThemeLight.addEventListener("click", () => cambiarTema("light"));
btnThemeDark.addEventListener("click", () => cambiarTema("dark"));
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
console.log(temaConfigurado)
cambiarTema(temaConfigurado)
function cambiarTema(color) {
  console.log(color);
  document.querySelector("html").setAttribute("data-bs-theme", color);
  localStorage.setItem('tema', JSON.stringify(color));
    if(color === "light"){ 
      document.getElementById('icon-toggle').classList.remove('bi-moon-stars-fill');
      document.getElementById('icon-toggle').classList.add('bi-brightness-high-fill');
      document.querySelector('.imagenFondoCotacto').className = "container py-5 my-0 my-md-5 rounded-2 imagenFondoCotacto fondoContactoBlanco shadow"
    }else{
      document.getElementById('icon-toggle').classList.remove('bi-brightness-high-fill');
      document.getElementById('icon-toggle').classList.add('bi-moon-stars-fill');
      document.querySelector('.imagenFondoCotacto').className = "container py-5 my-0 my-md-5 rounded-2 imagenFondoCotacto fondoContacto shadow"
    }
}
