import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const listaPagos = document.getElementById("listaPagos");

async function cargarPagos() {
    const q = query(
        collection(db, "pagos"),
        orderBy("fecha", "desc")
    );

    const querySnapshot = await getDocs(q);

    let html = "";
    let totalGeneral = 0;

    querySnapshot.forEach((doc) => {
        const pago = doc.data();

        totalGeneral += pago.monto;

        html += `
            <div style="border:1px solid #ccc; padding:15px; margin:10px;">
                <h3>${pago.nombre}</h3>
                <p>Grado: ${pago.grado}</p>
                <p>Monto: Q${pago.monto}</p>
            </div>
        `;
    });

    html += `
        <hr>
        <h2>Total General Recaudado: Q${totalGeneral}</h2>
    `;

    listaPagos.innerHTML = html;
}

cargarPagos();