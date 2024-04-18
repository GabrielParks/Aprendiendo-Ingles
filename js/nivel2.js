document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector("#contenedor");

for (let i = 1; i <= 10; i++) {
  const validaciones = document.createElement('p');
  validaciones.style.fontSize = "30px";
  validaciones.textContent = i;
  container.appendChild(validaciones);

  const select = document.createElement('select');
  select.classList.add('classSelect');
  select.style.width = "150px";
  select.style.height = "50px";
  select.style.fontSize = "20px";
  select.style.marginBottom= "20px";
  for (let j = 0; j <= 10; j++) {
    const option = document.createElement('option');
    option.value = `valor${j}`;
    option.style.textAlign = "center";
    option.textContent = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN'][j - 1];
    if (j === i) {
      option.classList.add('correcto');
    }
    select.appendChild(option);
  }
  container.appendChild(select);

  const button = document.createElement('button');
  button.classList.add('nivel2');
  button.textContent = 'CORREGIR';
  button.addEventListener('click', function() {
    const seleccionOpcion = select.querySelector(':checked');
    if (seleccionOpcion && seleccionOpcion.classList.contains('correcto')) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "PERFECT!!",
        showCloseButton: true,
      });
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¿SEGURA?",
        confirmButtonText: `<i class="fa fa-thumbs-up"></i> Volver a intentar!`,
      });
    }
  });
  container.appendChild(button);
}
});