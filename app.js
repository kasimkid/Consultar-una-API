const contenedor = document.querySelector(".main");
const btn = document.querySelector("#btn");
const btnBack = document.querySelector("#btnBack");
const paginaActual = document.querySelector("#paginaActual");
let pag = 1;

const consultarApi = async () => {
  const respuesta = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pag}`
  );

  const datos = await respuesta.json();

  console.log(datos);

  datos.results.forEach((object) => {
    let html = "";

    const { name, species, gender, image } = object;

    html += `<div class="carta">
            <img src="${image}" >
            <p><span>Especie:</span> ${species}</p>
            <p><span>Nombre:</span> ${name}</p>
            <p><span>Género:</span> ${gender}</p>
            
        </div>`;

    contenedor.innerHTML += html;

    paginaActual.innerHTML = `<span>Página: ${pag}</span>`;
  });
};
consultarApi();

btn.addEventListener("click", () => {
  if (pag < 42) {
    pag += 1;
    
    consultarApi();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
       });
  }
});

btnBack.addEventListener("click", () => {
  if (pag > 1) {
    pag -= 1;
    consultarApi();
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
       });
  }
  
});
