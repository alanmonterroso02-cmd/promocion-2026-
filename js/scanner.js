const participantes = [
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