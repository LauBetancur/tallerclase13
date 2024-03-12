const numeros = [3, 1, 1, 10, 5, 7, 2];
let suma = 0;
let menor = numeros[0];
let mayor = numeros[0];
// Sumar todos los números y encontramos  el menor y mayor :D
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    
    // Encontrar el número menor
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    
    // Encontrar el número mayor
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

// ponemos el mensaje en azul y escribimos el menor, la suma y el mayor
const parrafo=document.querySelector("#parrafo");
console.log(parrafo);
parrafo.innerHTML = "<strong>" + numeros + "</strong><br> la suma es:<strong>" + suma + "</strong><br> el menor es:<strong>" + menor + "</strong><br> el numero mayor es:<strong>" + mayor + "</strong>";

parrafo.classList.add("parrafo--azul");

