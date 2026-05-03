import { db } from "./firebase-config.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const participantes = [
  {
    numero: 1,
    nombre: "Cabrera Lorenzo Esvin Santiago",
    grado: "Quinto Medicina",
    total: 0
  },
  {
    numero: 2,
    nombre: "Cortéz Hernández Jeferson José Luis",
    grado: "Quinto Medicina",
    total: 0
  },
  {
    numero: 3,
    nombre: "Cristóbal Pérez Lesly Beatriz",
    grado: "Quinto Medicina",
    total: 0
  }
];

async function guardarParticipantes() {
  for (const participante of participantes) {
    try {
      await addDoc(collection(db, "participantes"), participante);
      console.log("Guardado:", participante.nombre);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

guardarParticipantes();