const participantes = [
// Medicina
  {
    id: 1,
    nombre: "Cabrera Lorenzo Esvin Santiago",
    grado: "Quinto Medicina"
  },
  {
    id: 2,
    nombre: "Cortéz Hernández Jeferson José Luis",
    grado: "Quinto Medicina"
  },
  {
    id: 3,
    nombre: "Cristóbal Pérez Lesly Beatriz",
    grado: "Quinto Medicina"
  },
  {
    id: 4,
    nombre: "Delgado Vicente Noe Michael",
    grado: "Quinto Medicina"
  },
  {
    id: 5,
    nombre: "Diego Morales Alexis Denilson",
    grado: "Quinto Medicina"
  },
  {
    id: 6,
    nombre: "García Juárez María Del Carmen",
    grado: "Quinto Medicina"
  },
  {
    id: 7,
    nombre: "Jiménez Cortéz Yeni Clarisa",
    grado: "Quinto Medicina"
  },
  {
    id: 8,
    nombre: "Katherin Mishel Ralda Jiménez",
    grado: "Quinto Medicina"
  },
  {
    id: 9,
    nombre: "Pérez Vaíl Keily Lisbeth",
    grado: "Quinto Medicina"
  },
  {
    id: 10,
    nombre: "Ramírez Rodríguez Miqueas Emanuel",
    grado: "Quinto Medicina"
  },
  {
    id: 11,
    nombre: "Reyes Gómez Jorge Geovany",
    grado: "Quinto Medicina"
  },
  {
    id: 12,
    nombre: "Vásquez Lucas Fernado Ángel",
    grado: "Quinto Medicina"
  },
  {
    id: 13,
    nombre: "Vásquez Luis Vivian Dayana",
    grado: "Quinto Medicina"
  },
  {
    id: 14,
    nombre: "Velásquez Cabrera Mynor",
    grado: "Quinto Medicina"
  },
  {
    id: 15,
    nombre: "Jonatan Margarito",
    grado: "Quinto Medicina"
  },

  // Enfermería
  {
    id: 16,
    nombre: "Alonzo Pérez Yaquelín Anayeli",
    grado: "Quinto Enfermería"
  },
  {
    id: 17,
    nombre: "Cabrera López Yuliza",
    grado: "Quinto Enfermería"
  },
  {
    id: 18,
    nombre: "Camacho López Glendy Lisbeth",
    grado: "Quinto Enfermería"
  },
  {
    id: 19,
    nombre: "Cortéz Ramos Yeni Carina",
    grado: "Quinto Enfermería"
  },
  {
    id: 20,
    nombre: "Díaz González Esmeralda Liseth",
    grado: "Quinto Enfermería"
  },
  {
    id: 21,
    nombre: "Hernández Díaz Sabina Lorenza",
    grado: "Quinto Enfermería"
  },
  {
    id: 22,
    nombre: "López Vásquez Keily Dayana",
    grado: "Quinto Enfermería"
  },
  {
    id: 23,
    nombre: "Ortega Pérez Leidy Noemí",
    grado: "Quinto Enfermería"
  },
  {
    id: 24,
    nombre: "Pérez Vásquez Vilma Daniela",
    grado: "Quinto Enfermería"
  },
  {
    id: 25,
    nombre: "Rabanales Gómez Neidy Fabiola",
    grado: "Quinto Enfermería"
  },

  // Derecho
  {
    id: 26,
    nombre: "Marroquín Escobar Karla Andrea",
    grado: "Quinto Derecho"
  },
  {
    id: 27,
    nombre: "Monterroso Monterroso Beberly Belinda",
    grado: "Quinto Derecho"
  },
  {
    id: 28,
    nombre: "Reyes Monterroso Mariana Analy",
    grado: "Quinto Derecho"
  },
  {
    id: 29,
    nombre: "Vásquez Escobar Abraham Santos",
    grado: "Quinto Derecho"
  },
  {
    id: 30,
    nombre: "Vicente Chile Ashle Mariza",
    grado: "Quinto Derecho"
  },

  // Odontología
  {
    id: 31,
    nombre: "Díaz Gómez José Mario",
    grado: "Quinto Odontología"
  },
  {
    id: 32,
    nombre: "Jimenéz Gómez Rolfi Hernan",
    grado: "Quinto Odontología"
  },
  {
    id: 33,
    nombre: "Méndez Méndez Anderson Hermenegildo",
    grado: "Quinto Odontología"
  },
  {
    id: 34,
    nombre: "Vásquez Gómez Melvin Gabriel",
    grado: "Quinto Odontología"
  },

  // Mecánica
  {
    id: 35,
    nombre: "Alvarez Gantenbein Mario Estuardo",
    grado: "Quinto Mecánica"
  },
  {
    id: 36,
    nombre: "Calderón Rivera Edison Iván",
    grado: "Quinto Mecánica"
  },
  {
    id: 37,
    nombre: "Carreto Morales Néstor Hernán",
    grado: "Quinto Mecánica"
  },
  {
    id: 38,
    nombre: "Delgado Vicente Elmer David",
    grado: "Quinto Mecánica"
  },
  {
    id: 39,
    nombre: "Escobar Méndez Isaac Esau",
    grado: "Quinto Mecánica"
  },
  {
    id: 40,
    nombre: "García Flores Gilver Francisco Josué",
    grado: "Quinto Mecánica"
  },
  {
    id: 41,
    nombre: "López Romero Brayan Daniel",
    grado: "Quinto Mecánica"
  },
  {
    id: 42,
    nombre: "Marroquín Ramírez Wilfrido Daniel",
    grado: "Quinto Mecánica"
  },
  {
    id: 43,
    nombre: "Monterroso López Víctor Geovany",
    grado: "Quinto Mecánica"
  },
  {
    id: 44,
    nombre: "Orozco Vásquez Brayan Martín",
    grado: "Quinto Mecánica"
  },
  {
    id: 45,
    nombre: "Pérez Carreto Denilson Miguel",
    grado: "Quinto Mecánica"
  },
  {
    id: 46,
    nombre: "Romero López Iberton Alexis",
    grado: "Quinto Mecánica"
  },

  // Electromecánica
  {
    id: 47,
    nombre: "Agustín López Oscar Rene",
    grado: "Quinto Electromecánica"
  },
  {
    id: 48,
    nombre: "Castillo Barrios Brandon Osiel",
    grado: "Quinto Electromecánica"
  },

  // Música
  {
    id: 49,
    nombre: "López Romero Ester Estefany",
    grado: "Quinto Música"
  },

  // Electricidad
  {
    id: 50,
    nombre: "López Gabriel Abner Gudiel",
    grado: "Quinto Electricidad"
  },
  {
    id: 51,
    nombre: "López Romero Andy Leonardo",
    grado: "Quinto Electricidad"
  },
  {
    id: 52,
    nombre: "Vicente Pérez Domingo Frisly",
    grado: "Quinto Electricidad"
  },
  {
    id: 53,
    nombre: "Vicente Vicente Axel Aroldo",
    grado: "Quinto Electricidad"
  },

  // Diseño Gráfico
  {
    id: 54,
    nombre: "Díaz Pérez Werner Misael",
    grado: "Quinto Diseño Gráfico"
  },
  {
    id: 55,
    nombre: "Gómez Mejía Geraldine Zulimar",
    grado: "Quinto Diseño Gráfico"
  },
  {
    id: 56,
    nombre: "Pérez Romero Brailin Geovany",
    grado: "Quinto Diseño Gráfico"
  },
  {
    id: 57,
    nombre: "Monterroso Rodríguez Dulce Analucia",
    grado: "Quinto Diseño Gráfico"
  },

  // Finanzas
  {
    id: 58,
    nombre: "De León Mazariegos Jennifer Anabelly",
    grado: "Quinto Finanzas y Admo"
  },
  {
    id: 59,
    nombre: "Sac Camacho Eddy Francisco",
    grado: "Quinto Finanzas y Admo"
  },
  {
    id: 60,
    nombre: "Sergio Gonsales",
    grado: "Quinto Finanzas y Admo"
  },
  {
    id: 61,
    nombre: "Werner Marokin Diaz",
    grado: "Quinto Finanzas y Admo"
  },

  // Electrónica
  {
    id: 62,
    nombre: "Monterroso Gómez Alan Rene",
    grado: "Quinto Electrónica"
  }
];

const contenedor = document.getElementById("qrs");

participantes.forEach(participante => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${participante.nombre}</h3>
    <p>${participante.grado}</p>
    <canvas id="qr-${participante.id}"></canvas>
    <br><br>
    <button onclick="descargarQR('qr-${participante.id}', '${participante.nombre}')">
      Descargar QR
    </button>
    <hr>
  `;

  contenedor.appendChild(div);

  QRCode.toCanvas(
    document.getElementById(`qr-${participante.id}`),
    JSON.stringify(participante),
    function (error) {
      if (error) console.error(error);
      console.log("QR generado:", participante.nombre);
    }
  );
});

function descargarQR(canvasId, nombre) {
  const canvas = document.getElementById(canvasId);
  const link = document.createElement("a");

  link.download = `${nombre}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
