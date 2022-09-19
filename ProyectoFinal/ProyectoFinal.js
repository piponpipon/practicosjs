
//Manuel Veller
// Primer entrega del Proyecto Final
// Segunda entrega del proyecto final 18/08/22
// Tercer entrega del proyecto final 23/08/22
// Cuarta entrega del proyecto final 25/08/22
// Quinta entrega del proyecto final 01/09/22
// Sexta entrega del proyecto final 19/09/22

alert('Bienvenidos a CoderHouse Futbol Club');
alert ('Estas en la prueba de seleccion de jugadores, evaluaremos si podes ingresar al equipo')
const boton1 = document.getElementById('boton1');
const pokemonnContainer = document.querySelector('#pokemon')
boton1.addEventListener('click', () => {
Swal.fire(cadaJugador( jugadoresSeleccionados[0]))
fetch("https://pokeapi.co/api/v2/pokemon/33")
	.then((resp) => resp.json())
	.then((pokemon) => {
		pokemonnContainer.innerHTML = ` 
		<h2> En base a sus habildades, su apodo es ${pokemon.name}</h2>   
	 	<img src = ${pokemon.sprites.front_default} alt = ${pokemon.name}/>;`})
})
const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () => {
Swal.fire(cadaJugador( jugadoresSeleccionados[1]))
fetch("https://pokeapi.co/api/v2/pokemon/55")
	.then((resp) => resp.json())
	.then((pokemon) => {
		pokemonnContainer.innerHTML = ` 
		<h2> En base a sus habildades, su apodo es ${pokemon.name}</h2>   
	 	<img src = ${pokemon.sprites.front_default} alt = ${pokemon.name}/>;`})
})
const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', () => {
Swal.fire(cadaJugador( jugadoresSeleccionados[2]))
fetch("https://pokeapi.co/api/v2/pokemon/66")
	.then((resp) => resp.json())
	.then((pokemon) => {
		pokemonnContainer.innerHTML = ` 
		<h2> En base a sus habildades, su apodo es ${pokemon.name}</h2>   
	 	<img src = ${pokemon.sprites.front_default} alt = ${pokemon.name}/>;`})
})
const boton4 = document.getElementById('boton4');
boton4.addEventListener('click', () => {
Swal.fire(cadaJugador( jugadoresSeleccionados[3]))
fetch("https://pokeapi.co/api/v2/pokemon/12")
	.then((resp) => resp.json())
	.then((pokemon) => {
		pokemonnContainer.innerHTML = ` 
		<h2> En base a sus habildades, su apodo es ${pokemon.name}</h2> 
        <img src = ${pokemon.sprites.front_default} alt = ${pokemon.name}/>;`})
})
    function cadaJugador (jugador){
        return 'Nombre: ' + jugador.nombre + '\n' + 'Nacionalidad: ' + jugador.nacionalidad + '\n' +
             'Pierna Habil: ' + jugador.piernaHabil + '\n' + 'Promedio de gol: ' +  jugador.promedioGol
  }
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
        nombre: 'Washinton Silva',
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
    }]
console.log(jugadoresSeleccionados)
class jugadorfutsal {
    constructor (id, nombre,  nacionalidad, piernaHabil, promedioGol) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.piernaHabil = piernaHabil;
        this.promedioGol = promedioGol;
         }}
 const jugadornuevo = new jugadorfutsal (jugadoresSeleccionados.length +1, 
                                            prompt ('Indique su nombre y apellido'),
                                            prompt ('Indique su pais'),
                                            prompt('Cual es tu pierna habil?'),
                                            promDeGol (prompt('Cuantos goles hizo esta temporada?'),
                                                       prompt('Cuantos partidos jugo esta temporada?'))) ;
function promDeGol (cantGol, cantPartidos){
let promedio = (cantGol/cantPartidos)
new Promise(() => {  
setTimeout (() => {
promedio >= 1.5 ? Swal.fire({
icon: 'success',
title: 'Felicitaciones!',
text: 'Fuiste seleccionado/a!!!',})   :
Swal.fire({
icon: 'error',
title: 'Que pena',
text: 'En base a su promedio de gol, no ha sido seleccionado/a',
footer: '<a href=""> Queres volver a intentar?</a>'} ) }),2000 } ) 
return (promedio) }
jugadoresSeleccionados.push(jugadornuevo)
console.log('Nuestro plantel actual es: ')
for (const dato of jugadoresSeleccionados){
    console.log('El nombre del jugador es '+ dato.nombre +
    ',su promedio es de ' + dato.promedioGol + ' por partido representando a ' + dato.nacionalidad +
     " con su fabulosa pierna " + dato.piernaHabil );}
const lista = document.getElementById('jugadores');
const li = document.createElement ('li'); 
if (jugadornuevo.promedioGol <= 1.5){
    lista.innerText = 'Que pena, no ha sido seleccionado/a'
} else{
for (const jugador  of jugadoresSeleccionados ){
lista.innerHTML =  `<h2>id: ${jugador.id} </h2>   
                <h3>nombre: ${jugador.nombre} </h2>
                <h4>nacionalidad: ${jugador.nacionalidad}</h4> 
                <h5>piernaHabil ${jugador.piernaHabil}</h5>
                <h6>promedioGol: ${jugador.promedioGol}</h6> `;
                
                
        
        jugadoresSeleccionados.innerHTML = jugador
        
        fetch("https://pokeapi.co/api/v2/pokemon/90")
        .then((resp) => resp.json())
        .then((pokemon) => {
            pokemonnContainer.innerHTML = ` 
            <h2> En base a tus habildades, tu nuevo apodo es ${pokemon.name}</h2>   
            <img src = ${pokemon.sprites.front_default} alt = ${pokemon.name}/>;`})
    }}




















