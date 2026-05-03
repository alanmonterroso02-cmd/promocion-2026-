import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

let participanteActual = null;

function onScanSuccess(decodedText, decodedResult) {
    participanteActual = JSON.parse(decodedText);

    document.getElementById("resultado").innerHTML = `
        <h3>${participanteActual.nombre}</h3>
        <p>${participanteActual.grado}</p>
        <p>ID: ${participanteActual.id}</p>
    `;
}

const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: 250
    }
);

html5QrcodeScanner.render(onScanSuccess);

window.registrarPago = async function () {
    const monto = document.getElementById("monto").value;

    if (!participanteActual) {
        alert("Primero escanee un QR");
        return;
    }

    if (!monto || monto <= 0) {
        alert("Ingrese un monto válido");
        return;
    }

    try {
        await addDoc(collection(db, "pagos"), {
            participanteId: participanteActual.id,
            nombre: participanteActual.nombre,
            grado: participanteActual.grado,
            monto: Number(monto),
            fecha: serverTimestamp()
        });

        alert("Pago guardado correctamente en Firebase");

        document.getElementById("monto").value = "";

    } catch (error) {
        console.error(error);
        alert("Error al guardar el pago");
    }
}