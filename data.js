const tabla = document.getElementById("table")
const mensajeError = document.getElementById("mensajeError")

const cuerpoDeTabla = tabla.children[0]

function colocarTabla(lista){  
    if (!lista || lista.length ===0) {
        mostrarTabla(cuerpoDeTabla,false)
        mostrarTabla(mensajeError,true)
    } else {
        mostrarTabla(cuerpoDeTabla,true)
        mostrarTabla(mensajeError,false)
    }
    
for (let i = 0; i < lista.length; i++) {
    const paises = lista[i];

    const filaNombre = nuevaTD([i+1+" "]+paises.name.common)
    const filaIdioma = nuevaTD(paises.capital)
    const filaBandera = nuevaTD(paises.flag)


    const nuevaCelda = document.createElement("tr")
    nuevaCelda.appendChild(filaNombre)
    nuevaCelda.appendChild(filaIdioma)
    nuevaCelda.appendChild(filaBandera)


    cuerpoDeTabla.appendChild(nuevaCelda)
}
}
function nuevaTD(elemento){
    TD = document.createElement("td")
    TD.innerHTML = elemento
    return TD 
}

function mostrarTabla(elemento,flag){
    elemento.style.display = flag ? "block" : "none"
}


function handlerFiltrar(){
    console.log("hola")
}
// const nuevaTD = document.createElement("td")
// nuevaTD.innerHTML = pais0
// const nuevaCelda = document.createElement("tr")


// nuevaCelda.appendChild(nuevaTD)

// cuerpoDeTabla.appendChild(nuevaCelda)
colocarTabla(dataPaises);