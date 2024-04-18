const cuadrado = document.querySelector("#cuadrado");
const colorEsInput = document.querySelector("#color-es");
const colorEnInput = document.querySelector("#color-en");
const buttonComp = document.querySelector("#comprobar");

function cambiarColorAleatorio() {
    let colores = ["red", "blue", "green", "yellow", "orange", "purple", "black", "brown", "pink", "white", "gray"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("cuadrado").style.backgroundColor = colorAleatorio;
}
// Cambiar el color inicial al cargar la página
window.onload = function() {
    cambiarColorAleatorio();
};

let respEn = "";
let respEs = "";

colorEnInput.addEventListener("input", (event) =>{
    respEn = colorEnInput.value.toLowerCase();
})
buttonComp.addEventListener("click", () => {
    console.log("funciona")
    if(respEn === cuadrado.style.backgroundColor){
        colorEnInput.value = "";
        cambiarColorAleatorio();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "PERFECT!!",
            showCloseButton: true,
          });
    }else{
        Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "¿SEGURA?",
			confirmButtonText: `<i class="fa fa-thumbs-up"></i> Volver a intentar!`,
		});
    }
});