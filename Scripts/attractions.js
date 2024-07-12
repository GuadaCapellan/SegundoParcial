document.addEventListener("DOMContentLoaded", function() {
    const puntosTuristicos = [
        {
            lugar: "Santorini",
            descripcion: "Una de las islas más bellas de Grecia, conocida por sus casas blancas y vistas al mar.",
            categoria: "Turístico"
        },
        {
            lugar: "El Acrópolis",
            descripcion: "Una antigua ciudadela situada sobre una roca en Atenas, contiene varios edificios históricos de gran importancia.",
            categoria: "Histórico"
        },
        {
            lugar: "Teatro de Dioniso",
            descripcion: "Uno de los teatros más antiguos del mundo, considerado la cuna del teatro griego.",
            categoria: "Histórico"
        },
        {
            lugar: "Estadio Olímpico",
            descripcion: "Estadio utilizado para los antiguos Juegos Olímpicos en Atenas.",
            categoria: "Histórico"
        },
        {
            lugar: "Meteora",
            descripcion: "Un conjunto de monasterios construidos sobre impresionantes formaciones rocosas.",
            categoria: "Religioso"
        }
    ];

    const tablaPuntos = document.getElementById("tabla-puntos");

    puntosTuristicos.forEach(punto => {
        const fila = document.createElement("tr");

        const celdaLugar = document.createElement("td");
        celdaLugar.textContent = punto.lugar;
        fila.appendChild(celdaLugar);

        const celdaDescripcion = document.createElement("td");
        celdaDescripcion.textContent = punto.descripcion;
        fila.appendChild(celdaDescripcion);

        const celdaCategoria = document.createElement("td");
        celdaCategoria.textContent = punto.categoria;
        fila.appendChild(celdaCategoria);

        tablaPuntos.appendChild(fila);
    });
});
