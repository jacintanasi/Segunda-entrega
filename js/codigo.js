const botonCargar = document.getElementById("btn-cargar");
const botonTema = document.getElementById("btn-tema");
const contenedor = document.getElementById("contenedor-tarjetas");

function cargarTarjetas() {
    fetch("js/datos.json")
        .then(res => res.json())
        .then(datos => {
            let htmlAcumulado = "";

            datos.forEach(item => {
                htmlAcumulado += `
                    <div class="tarjeta">
                        <h3>${item.titulo}</h3>
                        <p>${item.descripcion}</p>
                        <p>${item.detalles}</p>
                    </div>
                `;
            });

            contenedor.innerHTML = htmlAcumulado;
        })
        .catch(error => {
            console.error("Hubo un error al cargar las tarjetas:", error);
        });
}

botonCargar.addEventListener("click", cargarTarjetas);

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-oscuro");
});