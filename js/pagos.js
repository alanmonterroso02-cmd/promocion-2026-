import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

let participanteActual = null;

/* =====================================
   ESCANEAR QR
===================================== */

function onScanSuccess(decodedText) {
    try {
        participanteActual = JSON.parse(decodedText);

        document.getElementById("resultado").innerHTML = `
            <h3>${participanteActual.nombre}</h3>
            <p><strong>Grado:</strong> ${participanteActual.grado}</p>
            <p><strong>ID:</strong> ${participanteActual.id}</p>
        `;

    } catch (error) {
        console.error(error);
        alert("QR no válido");
    }
}

const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: 250
    }
);

html5QrcodeScanner.render(onScanSuccess);

/* =====================================
   CARGAR CATEGORÍAS
===================================== */

async function cargarCategorias() {
    const select = document.getElementById("contenedor");

    select.innerHTML = `
        <option value="">Seleccione categoría</option>
    `;

    try {
        const querySnapshot = await getDocs(
            collection(db, "categorias")
        );

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            select.innerHTML += `
                <option value="${data.nombre}">
                    ${data.nombre}
                </option>
            `;
        });

    } catch (error) {
        console.error(error);
        alert("Error al cargar categorías");
    }
}

cargarCategorias();

/* =====================================
   REGISTRAR COBRO
===================================== */

window.registrarPago = async function () {
    const contenedor = document.getElementById("contenedor").value;
    const monto = document.getElementById("monto").value;

    if (!participanteActual) {
        alert("Primero escanee un QR");
        return;
    }

    if (!contenedor) {
        alert("Seleccione una categoría");
        return;
    }

    if (!monto || Number(monto) <= 0) {
        alert("Ingrese un monto válido");
        return;
    }

    try {
        await addDoc(collection(db, contenedor), {
            participanteId: participanteActual.id,
            nombre: participanteActual.nombre,
            grado: participanteActual.grado,
            monto: Number(monto),
            fecha: serverTimestamp()
        });

        alert("Cobro guardado correctamente en: " + contenedor);

        document.getElementById("monto").value = "";

    } catch (error) {
        console.error(error);
        alert("Error al guardar el cobro");
    }
};