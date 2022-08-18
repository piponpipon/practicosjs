/*const jugadoresSeleccionados = [
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
]*/

const botella = ['vidrio', 'plastico', 'papel'];

const jugadores = document.getElementById('jugadores');

jugadores.innerHTML = '<h2>Hola Manola</h2>';

let ul = document.createElement ('ul');

for(const votella of botella){
    let li = document.createElement ('li');
    li.innerHTML = votella
    votella.appendChild('li');


}




 



