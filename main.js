// Chicos, buenos días. El desafío del tema de objetos literales en JS, es el siguiente: 
// La escuela, PequeñosGamberritos, quiere almacenar los datos de sus estudiantes los cuales serían: Nombre, Curso, Genero. Además quiere registrar las notas de las 3 materias de esos estudiantes. 
// Haciendo uso del HTML, CSS y JAVASCRIPT (funciones, arreglos, DOM, localstorage,etc.) Debe permitir
// Almacenar los datos de los estudiantes.
// Mostrar el nombre de los estudiantes con el promedio de sus notas
// Mostrar los estudiantes que aprobaron y no aprobaron. Un estudiante aprueba, si el promedio de sus notas, es >=3.5.
// Debe tenerse en cuenta que las notas deben estar entre 0 y 5deben estar entre 0 y 5.


// Para almacenar en el localstorage usamos = localStorage.setItem('nombre',JSON.stringify(variable/dato))

// Para recuperar datos del localstorage, utilizamos JSON.parse(localStorage.getItem('nombre'))

// Entonces el compromiso es: Entregar el juego en la versión 2.0 (repositorio git y gitpages) y ejercicio de PequeñosGamberritos (repositorio git y gitpages). De lo que me entregue informaré en coordinación de talentos (además de su asistencia durante esta semana, participación, puntualidad y atención)



const nombre = document.getElementById('nombre')
const curso = document.getElementById('curso')
const genero = document.getElementById('genero')
const agregar = document.getElementById('agregar')
const monstrar = document.getElementById('monstrar')
const tabla = document.getElementById('tabla')

datos = []
let promedio = 0;
let calificacionFinal = null;

// let promedio = 3/(parseInt(nota1.value)+parseInt(nota2.value)+parseInt(nota3.value))


agregar.addEventListener('click',(e)=>{
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    e.preventDefault()
    if (nota1 > 5 || nota2 > 5 || nota3 > 5) {
        alert("Las notas no pueden ser mayores a 5");
      } else {
        console.log(nota1);
        console.log(nota2);
        console.log(nota3);
        //console.log(promedio)
        datos.push({Nombre: nombre.value,Curso: curso.value,Genero: genero.value,Nota1: nota1,Nota2: nota2,Nota3: nota3,
        });
        localStorage.setItem("estudiantes", JSON.stringify(datos));
    }
    // console.log(datos)
    nombre.value = '';
    curso.value= '';
    genero.value= '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
})


monstrar.addEventListener('click',(e)=>{
    
    tabla.innerHTML = `
    <tr class="encabezadoTabla">
    <th>Nombre</th>
    <th>curso</th>
    <th>Genero</th>
    <th>Promedio</th>
    <th>Calificacion Final</th>
</tr>
    `;
    e.preventDefault()
    let lista=JSON.parse(localStorage.getItem('estudiantes'))
    if(lista==undefined){
        alert('No hay lista')
    }else{
        for(i=0;i<lista.length;i++){
            promedio = (lista[i].Nota1+lista[i].Nota2+lista[i].Nota3)/3
        }
        if (promedio >= 3.5) {
            calificacionFinal = "Aprovado";
          } else {
            calificacionFinal = "Reprovado";
          }
        for(i=0;i<lista.length;i++){

            tabla.innerHTML+=`
            <tr>
            <td>${lista[i].Nombre}</td>
            <td>${lista[i].Curso}</td>
            <td>${lista[i].Genero}</td>
            <td>${promedio}</td>
            <td>${calificacionFinal}</td>
        </tr>
            `
            console.log(lista[i])
        }
        // lista.forEach(element => {
        //     tabla.innerHTML+=
        //     `
        //      <tr>
        //      <td>${element.Nombre}</td>
        //      <td>${element.Curso}</td>
        //      <td>${element.Genero}</td>
        //      <td>${element.Nota1}</td>
        //      <td>${element.Nota2}</td>
        //      <td>${element.Nota3}</td>
        // </tr>
        //      `
        // });

    }
})

