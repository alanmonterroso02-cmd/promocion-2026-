import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

window.buscarParticipante = async function () {
    const nombreBuscado = document
        .getElementById("buscarNombre")
        .value
        .toLowerCase()
        .trim();

    const resultado = document.getElementById("resultadoConsulta");

    if (!nombreBuscado) {
        alert("Ingrese un nombre");
        return;
    }

    const querySnapshot = await getDocs(collection(db, "pagos"));

    let total = 0;
    let encontrado = false;
    let grado = "";

    querySnapshot.forEach((doc) => {
        const pago = doc.data();

        if (pago.nombre.toLowerCase().includes(nombreBuscado)) {
            total += pago.monto;
            grado = pago.grado;
            encontrado = true;
        }
    });

    if (encontrado) {
        resultado.innerHTML = `
            <div style="border:1px solid #ccc; padding:20px; margin-top:20px;">
                <h2>${nombreBuscado}</h2>
                <p>Grado: ${grado}</p>
                <p>Total aportado: Q${total}</p>
            </div>
        `;
    } else {
        resultado.innerHTML = `
            <p>No se encontraron registros.</p>
        `;
    }
}