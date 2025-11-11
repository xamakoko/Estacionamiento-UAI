let total = 0;
const capacidad = 400;

function actualizarSimulado() {
  // Simulación de entradas y salidas
  const cambio = Math.floor(Math.random() * 3) - 1; // -1, 0 o +1
  total = Math.min(Math.max(total + cambio, 0), capacidad);

  const libres = capacidad - total;

  document.getElementById("total").textContent = total;
  document.getElementById("libres").textContent = libres;
}

setInterval(actualizarSimulado, 2000);
actualizarSimulado();
