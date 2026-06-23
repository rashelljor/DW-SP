// admin.js — Star Park

let reservas = JSON.parse(localStorage.getItem('reservas')) || []
let cuerpo   = document.getElementById('cuerpoTabla')

function mostrarReservas() {
    cuerpo.innerHTML = ''

    if (reservas.length === 0) {
        cuerpo.innerHTML = '<tr><td colspan="8" style="text-align:center; color:var(--gris); padding:20px;">No hay reservas aún.</td></tr>'
        return
    }

    reservas.forEach((reserva, indice) => {
        cuerpo.innerHTML += '<tr>'
            + '<td>' + (indice + 1) + '</td>'
            + '<td>' + reserva.nombre + '</td>'
            + '<td>' + reserva.correo + '</td>'
            + '<td>' + reserva.telefono + '</td>'
            + '<td>' + reserva.fecha + '</td>'
            + '<td class="amarillo">' + reserva.total + '</td>'
            + '<td>' + reserva.fechaRegistro + '</td>'
            + '<td><button class="botonEliminar" onclick="eliminar(' + indice + ')">✕ Quitar</button></td>'
            + '</tr>'
    })
}

function eliminar(indice) {
    reservas.splice(indice, 1)
    localStorage.setItem('reservas', JSON.stringify(reservas))
    mostrarReservas()
}

mostrarReservas()