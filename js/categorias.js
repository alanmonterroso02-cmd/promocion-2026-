import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

window.crearColeccion = async function () {

    let nombre = document.getElementById("nombreCategoria").value.trim();

    if (!nombre) {
        alert("Ingrese un nombre");
        return;
    }

    nombre = nombre.toLowerCase().replace(/\s+/g, "_");

    try {
        // 1. Crear colección real
        await addDoc(collection(db, nombre), {
            creado: serverTimestamp(),
            inicial: true
        });

        // 2. Guardar en lista de categorías
        await addDoc(collection(db, "categorias"), {
            nombre: nombre
        });

        alert("Categoría creada");

    } catch (error) {
        console.error(error);
    }
};