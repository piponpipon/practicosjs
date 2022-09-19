
 const pokemonnContainer = document.querySelector('#pokemon')
fetch("https://pokeapi.co/api/v2/pokemon/1")
	.then((resp) => resp.json())
	.then((pokemon) => {
		console.log(pokemon)
		pokemonnContainer.innerHTML = ` 
		<h2> ${pokemon.name}</h2>   
	 	<img src = ${pokemon.sprites.front_default} alt = ${pokemon.name}/>;`})

 

	

	
		 const pedirJugadores = () => {
			return new Promise ((resolve, reject) => {
				setTimeout ( () => {
					resolve (jugadoresSeleccionados)
				}, 5000)
			}
			)}





