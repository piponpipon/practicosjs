
//Manuel Veller
// Primer entrega del Proyecto Final
alert('Bienvenidos CoderHouse Futbol Club');
alert ('Estas en la prueba de seleccion de jugadores, evaluaremos si podes ingresar al equipo')
const jugadoresSeleccionados = [
    {
        id:1,
        nombre: 'Miguel Sanchez',
        nacionalidad: 'Brasil',        
        piernaHabil: 'Izquierda',
        promedioGol: 3.2   
    },
    {  
        id:2,
        nombre: 'Juan Fernandez',
        nacionalidad:'Argentina',
        piernaHabil: 'Derecha',
        promedioGol: 4.3   
    },
    {
        id:3,
        nombre: 'Wahinton Silva',
        nacionalidad:'Uruguay',
        piernaHabil: 'Derecha',
        promedioGol: 3.2
    },
    {
        id:4,
        nombre: 'Carlos Mena',
        nacionalidad: 'Chile',
        piernaHabil: 'Izquierda',
        promedioGol: 3.1
    }
]
console.log(jugadoresSeleccionados)

class Jugadorfutsal {
    constructor (id, nombre,  nacionalidad, piernaHabil, promedioGol) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.piernaHabil = piernaHabil;
        this.promedioGol = promedioGol;
         }  
    }

    const Jugadornuevo = new Jugadorfutsal (jugadoresSeleccionados.length +1, 
                                            prompt ('Indique su nombre y apellido'),
                                            prompt ('Indique su pais'),
                                            prompt('¿Cual es tu pierna habil?'),
                                            promDeGol (prompt('cuantos goles hizo esta temporada'),
                                                       prompt('¿Cuantos partidos jugo esta temporada?'))) ;
                                                       

function promDeGol (cantGol, cantPartidos){
        var promedio = (cantGol/cantPartidos)
        console.log('Tu promedio es ' + promedio)
        if (promedio >= 1.5){
            console.log("Felicitaciones fuiste seleccionado/a!!!")
    } else
    console.log("Que pena, debido a tu promedio no has sido seleccionado")
    return(promedio)
    }

if (Jugadornuevo.promedioGol >= 1.5){
    alert('Quedaste seleccionado!')
    jugadoresSeleccionados.push(Jugadornuevo)
} else {
    alert('Que pena, tu promedio de gol no fue el suficiente, suerte la proxima')
}

console.log('Nuestro plantel actual es: ')

for (const dato of jugadoresSeleccionados){
    console.log('El nombre del jugador es '+ dato.nombre +
    ',su promedio es de ' + dato.promedioGol + ' por partido representando a ' + dato.nacionalidad +
     " con su fabulosa pierna " + dato.piernaHabil );
    
}



const lista = document.getElementById('jugadores');
//for (let i=jugadoresSeleccionados.id; i<4; i++){}
for (const jugador  of jugadoresSeleccionados ){
        
lista.innerHTML =  `<h2>id: ${jugador.id} </h2>   
                <h3>nombre: ${jugador.nombre} </h2>
                <h4>nacionalidad: ${jugador.nacionalidad}</h4> 
                <h5>piernaHabil ${jugador.piernaHabil}</h5>
                <h6>promedioGol: ${jugador.promedioGol}</h6> `;

const li = document.createElement ('li');    
        li.innerHTML = jugador
        

}




















