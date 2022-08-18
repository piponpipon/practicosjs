
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


//console.log(jugadoresSeleccionados)


//let aumenta = jugadoresSeleccionados 

const lista = document.getElementById('jugadores');
for (let i=jugadoresSeleccionados.id; i<4; i++){}
for (const jugador  of jugadoresSeleccionados ){
        
lista.innerHTML =  `<h2>id: ${jugador.id} </h2>   
                <h3>nombre: ${jugador.nombre} </h2>
                <h4>nacionalidad: ${jugador.nacionalidad}</h4> 
                <h5>piernaHabil ${jugador.piernaHabil}</h5>
                <h6>promedioGol: ${jugador.promedioGol}</h6> `; 

const li = document.createElement ('li');    
        li.innerHTML = jugador
        

}

//console.log( jugadoresSeleccionados.length)

   





