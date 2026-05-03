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
window.exportarExcel = async function () {
    const datos = [];

    const querySnapshot = await getDocs(collection(db, "pagos"));

    querySnapshot.forEach((doc) => {
        const pago = doc.data();

        datos.push({
            Nombre: pago.nombre,
            Grado: pago.grado,
            Monto: pago.monto
        });
    });

    const hoja = XLSX.utils.json_to_sheet(datos);
    const libro = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(libro, hoja, "Pagos");

    XLSX.writeFile(libro, "Reporte_Promocion_2026.xlsx");
}